"""create urlshort  table

Revision ID: 2f7418fa8fc3
Revises: 3a780d8d0163
Create Date: 2024-03-01 12:36:37.351178

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2f7418fa8fc3'
down_revision: Union[str, None] = '3a780d8d0163'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
