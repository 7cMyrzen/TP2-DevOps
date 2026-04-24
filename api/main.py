from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import aiomysql
import os

app = FastAPI()

MONGO_URL = os.getenv("MONGO_URL")
MYSQL_HOST = os.getenv("MYSQL_HOST")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE")

mongo_client = None

@app.on_event("startup")
async def startup_event():
    global mongo_client
    mongo_client = AsyncIOMotorClient(MONGO_URL)

@app.on_event("shutdown")
async def shutdown_event():
    if mongo_client:
        mongo_client.close()

async def get_mysql_connection():
    try:
        conn = await aiomysql.connect(
            host=MYSQL_HOST,
            port=3306,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            db=MYSQL_DATABASE,
            autocommit=True
        )
        return conn
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"MySQL Connection Error: {str(e)}")

@app.get("/posts")
async def get_posts():
    db = mongo_client.blog_db
    cursor = db.posts.find({}, {"_id": 0})
    posts = await cursor.to_list(length=100)
    return posts

@app.get("/users")
async def get_users():
    conn = await get_mysql_connection()
    async with conn.cursor(aiomysql.DictCursor) as cur:
        await cur.execute("SELECT * FROM utilisateurs;")
        users = await cur.fetchall()
    conn.close()
    return users
