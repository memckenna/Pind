from .db import db


Board_Pins = db.Table(
    "board_pins",
    db.Column(
        "board_id",
        db.Integer,
        db.ForeignKey("boards.id"),
        primary_key=True
    ),
    db.Column(
        "pin_id",
        db.Integer,
        db.ForeignKey("pins.id"),
        primary_key=True
    )
)

# class BoardPin(db.Model):
#     __tablename__ = 'board_pins'

#     id = db.Column(db.Integer, primary_key=True)
#     pin_id = db.Column(db.Integer, db.ForeignKey("pins.id"), primary_key=True)
#     board_id = db.Column(db.Integer, db.ForeignKey("boards.id"), primary_key=True)

    #Many boards can have many pins
    # pins = db.relationship("Pin", back_populates='boards')

    # boards = db.relationship("Board", back_populates='pins')

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'pin_id': self.pin_id,
    #         'board_id': self.board_id
    #     }
