from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    #Fashion/Style/Beauty/Home Decor/DIY
    demo = User(
        username='demo', email='demo@aa.io', password='password', first_name='Demo', last_name='User', bio='Casual style ideas, clean beauty, skincare tips, home decor ideas and DIYs, tips for creative entrepreneurs.', age=30, profile_img_url='https://i.pinimg.com/564x/ad/67/25/ad672518c4c36feb32cc952781f312ff.jpg')
    #Interior Design
    kelly = User(
        username='kelly_wells', email='kelly@aa.io', password='password', first_name='Kelly', last_name='Wells', bio='Interior Designer | Helping you infuse function and wellness into your home with modern aesthetics and a mindful approach', age=38, profile_img_url='https://i.pinimg.com/564x/87/de/29/87de29ea8a4bbfc9f4b9ee419f63f1db.jpg')
    #Food / Drinks
    marnie = User(
        username='marnie_barns', email='marnie@aa.io', password='password', first_name='Marnie', last_name='Adams', bio='A food blog for people who like fun simple ingredients and healthy food and drinks', age=42, profile_img_url='https://i.pinimg.com/564x/da/37/d5/da37d53c6549bd59ecd00e4642f52583.jpg')
    #Travel
    chloe = User(
        username='chloe_brown', email='chloe@aa.io', password='password', first_name='Chloe', last_name='Brown', bio='Helping women elevate their beauty, fashion and lifestyle via my LA-based blog.', age=28, profile_img_url='https://i.pinimg.com/564x/f9/28/77/f92877a47e5fc176d968610aa79a1168.jpg')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(kelly)
    db.session.add(chloe)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
