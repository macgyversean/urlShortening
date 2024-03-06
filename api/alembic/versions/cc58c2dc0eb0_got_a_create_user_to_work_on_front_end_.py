"""got a create user to work on front end using a form

Revision ID: cc58c2dc0eb0
Revises: d87cdbad5353
Create Date: 2024-03-06 15:08:03.256526

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cc58c2dc0eb0'
down_revision: Union[str, None] = 'd87cdbad5353'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
