from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.pin_form import CreatePinForm, EditPinForm
from app.models import User, db, Board, Pin, Board_Pins
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

pin_routes = Blueprint('pins', __name__)


#Grab all Pins on Feed page
@pin_routes.route('')
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
@pin_routes.route('/<int:id>')
# @login_required
def get_pin_by_id(id):
    pin = Pin.query.get(id)
    print("\n\n\nPIN\n\n\n", pin.to_dict())
    return {'pin': pin.to_dict()}



#Create a Pin
@pin_routes.route('/create_pin', methods=["GET", "POST"])
# @login_required
def create_pin():
    form = CreatePinForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_pin = Pin(title=form.data["title"], user_id=current_user.id)
        # new_pin = Pin(photo_url=form.data["photo_url"], user_id=current_user.id)
        db.session.add(new_pin)
        db.session.commit()

        new_pin = Pin(photo_url=form.data["photo_url"], user_id=current_user.id)
        db.session.add(new_pin)
        db.session.commit()
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
        db.session.add(update_pin)
        db.session.commit()
        return {'pins': update_pin.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



#Delete a Pin
@pin_routes.route('/<int:id>/delete', methods=["DELETE"])
@login_required
def delete_pin(id):
    del_pin = Pin.query.get(id)

    db.session.delete(del_pin)
    db.session.commit()
    return {"message": "Deleted"}
