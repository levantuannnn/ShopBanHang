from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy import create_engine, asc, desc
from sqlalchemy.orm import sessionmaker, Session
from fastapi.middleware.cors import CORSMiddleware

from model import Base, User, Product
from model import UserCreate, UserUpdate, UserResponse
from model import ProductCreate, ProductResponse

app = FastAPI()

# ================= DATABASE =================

DATABASE_URL = "mysql+pymysql://root:123456@localhost/fastapi"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base.metadata.create_all(bind=engine)


# ================= CORS =================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ================= DEPENDENCY =================

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ================= USER API =================

@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(
        name=user.name,
        age=user.age,
        sdt=user.sdt
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@app.get("/users", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()


@app.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.user_id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Không tìm thấy user")
    return user


@app.put("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: int, data: UserUpdate, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.user_id == user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="Không tìm thấy user")

    user.name = data.name
    user.age = data.age
    user.sdt = data.sdt

    db.commit()
    db.refresh(user)
    return user


@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.user_id == user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="Không tìm thấy user")

    db.delete(user)
    db.commit()
    return {"message": "Xóa thành công"}


# ================= PRODUCT API =================

@app.post("/products", response_model=ProductResponse)
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


@app.get("/products", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()


@app.get("/products/sort/asc", response_model=list[ProductResponse])
def sort_asc(db: Session = Depends(get_db)):
    return db.query(Product).order_by(asc(Product.gia)).all()


@app.get("/products/sort/desc", response_model=list[ProductResponse])
def sort_desc(db: Session = Depends(get_db)):
    return db.query(Product).order_by(desc(Product.gia)).all()


# ================= ROOT =================

@app.get("/")
def root():
    return {"message": "API đang chạy OK"}