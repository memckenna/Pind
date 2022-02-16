from .db import db
from .board_pin import Board_Pins
from datetime import datetime


class Pin(db.Model):
    __tablename__ = "pins"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    source_link = db.Column(db.Text)
    photo_url = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())


    #One user can have many pins
    user = db.relationship('User', back_populates='pins')

    #Many boards can have many pins
    boards = db.relationship(
        'Board',
        secondary=Board_Pins,
        back_populates='pins'
    )

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'source_link': self.source_link,
            'photo_url': self.photo_url,
            'user_id': self.user_id,
            'created_at': self.created_at,
        }
