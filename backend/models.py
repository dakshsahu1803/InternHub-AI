from pydantic import BaseModel
from typing import List

class StudentProfile(BaseModel):
    skills: List[str]
    interests: List[str]
    education: str
    experience_level: str

class InternshipJD(BaseModel):
    role: str
    required_skills: List[str]
    description: str

class AnalysisRequest(BaseModel):
    student: StudentProfile
    internship: InternshipJD
