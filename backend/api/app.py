from fastapi import FastAPI
from routes.actos import actos
from routes.registros import registros
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# allows cross-origin requests from React
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
    "http://127.0.0.1:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def helloword():    
    return {"message": "Welcome to your todo list."}

app.include_router(registros)
app.include_router(actos)



