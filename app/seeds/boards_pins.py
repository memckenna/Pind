from app.models import db, Board, Pin


def seed_boardpins():
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

    db.session.commit()

    #Home Decor
    pin1 = Pin(title='Beautiful Kitchen with Natural Light and Warm Touches', description='This kitchen has natural beauty running through every inch of it', source_link='https://www.instagram.com/p/CDr_hv5pv-S/?igshid=bif2tq8wt4jn', photo_url='https://i.pinimg.com/564x/3c/21/b6/3c21b639a8d687e5f661d752428c986e.jpg', user_id=1)
    pin2 = Pin(title='Clean Minimalistic Kitchen', description='This kitchen provides all the Golden Coast vibes.', source_link='https://www.bosshunting.com.au/lifestyle/design/the-palms-13-deodar-drive-burleigh-heads/', photo_url='https://www.bosshunting.com.au/wp-content/uploads/2021/06/2017002314_13_1_210513_121520-w5464-h8192.jpg', user_id=1)
    pin3 = Pin(title='How to Create a Relaxing Space', description='', source_link='', photo_url='https://i.pinimg.com/564x/71/d5/a9/71d5a9fccb32eef68fd7c624f2bf0f07.jpg', user_id=2)
    pin4 = Pin(title='Back Yard Dreams', description='', source_link='', photo_url='https://i.pinimg.com/originals/39/7f/9e/397f9ed06d0f88bd144d6a80ef9808f0.jpg', user_id=2)
    pin5= Pin(title='Clean minimal living room', description='', source_link='', photo_url='https://i.pinimg.com/originals/b1/ba/ce/b1bace8c412a54865319571c3ace9803.jpg', user_id=1)
    #Food/Drinks
    pin6 = Pin(title='Cotton Candy Rose', description='Rose all day', source_link='', photo_url='https://i.pinimg.com/originals/12/23/7b/12237b91c96b2377f0af8bd01d493a3c.jpg', user_id=3)
    pin7 = Pin(title='Winter White Cheese Board', description='', source_link='https://fashionablehostess.com/wp-content/uploads/2020/01/Soft-Cheeses-on-Cheese-Boards.jpg', photo_url='https://fashionablehostess.com/wp-content/uploads/2020/01/Cheese-Board-DIY.jpg', user_id=3)
    #Fashion
    pin8 = Pin(title='Neutrals', description='Minimalistic stlye', source_link='', photo_url='https://i.pinimg.com/564x/ed/ef/01/edef01b34b206d02ec7d148f429a908f.jpg', user_id=1)
    pin9 = Pin(title='Ivory Jumpsuit Paired with a Touch of Gold', description='', source_link='', photo_url='https://i.pinimg.com/originals/38/c1/93/38c193facc53f24c918566302265f271.jpg', user_id=1)
    pin10 = Pin(title='Pretty in Pink', description='Dreaming of a blush pink wedding dress for your big day?', source_link='', photo_url='https://greenweddingshoes.com/wp-content/uploads/2020/02/80837121_212124316462201_6613679992556936424_n.jpg', user_id=1)
    #Travel
    pin11 = Pin(title='Greece', description='Dreaming of Greece', source_link='', photo_url='https://i.pinimg.com/originals/22/ec/3b/22ec3b063af6ddb5f81cef50e34508a4.jpg', user_id=4)
    pin12= Pin(title='Annecy, France', description='Annecy is quite possibly one of the prettiest lakeside towns in the world.', source_link='', photo_url='https://images.squarespace-cdn.com/content/v1/5e279fcbbf605a1b49d6d862/1580178929542-U8KYKYQ1SC356XYKIEVO/IMG_1701Annecy-France-683x1024.jpg?format=1500w', user_id=4)


    db.session.add(pin1)
    db.session.add(pin2)
    db.session.add(pin3)
    db.session.add(pin4)
    db.session.add(pin5)
    db.session.add(pin6)
    db.session.add(pin7)
    db.session.add(pin8)
    db.session.add(pin9)
    db.session.add(pin10)
    db.session.add(pin11)
    db.session.add(pin12)

    db.session.commit()


    board1.pins.append(pin1)
    board1.pins.append(pin2)
    board2.pins.append(pin5)
    board3.pins.append(pin4)
    board4.pins.append(pin3)
    board5.pins.append(pin7)
    board6.pins.append(pin6)
    board7.pins.append(pin10)
    board8.pins.append(pin8)
    board8.pins.append(pin9)
    board9.pins.append(pin11)
    board9.pins.append(pin12)

    db.session.commit()


def undo_boardpins():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
