from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.Text)
    age = db.Column(db.Integer, nullable=False)
    profile_img_url = db.Column(db.Text, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    #One user can have many pins
    pins = db.relationship('Pin', back_populates='user')


    #One user can have many boards
    boards = db.relationship('Board', back_populates='user')

    # One user can have many comments
    comments = db.relationship('Comment', back_populates='user')

    # User to user many to many for follows and following
    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref("following", lazy="dynamic"),
        lazy="dynamic"
    )

    def f_to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'age': self.age,
            'profile_img_url': self.profile_img_url,
            'created_at': self.created_at,
            'boards': [board.to_dict() for board in self.boards],
            'pins': [pin.to_dict() for pin in self.pins],
        }


    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'age': self.age,
            'profile_img_url': self.profile_img_url,
            'created_at': self.created_at,
            'boards': [board.to_dict() for board in self.boards],
            'pins': [pin.to_dict() for pin in self.pins],
            'followers': [follower.f_to_dict() for follower in self.followers],
            'following': [follow.f_to_dict() for follow in self.following],
        }
