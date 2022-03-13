from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


#Get all the boards created by user
@user_routes.route('/<int:id>/boards')
# @login_required
def get_boards_by_user(id):
    print('in route ****************************************')
    user = User.query.get(id)

    boards_by_id = db.session.query(Board) \
                        .filter(Board.user_id == user.id)\
                        .options(joinedload(Board.pins)).all()

    print("\n\n\nALLLLLLLL BOARDS\n\n\n\n", boards_by_id)
    # for board in boards_by_id:
    #     print(board.to_dict(), '\n\n********NEW BOARD*********\n\n')
    return {'boards': [board.to_dict() for board in boards_by_id]}



# @user_routes.route('/<int:id>/pins')
# @login_required
# def get_pin_by_user(id):
#     pins_by_id = Pin.query.filter(Pin.user_id == id).all()
#     for pin in pins_by_id:
#         print(pin.to_dict(), '******new pin******')
#     return {'pins': [pin.to_dict()['pin'] for pin in pins_by_id]}

@user_routes.route('/<int:id>/follow', methods=["POST"])
@login_required
def follow_user(id):
    user = User.query.get(id)

    if(user in current_user.following):
        return {'users': [*current_user.to_dict()["following"]]}
    else:
        current_user.following.append(user)
        db.session.commit()
        return {'users': [*current_user.to_dict()["following"]]}


@user_routes.route('/<int:id>/unfollow')
@login_required
def unfollow_user(id):
    user = User.query.get(id)

    if(user in current_user.following):
        current_user.following.remove(user)
        db.session.commit()
        return {'users': [*current_user.to_dict()["following"]]}
    else:
        return {'users': [*current_user.to_dict()["following"]]}
