from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.pin_form import CreatePinForm, EditPinForm
from app.forms.comment_form import CreateCommentForm
from app.models import User, db, Board, Pin, Board_Pins, Comment
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


#Create a Pin
@pin_routes.route('/', methods=["POST"])
@login_required
def create_pin():
    form = CreatePinForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        new_pin = Pin(
            title=form.data["title"],
            user_id=current_user.id,
            photo_url=form.data["photo_url"],
            description=form.data["description"],
            source_link=form.data["source_link"]
            )

        db.session.add(new_pin)
        db.session.commit()

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


# Get all comments on a specific pin
@pin_routes.route('/<int:id>/comments')
# @login_required
def get_comments_by_pin(id):
    comments_by_pin_id = Comment.query.filter(Comment.pin_id == id).all()
    return {'comments': [comment.to_dict() for comment in comments_by_pin_id]}


#create a comment on a pin
@pin_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def comment_on_pin(id):
    form = CreateCommentForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        content = Comment(
            content=form.data['content'],
            user_id=current_user.id,
            pin_id=id
            )
        db.session.add(content)
        db.session.commit()
        return content.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
