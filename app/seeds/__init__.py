from flask.cli import AppGroup
from .users import seed_users, undo_users
from .boards import seed_boards, undo_boards
from .pins import seed_pins, undo_pins
from .boards_pins import seed_boardpins, undo_boardpins

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_boardpins()
    # seed_boards()
    # seed_pins()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_boardpins()
    # undo_boards()
    # undo_pins()
    # Add other undo functions here
