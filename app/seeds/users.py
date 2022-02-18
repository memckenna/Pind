from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    #Fashion/Style/Beauty/Home Decor/DIY
    demo = User(
        username='demo', email='demo@aa.io', password='password', first_name='Demo', last_name='User', bio='Casual style ideas, clean beauty, skincare tips, home decor ideas and DIYs, tips for creative entrepreneurs.', age=30, profile_img_url='https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-256.png')
    #Interior Design
    kelly = User(
        username='kelly_wells', email='kelly@aa.io', password='password', first_name='Kelly', last_name='Wells', bio='Interior Designer | Helping you infuse function and wellness into your home with modern aesthetics and a mindful approach', age=38, profile_img_url='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_woman_female_person-256.png')
    #Food / Drinks
    marnie = User(
        username='marnie_barns', email='marnie@aa.io', password='password', first_name='Marnie', last_name='Adams', bio='A food blog for people who like fun simple ingredients and healthy food and drinks', age=42, profile_img_url='https://cdn0.iconfinder.com/data/icons/user-pictures/100/female-256.png')
    #Travel
    chloe = User(
        username='chloe_brown', email='chloe@aa.io', password='password', first_name='Chloe', last_name='Brown', bio='Helping women elevate their beauty, fashion and lifestyle via my LA-based blog.', age=28, profile_img_url='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-256.png')


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
