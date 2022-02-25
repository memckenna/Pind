from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.board_form import CreateBoardForm, EditBoardForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

board_pin_routes = Blueprint('boardpins', __name__)


# GET - Get all pins from a specific board
# @board_pin_routes.route('/')
@board_pin_routes.route('/<int:id>')
def get_board_with_saved_pins(id):
    board = Board.query.get(id)

    board_pins = board.pins

    print("\n\n\nboard_pins\n\n\n", board_pins)

    # pins_by_board_id = db.session.query(Board) \
    #                     .filter(Board.id == board.id).all()

    return {"board_pin": [board_pin.to_dict() for board_pin in board_pins]}


#GET - Get a single pin to select from a list boards
@board_pin_routes.route('/<int:id>')
def get_pin_to_save_to_board(id):
    user = User.query.get(id)

    boards_by_user = db.session.query(Board) \
                        .filter(Board.user_id == user.id)\
                        .options(joinedload(Board.pins)).all()

    print('boards', [board.to_dict() for board in boards_by_user])
    return {'boards': [board.to_dict() for board in boards_by_user]}


#CREATE - use same create for pin and then add board id and append board.pins.append(new_pin)
# POST - Add a pin to a specific board
@board_pin_routes.route('/<int:id>', methods=['POST'])
def add_pin_to_board(id):
    print("\n\n\n\n ID \n\n\n\n", id)
    data = request.json

    # pin_id = Pin.query.get(id)
    # pin = Pin(
    #     title=data["title"],
    #     user_id=current_user.id,
    #     photo_url=data["photo_url"],
    #     description=data["description"],
    #     source_link=data["source_link"],
    #     board=data["boardId"],
    #     pin_id=data["pinId"]
    # )

    board = Board.query.get(id)
    # pin = Pin.query.get(id)
    pin = Pin.query.get(data['pinId'])
    print("\n\n\n\nCREATE PIN ROUTEEEEEE\n\n\n", pin)

    board.pins.append(pin)
    db.session.add(board)
    db.session.commit()

    return pin.to_dict()



#DELETE - Remove a pin from a board
# @board_pin_routes.route('/', methods=['DELETE'])
@board_pin_routes.route('/<int:id>', methods=['DELETE'])
def remove_pin_from_board(id):

    data = request.json

    board = Board.query.get(id)
    pin = Pin.query.get(data['pinId'])

    board.pins.remove(pin)
    db.session.add(board)
    db.session.commit()

    return pin.to_dict()





#UPDATE - Edit a pin to move to other board????
