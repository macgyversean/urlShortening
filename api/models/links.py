from api.db_main import engine
from sqlalchemy import Column, Integer, String, Boolean

from pydantic import BaseModel



class ShortUrl(Base): #(links)
    __tablename__ = "urlShortner"
    id = Column(Integer, primary_key=True, index=True)
    og = Column(String)
    shorturl = Column(String)
    title = Column(String)
    user_id = Column(Integer)

class URLCreate(BaseModel): #(linksSchema)
    og: str
    shorturl:str
    title: str
    user_id: int

class Config:
    populate_by_name = True

