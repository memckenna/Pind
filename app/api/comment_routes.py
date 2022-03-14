from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.forms.comment_form import CreateCommentForm
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
    req = request.json
    comment = Comment.query.get(id)
    if(len(req['comment'])):
        comment.content = req['comment']
        db.session.commit()
    return comment.to_dict()


#Delete a comment
@comments_router.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {"message": "Deleted"}
