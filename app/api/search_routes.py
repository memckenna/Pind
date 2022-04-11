from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.board_form import CreateBoardForm, EditBoardForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from sqlalchemy import func
from app.api.auth_routes import validation_errors_to_error_messages


search_routes = Blueprint("search", __name__)


@search_routes.route('/<string:query>')
def get_boards_by_search(query):
    lowercase_query = query.lower()
    boards = Board.query.filter(func.lower(Board.title).contains(lowercase_query)).all()

    return {"board search": [board.to_dict() for board in boards]}
