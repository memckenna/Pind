from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.board_form import CreateBoardForm, EditBoardForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

board_pin_routes = Blueprint('boardpins', __name__)


#GET - Get all pins from a specific board
@board_pin_routes.route('/<int:id>')
def get_board_with_saved_pins(id):
    board = Board.query.get(id)

    board_pins = board.pins

    print("\n\n\nboard_pins\n\n\n", board_pins)

    # pins_by_board_id = db.session.query(Board) \
    #                     .filter(Board.id == board.id).all()

    return {"board_pins": [board_pin.to_dict() for board_pin in board_pins]}


#CREATE - use same create for pin and then add board id and append board.pins.append(new_pin)
# POST - Add a pin to a specific board
@board_pin_routes.route('/<int:id>', methods=['POST'])
def add_pin_to_board(id):
    data = request.json

    board = Board.query.get(id)
    pin = Pin.query.get(data['pinId'])

    board.pins.append(pin)
    db.session.add(board)
    db.session.commit()

    return pin.to_dict()



#DELETE - Remove a pin from a board
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
