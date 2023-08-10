from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.actos import actos
from routes.registros import registros


app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://main--glittering-crisp-9fb36c.netlify.app/",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

app.include_router(registros)
app.include_router(actos)


