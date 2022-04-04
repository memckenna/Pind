from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import User
from wtforms.fields import FileField



class CreatePinForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(message='Please provide a title'),
                        Length(max=50, message='Title must be less than 50 characters.')])
    description = TextAreaField('Description')
    source_link = StringField('Source Link')
    photo_url = StringField('Photo URL',validators=[DataRequired()])
                # Length(min=10, message='Must be a valid URL')])

class EditPinForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired(message='Please provide a title')])
    description = TextAreaField('Description')
    source_link = StringField('Source Link')
    photo_url = StringField('Photo URL', validators=[DataRequired()])
                # Length(min=10, message='Must be a valid URL')])
