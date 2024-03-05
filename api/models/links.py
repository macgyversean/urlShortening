from db_main import engine
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import mapped_column
from models.base import Base
from pydantic import BaseModel
from .users import User


class Links(Base): 
    __tablename__ = "links"
    id = Column(Integer, primary_key=True, index=True)
    og = Column(String)
    shorturl = Column(String)
    title = Column(String)
    user_id = mapped_column(ForeignKey(User.id))

class linksSchema(BaseModel): 
    og: str
    shorturl:str
    title: str
    user_id: int

class Config:
    populate_by_name = True

