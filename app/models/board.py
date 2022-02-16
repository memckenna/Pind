from .db import db
from .board_pin import Board_Pins
from datetime import datetime


class Board(db.Model):
    __tablename__ = "boards"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    # public = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    #One user can have many boards
    user = db.relationship('User', back_populates='boards')

    #Many boards can have many pins
    pins = db.relationship(
        'Pin',
        secondary=Board_Pins,
        back_populates='boards'
    )


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'public': self.public,
            'user_id': self.user_id,
            'created_at': self.created_at,
        }
