from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import AnalysisRequest
from ai_engine import analyze_profile

app = FastAPI(title="InternHub AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Backend running"}

@app.post("/analyze")
def analyze(data: AnalysisRequest):
    return analyze_profile(data.student, data.internship)
