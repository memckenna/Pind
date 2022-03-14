from app.models import db, Comment


def seed_comments():
    comment1 = Comment(content="Wow, I love the natural light in this kitchen", user_id=2, pin_id=1)
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )
    # comment2 = Comment(content="", user_id= , pin_id= )

    db.session.add(comment1)

    db.session.commit()



# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
