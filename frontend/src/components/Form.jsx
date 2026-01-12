import { useState } from "react";

export default function Form({ setResult }) {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  const [role, setRole] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [description, setDescription] = useState("");

  const analyze = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      if (!backendUrl) {
        throw new Error("Backend URL not configured");
      }

      const response = await fetch(`${backendUrl}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student: {
            skills: skills.split(",").map((s) => s.trim()),
            interests: interests.split(",").map((i) => i.trim()),
            education,
            experience_level: experience,
          },
          internship: {
            role,
            required_skills: requiredSkills
              .split(",")
              .map((s) => s.trim()),
            description,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error calling backend:", error);
      setResult({
        match_score: 0,
        summary: "Failed to connect to backend.",
        skill_gaps: [],
        resume_tips: [],
      });
    }
  };

  return (
    <div className="glass max-w-6xl mx-auto p-10 space-y-10">
      <div>
        <h2 className="section-title">Student Profile</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <input
            className="input"
            placeholder="Skills (Python, ML)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            className="input"
            placeholder="Interests (AI, Data Science)"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
          <input
            className="input"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <input
            className="input"
            placeholder="Experience Level"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="section-title">Internship Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <input
            className="input"
            placeholder="Internship Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            className="input"
            placeholder="Required Skills (Python, NLP)"
            value={requiredSkills}
            onChange={(e) => setRequiredSkills(e.target.value)}
          />
          <textarea
            className="input md:col-span-2"
            rows="4"
            placeholder="Internship Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <button className="btn w-full" onClick={analyze}>
        Analyze Internship Match
      </button>
    </div>
  );
}
