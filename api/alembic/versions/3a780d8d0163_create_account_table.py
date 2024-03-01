"""create account table

Revision ID: 3a780d8d0163
Revises: e3d48ade54df
Create Date: 2024-03-01 12:33:21.862388

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '3a780d8d0163'
down_revision: Union[str, None] = 'e3d48ade54df'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
