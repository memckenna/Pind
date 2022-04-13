from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.board_form import CreateBoardForm, EditBoardForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from sqlalchemy import func
from app.api.auth_routes import validation_errors_to_error_messages


search_routes = Blueprint("search", __name__)


@search_routes.route('/<query>')
def get_boards_by_search(query):
    print("QUERYY \n\n\n\n\n", query)
    # lowercase_query = query.lower()
    # boards = Board.query.filter(func.lower(Board.title).contains(lowercase_query)).all()
    # boards = Board.query.filter(Board.title.like("%" + lowercase_query + "%")).all()
    boards = Board.query.filter(Board.title.ilike(f'%{query}%')).all()

    print("BOARDS \n\n\n\n\n", boards)
    return {"board search": [board.to_dict() for board in boards]}

    # pins = db.session.query(Pin).filter(Pin.title.ilike("%" + query + "%")).all()
    # pins = Pin.query.filter(Pin.title.ilike(f'%{query}%')).all()
    # print("PINS \n\n\n\n", pins)
    # return {'pins': [pin.to_dict() for pin in pins]}
