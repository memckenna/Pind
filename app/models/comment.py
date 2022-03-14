from .db import db
from datetime import datetime


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    pin_id = db.Column(db.Integer, db.ForeignKey("pins.id"), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'created_at': self.created_at,
            'user_id': self.user_id,
            'pin_id': self.pin_id,
            # 'user': self.user.to_dict()
        }

    # comments belongs to 1 user
    user = db.relationship('User', back_populates='comments')

    #one post can have many comments
    pin = db.relationship('Pin', back_populates='comments')
