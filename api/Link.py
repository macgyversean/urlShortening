from db_main import engine
from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.orm import declarative_base
from pydantic import BaseModel

Base = declarative_base()

class ShortUrl(Base):
    __tablename__ = "urlShortner"


    userid = Column(Integer, primary_key=True, index=True)
    og = Column(String)
    shorturl = Column(String)
    title = Column(String)

class URLCreate(BaseModel):
    og: str
    shorturl:str
    title: str

Base.metadata.create_all(engine)