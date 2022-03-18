from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.comment_form import CreateCommentForm, EditCommentForm
from app.models import User, db, Pin, Comment
from sqlalchemy.orm import joinedload
from app.api.auth_routes import validation_errors_to_error_messages

comments_router = Blueprint('comments', __name__)


@comments_router.route('/')
# @login_required
def get_all_comments():
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}

#Edit a comment
@comments_router.route('/<int:id>/edit', methods=['PATCH'])
@login_required
def edit_comment(id):
    form = EditCommentForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        update_comment = Comment.query.get(id)
        update_comment.content = form.data['content']
        db.session.add(update_comment)
        db.session.commit()

        return {'comments': update_comment.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    # req = request.json
    # comment = Comment.query.get(id)
    # if(len(req['content'])):
    #     comment.content = req['content']
    #     db.session.commit()
    # return comment.to_dict()


#Delete a comment
@comments_router.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Deleted"}
