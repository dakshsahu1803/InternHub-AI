import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen px-6 py-10 space-y-10">
      {/* HERO */}
      <div className="glass max-w-6xl mx-auto p-10">
        <h1 className="text-4xl font-bold mb-2">InternHub AI</h1>
        <p className="text-cyan-400 font-medium mb-4">
          Smart Internship Match Analyzer
        </p>
        <p className="text-gray-300 max-w-3xl">
          Analyze how well your profile matches an internship and receive
          AI-powered insights on skill gaps, strengths, and resume improvements.
        </p>
      </div>

      <Form setResult={setResult} />
      {result && <Result result={result} />}
    </div>
  );
}
