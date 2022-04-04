from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.board_form import CreateBoardForm, EditBoardForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

board_routes = Blueprint('boards', __name__)


#Create Board
@board_routes.route('/create_board', methods=["POST"])
@login_required
def create_board():
    form = CreateBoardForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_board = Board(title=form.data["title"], user_id=current_user.id)
        # new_board = Board(description=form.data["description"], user_id=current_user.id)
        db.session.add(new_board)
        db.session.commit()

        return new_board.to_dict()
        # return {'boards': new_board.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#edit title on board
@board_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def edit_board(id):
    form = EditBoardForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        update_board = Board.query.get(id)
        update_board.title = form.data['title']
        # update_board.description = form.data['description']
        db.session.add(update_board)
        db.session.commit()
        return {'boards': update_board.to_dict()}
    #     return update_board.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#delete a specific board
@board_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_board(id):
    del_board = Board.query.get(id) # grabs the post you want to delete

    db.session.delete(del_board) # deletes the post from data base
    db.session.commit() # commits the changes in database
    return {"message": "Deleted"}


#Grab SINGLE BOARD && ALL PINS FOR THAT BOARD
# @board_routes.route('/<int:id>/pins')
@board_routes.route('/<int:id>')
# @login_required
def get_pin_by_user_board(id):
    board = Board.query.get(id)

    pins_by_board_id = db.session.query(Board)\
                        .filter(Board.id == board.id).all()

    return {'pins': [pin.to_dict() for pin in pins_by_board_id]}

