"""added a redirect if wrong login to keep me on same page and if correct take me back to home

Revision ID: 6852e1ab54cd
Revises: cc58c2dc0eb0
Create Date: 2024-03-06 18:12:12.596114

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '6852e1ab54cd'
down_revision: Union[str, None] = 'cc58c2dc0eb0'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
