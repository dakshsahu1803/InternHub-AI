import os
import json
import re
from groq import Groq


def extract_json(text: str) -> dict:
    
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if not match:
        raise ValueError("No JSON object found in LLM response")
    return json.loads(match.group())


def analyze_profile(student, internship):
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        raise RuntimeError("GROQ_API_KEY is not set")

    client = Groq(api_key=api_key)

    prompt = f"""
You are an AI internship matching assistant.

STUDENT:
Skills: {student.skills}
Interests: {student.interests}
Education: {student.education}
Experience Level: {student.experience_level}

INTERNSHIP:
Role: {internship.role}
Required Skills: {internship.required_skills}
Description: {internship.description}

Return ONLY valid JSON in this format:
{{
  "match_score": number (0-100),
  "summary": string,
  "skill_gaps": [string],
  "resume_tips": [string]
}}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
    )

    raw_output = response.choices[0].message.content
    return extract_json(raw_output)
