from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.pin_form import CreatePinForm, EditPinForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)


#Grab all Pins on Feed page
@pin_routes.route('/')
# @login_required
def get_all_pins_on_feed():
    pins = Pin.query.all()

    return {'pins': [pin.to_dict() for pin in pins]}


#Grab one Pin
@pin_routes.route('/<int:id>')
# @login_required
def get_pin_by_id(id):
    pin = Pin.query.get(id)

    return {'pin': pin.to_dict()}

# @pin_routes.route('/<int:id>')
# # @login_required
# def get_a_pin_by_user(id):
#     user = User.query.get(id)
#     following = [u.id for u in user.following]



#Create a Pin
@pin_routes.route('/', methods=["POST"])
@login_required
def create_pin():
    # data = request.json
    form = CreatePinForm()
    # board = Board.query.get(form.data["board_id"])
    # pin = Pin.query.get(id)
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # board_options = Board.query.filter(Board.title == form.data['board']).one()
        # form.data.pop('board')

        new_pin = Pin(
            title=form.data["title"],
            user_id=current_user.id,
            photo_url=form.data["photo_url"],
            description=form.data["description"],
            source_link=form.data["source_link"]
            )

        db.session.add(new_pin)
        db.session.commit()

        #append board and pin
        # board.pins.append(new_pin)
        #commit
        # db.session.commit()
        print("\n\n\n\n\n", new_pin)
        return new_pin.to_dict()
        # return {'pins': new_pin.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


#Edit a Pin
@pin_routes.route('/<int:id>/edit', methods=["PUT"])
@login_required
def edit_pin(id):
    form = EditPinForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        update_pin = Pin.query.get(id)
        update_pin.title = form.data['title']
        update_pin.photo_url = form.data['photo_url']
        update_pin.description = form.data['description']
        update_pin.source_link = form.data['source_link']
        db.session.add(update_pin)
        db.session.commit()
        # print("EDIT PIN ROUTE\n\n\n\n", update_pin.to_dict())
        return {'pins': update_pin.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



#Delete a Pin
@pin_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_pin(id):
    # del_pin = Pin.query.filter(Pin.user_id==current_user.id)
    del_pin = Pin.query.get(id)
    # print("\n\n\n\n DELETE PIN \n\n\n\n", del_pin)

    db.session.delete(del_pin)
    db.session.commit()
    return {"message": "Deleted"}
