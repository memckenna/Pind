from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class CreateCommentForm(FlaskForm):
    content = TextAreaField('Content', validators=[DataRequired()])


class EditCommentForm(FlaskForm):
    content = TextAreaField('Content', validators=[DataRequired()])
