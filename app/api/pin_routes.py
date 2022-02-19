from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)


#Grab all Pins


#Grab one Pin


#Create a Pin


#Edit a Pin


#Delete a Pin
