from app.models import db, Comment


def seed_comments():
    comment1 = Comment(content="Wow, I love the natural light in this kitchen", user_id=2, pin_id=1)
    comment2 = Comment(content="I love the rustic wood mixed in with the white finishes", user_id= 3, pin_id=1 )
    comment3 = Comment(content="Dream kitchen", user_id=4 , pin_id=1 )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()



# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
