from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def user_age_confirmed(form, field):
    #Check if the user is 13 years or older
    age = field.data
    if age < 13:
        raise ValidationError('Must be 13 years or older to create an account.')
    if age > 110:
        raise ValidationError('Please enter your correct age.')



# def profile_img_url_check(form, field):
#     profile_img_url = field.data
#     if profile_img_url < 10:
#         raise ValidationError('Please provide a valid URL for your profile image.')


def match_passswords(form, field):
    password = form.data['password']

    repeat_password = form.data['repeat_password']

    if password != repeat_password:
        raise ValidationError('Password and repeat password input values must match.')


class SignUpForm(FlaskForm):
    first_name = StringField('first name', validators=[DataRequired(),
        Length(min=4, max=50, message="First name must be between 4 and 50 characters long")])
    last_name = StringField('last name', validators=[DataRequired(),
        Length(min=4, max=50, message="Last name must be between 4 and 50 characters long")])
    age = IntegerField('age', validators=[DataRequired(message="Please confirm that you are 13 or older"), user_age_confirmed])
    profile_img_url = TextAreaField('Profile Image URL', validators=[DataRequired(message="Please provide a valid URL")])
    username = StringField(
        'username', validators=[DataRequired(), \
        Length(min=2, max=50, message="Username address must be between 2 and 50 characters long"), \
        username_exists])
    email = StringField('Email', validators=[DataRequired(), \
        Email(message="Please enter a valid email address"), \
        Length(min=6, max=50, message="Email address must be between 6 and 50 characters long"),
        user_exists])
    password = StringField('Password', validators=[DataRequired(), match_passswords, \
        Length(min=6, max=50, message="Password must be between 6 and 50 characters long")])
    repeat_password = StringField('Repeat Password', validators=[DataRequired()])
