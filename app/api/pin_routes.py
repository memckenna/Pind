from flask import Blueprint, jsonify, session
from flask_login import login_required, current_user
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)


#Grab all Pins on Feed page
@pin_routes.route('/')
# @login_required
def get_all_pins_on_feed():
    pins = Pin.query.all()
    print()
    print(pins)
    print()
    # for pin in pins:
    #     print(pin.to_dict())
    return {'pins': [pin.to_dict() for pin in pins]}


#Grab one Pin


#Create a Pin


#Edit a Pin


#Delete a Pin
