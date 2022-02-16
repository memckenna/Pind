from app.models import db, Board, Pin
from app.models import Board_Pins
# from app.seeds.pins import pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10, pin11, pin12

def seed_boards():
    #Home Decor / DIY
    board1 = Board(title='kitchen decor', description='decorating ideas, fun home projects, and inspiring spaces', user_id=1)
    board2 = Board(title='living room decor', description='', user_id=1)
    board3 = Board(title='outdoor spaces', description='', user_id=2)
    board4 = Board(title='home decor', description='', user_id=2)
    #Food
    board5 = Board(title='food', description='', user_id=3)
    board6 = Board(title='cocktails', description='', user_id=3)
    #Fashion / Pretty Things
    board7 = Board(title='style inspo', description='', user_id=1)
    board8 = Board(title='fashion', description='', user_id=1)
    #Travel
    board9 = Board(title='travel', description='', user_id=4)

    db.session.add(board1)
    db.session.add(board2)
    db.session.add(board3)
    db.session.add(board4)
    db.session.add(board5)
    db.session.add(board6)
    db.session.add(board7)
    db.session.add(board8)
    db.session.add(board9)

    p = Pin()
    # b = Board()
    # b.pins.append(p)

    # board1.pins.append(pin1)
    # board1.pins.append(pin2)
    # board2.pins.append(pin5)
    # board3.pins.append(pin4)
    # board4.pins.append(pin3)
    # board5.pins.append(pin7)
    # board6.pins.append(pin6)
    # board7.pins.append(pin10)
    # board8.pins.append(pin8)
    # board8.pins.append(pin9)
    # board9.pins.append(pin11)
    # board9.pins.append(pin12)

    db.session.commit()


def undo_boards():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
