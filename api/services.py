from fastapi import HTTPException, status, Query, Depends
from models.users   import User, UserAccountSchema
from db_main import session
from config import settings
from sqlalchemy.exc import IntegrityError
from fastapi.security import OAuth2PasswordBearer
import jwt

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def create_user(user: UserAccountSchema):
    db_user = User(**user.model_dump())
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

def get_user(email: str):
    return session.query(User).filter(User.email == email).one()


async def get_current_user_token(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("email")
        if email is None:
            raise credentials_exception
    except jwt.ExpiredSignatureError:
            raise credentials_exception
    except jwt.DecodeError:
            raise credentials_exception
    user = session.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    return user