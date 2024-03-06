from fastapi import FastAPI, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from db_main import session, engine
from models.links import Links, linksSchema
from models.base import Base
from config import settings
from models.users import User, UserSchema, UserAccountSchema
from services import create_user, get_user


def create_tables():
    Base.metadata.create_all(bind=engine)

def start_application():
    app = FastAPI(title=settings.PROJECT_NAME, 
                  version=settings.PROJECT_VERSION)

    create_tables()
    return app

app = start_application()

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

@app.get("/users")
def get_users():
    users = session.query(User)
    return users.all()

@app.post("/create/links")
async def create_ShortUrl( url_data: linksSchema):
    new_ceo = Links(**url_data.dict())
    session.add(new_ceo)
    session.commit()
    return {"URL added": new_ceo.shorturl}

@app.post("/register", response_model=UserSchema)
def register_user(payload: UserAccountSchema):
    payload.hashed_password = User.hashpassword(payload.hashed_password)
    return create_user(user=payload)

@app.post("/login")
async def login(payload: UserAccountSchema):
    try: 
        user: User = get_user(email=payload.email)
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid User Credentials"
        )
    is_validated: bool = user.validate_password(payload.hashed_password)
    
    if not is_validated:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid User Credentials"
        )
    return {"detail": "Login Successful"}
