from sqlalchemy.orm import declarative_base
from sqlalchemy import Integer, Column, String, ForeignKey
from pydantic import BaseModel, ConfigDict

Base = declarative_base()
 

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    age = Column(Integer)
    sdt = Column(String(15))


class Product(Base):
    __tablename__ = "product"

    product_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.user_id"))
    gia = Column(Integer)
 
class UserResponse(BaseModel):
    user_id: int
    name: str
    age: int
    sdt: str

    model_config = ConfigDict(from_attributes=True)


class UserCreate(BaseModel):
    name: str
    age: int
    sdt: str


class UserUpdate(BaseModel):
    name: str
    age: int
    sdt: str
class ProductCreate(BaseModel):
    user_id: int
    gia: int


class ProductResponse(BaseModel):
    product_id: int
    user_id: int
    gia: int

    model_config = ConfigDict(from_attributes=True)