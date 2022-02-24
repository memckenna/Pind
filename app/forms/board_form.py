from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import User
from wtforms.fields import FileField


class CreateBoardForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(), Length(max=70, message='Title must be less than 70 characters long.')])
    # description = TextAreaField('Description')

class EditBoardForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(message='Please provide a title')])
    # description = TextAreaField('Description')
