<!-- ===================== -->
<!--  InternHub AI README  -->
<!-- ===================== -->

<div align="center" style="background:linear-gradient(135deg,#020617,#020617,#0f172a);padding:40px;border-radius:18px;color:white;font-family:Segoe UI,Arial">

  <h1 style="font-size:48px;color:#38bdf8;margin-bottom:10px;">
    🚀 InternHub AI
  </h1>
  <p>
  🌐 <strong>Live Application:</strong>
  <a href="https://intern-hub-ai.vercel.app/" target="_blank">
    https://intern-hub-ai.vercel.app/
  </a>
</p>


  <h3 style="font-weight:400;color:#e5e7eb;margin-top:0;">
    Smart Internship Match Analyzer
  </h3>

  <p style="max-width:900px;margin:auto;color:#cbd5f5;font-size:17px;line-height:1.6;">
    InternHub AI is an <b>AI-powered full-stack web application</b> that evaluates how well a student’s
    profile matches an internship role. It generates a <b>match score</b>, identifies
    <b>skill gaps</b>, and provides <b>resume improvement suggestions</b> using
    Large Language Models.
  </p>

  <br/>

  <img src="https://img.shields.io/badge/Status-Deployed-success?style=for-the-badge&color=22c55e"/>
  <img src="https://img.shields.io/badge/Backend-FastAPI-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Frontend-React+Vite-cyan?style=for-the-badge"/>

</div>

<br/><br/>

<!-- ===================== -->
<!--  PROJECT OVERVIEW     -->
<!-- ===================== -->

<h2>📌 Project Overview</h2>

<p>
InternHub AI helps students understand how well their skills align with internship opportunities.
Instead of guessing eligibility, users receive AI-generated insights based on their profile
and the internship requirements.
</p>

<ul>
  <li>📊 Internship match score</li>
  <li>🧠 AI-based skill gap analysis</li>
  <li>📄 Resume improvement tips</li>
  <li>⚡ Real-time API response</li>
</ul>

<hr/>

<!-- ===================== -->
<!--  SYSTEM ARCHITECTURE  -->
<!-- ===================== -->

<h2>🧩 System Architecture</h2>

<table border="1" cellpadding="12" cellspacing="0" width="100%">
  <tr style="background:#0f172a;color:#38bdf8;">
    <th>Layer</th>
    <th>Technology</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>React + Vite + Tailwind</td>
    <td>User interface for entering profile & viewing AI results</td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>FastAPI</td>
    <td>REST API for handling requests and responses</td>
  </tr>
  <tr>
    <td>AI Engine</td>
    <td>Groq LLM (LLaMA)</td>
    <td>Generates analysis, match score, and recommendations</td>
  </tr>
  <tr>
    <td>Deployment</td>
    <td>Vercel + Render</td>
    <td>Frontend and backend hosting</td>
  </tr>
</table>

<hr/>

<!-- ===================== -->
<!--  FEATURES             -->
<!-- ===================== -->

<h2>✨ Key Features</h2>

<ul>
  <li>✅ Student profile analysis</li>
  <li>✅ Internship requirement matching</li>
  <li>✅ AI-generated match score</li>
  <li>✅ Skill gap identification</li>
  <li>✅ Resume improvement suggestions</li>
  <li>✅ Clean & aesthetic UI</li>
  <li>✅ Deployed & production-ready</li>
</ul>

<hr/>

<!-- ===================== -->
<!--  TECH STACK           -->
<!-- ===================== -->

<h2>🛠️ Tech Stack</h2>

<table width="100%" cellpadding="10">
<tr>
<td align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50"/><br/>
  React
</td>
<td align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="50"/><br/>
  Vite
</td>
<td align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50"/><br/>
  Python
</td>
<td align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width="50"/><br/>
  FastAPI
</td>
<td align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="50"/><br/>
  Tailwind
</td>
</tr>
<tr>
<td align="center">
  <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" width="50"/><br/>
  Groq LLM
</td>
<td align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50"/><br/>
  GitHub
</td>
<td align="center">
  <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" width="50"/><br/>
  Vercel
</td>
<td align="center">
  <img src="https://avatars.githubusercontent.com/u/44494890?s=200&v=4" width="50"/><br/>
  Render
</td>

<td></td>
</tr>
</table>

<hr/>

<!-- ===================== -->
<!--  API DETAILS          -->
<!-- ===================== -->

<h2>🔌 API Endpoint</h2>

<table border="1" cellpadding="10" cellspacing="0">
<tr>
  <th>Method</th>
  <th>Endpoint</th>
  <th>Description</th>
</tr>
<tr>
  <td>POST</td>
  <td>/analyze</td>
  <td>Analyzes student & internship data using AI</td>
</tr>
</table>

<h3>📥 Sample Request</h3>

<pre>
{
  "student": {
    "skills": ["Python", "Machine Learning"],
    "interests": ["AI", "Data Science"],
    "education": "B.Tech CSE",
    "experience_level": "Fresher"
  },
  "internship": {
    "role": "AI Intern",
    "required_skills": ["Python", "Deep Learning", "NLP"],
    "description": "Work on AI models and research"
  }
}
</pre>

<hr/>

<!-- ===================== -->
<!--  DEPLOYMENT           -->
<!-- ===================== -->

<h2>🚀 Deployment</h2>

<ul>
  <li><b>Frontend:</b> Deployed on Vercel</li>
  <li><b>Backend:</b> Deployed on Render</li>
  <li><b>Environment Variables:</b> Secure API keys using `.env`</li>
</ul>

<hr/>

<!-- ===================== -->
<!--  AUTHOR               -->
<!-- ===================== -->

<h2>👨‍💻 Author</h2>

<p>
<b>Daksh Sahu</b><br/>
Aspiring Full-Stack & AI Engineer<br/>
Passionate about building scalable, AI-driven applications.
</p>

<hr/>

<div align="center" style="color:#94a3b8;">
  ⭐ If you like this project, give it a star on GitHub!
</div>
