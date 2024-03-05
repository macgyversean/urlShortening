from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from db_main import session
from models.links import Links, linksSchema
from models.base import Base

app = FastAPI()

origins = [
    "http://localhost:8000",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3000/ceos",
    "http://localhost:5173",
    "http://localhost:5174"
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def home():
    return {"message: root route."}

@app.get('/links')
def get_shorturl():
    shorturl = session.query(Links)
    return shorturl.all()

@app.post("/create/links")
async def create_ShortUrl( url_data: linksSchema):
    new_ceo = Links(**url_data.dict())
    session.add(new_ceo)
    session.commit()
    return {"URL added": new_ceo.shorturl}

def create_tables():
    Base.metadata.create_all(session)