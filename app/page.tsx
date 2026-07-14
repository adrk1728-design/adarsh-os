"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type Role = "assistant" | "user";
type Mode = "recruiter" | "client";

type Message = {
  role: Role;
  content: string;
};

const recruiterPrompts = [
  "Why should we hire Adarsh?",
  "Show me his strongest AI project",
  "How does he build reliable AI agents?",
  "What is his technical stack?"
];

const clientPrompts = [
  "What can Adarsh automate for my company?",
  "How would he improve a slow AI assistant?",
  "Can he build an agentic workflow?",
  "How does he handle production debugging?"
];

const projects = [
  {
    label: "Agentic QA",
    title: "Autonomous AI QA Agent",
    description:
      "Generates test scenarios, executes live conversations, judges responses, scores failures, and produces actionable QA reports.",
    tags: ["LLM Evaluation", "n8n", "Automation"]
  },
  {
  label: "RAG",
  title: "Personal Knowledge Assistant",
  description:
    "An AI assistant that answers questions using a controlled personal knowledge base, safe prompting, and contextual retrieval.",
  tags: ["RAG", "AI Assistant", "Knowledge Base"]
},
  {
    label: "Automation",
    title: "AI Workflow Systems",
    description:
      "Reliable multi-step workflows connecting APIs, models, business logic, validation, reporting, and human escalation.",
    tags: ["APIs", "Agents", "Production"]
  }
];

export default function Home() {
  const [mode, setMode] = useState<Mode>("recruiter");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
"Hi! I'm Adarsh OS, your AI guide to Adarsh Shukla's work. You can ask me about his skills, projects, experience, technical decisions, or how he approaches solving real-world AI and automation problems."    }
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const prompts = useMemo(
    () => (mode === "recruiter" ? recruiterPrompts : clientPrompts),
    [mode]
  );

  async function sendMessage(text: string) {
    const clean = text.trim();
    if (!clean || loading) return;

    const nextMessages = [...messages, { role: "user" as const, content: clean }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, mode })
      });

      if (!response.ok) throw new Error("Chat request failed");

      const data = await response.json();
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply || "I couldn't generate a response."
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The live model is not connected yet. Add OPENAI_API_KEY to .env.local, then restart the app. The interface and local portfolio experience are already working."
        }
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }));
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <main className="shell">
      <div className="noise" />
      <nav className="nav">
        <div className="brand">
          <span className="brandMark">A</span>
          <div>
            <strong>AdarshOS</strong>
            <span>AI Portfolio Agent</span>
          </div>
        </div>
        <div className="navActions">
          <span className="status"><i /> Available for serious opportunities</span>
          <a className="ghostButton" href="/Adarsh-CV.pdf" target="_blank">
            View CV
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <div className="eyebrow">AI DEVELOPER · AGENTIC SYSTEMS · AUTOMATION</div>
          <h1>
            Don’t read another portfolio.
            <span> Interview my AI.</span>
          </h1>
          <p>
            Explore Adarsh’s projects, challenge his technical thinking, inspect his approach to
            production AI, or ask whether he fits your team.
          </p>

          <div className="metrics">
            <div><strong>93%+</strong><span>Automation efficiency</span></div>
            <div><strong>100–1000</strong><span>Automated QA tests/day</span></div>
            <div><strong>Production</strong><span>Engineering-first mindset</span></div>
          </div>

          <div className="projectGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <span className="projectLabel">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="chatPanel">
          <div className="chatHeader">
            <div className="agentIdentity">
              <div className="orb"><span /></div>
              <div>
                <strong>AdarshOS</strong>
                <span>Online · answers from Adarsh’s professional context</span>
              </div>
            </div>
            <div className="modeSwitch">
              <button className={mode === "recruiter" ? "active" : ""} onClick={() => setMode("recruiter")}>
                Recruiter
              </button>
              <button className={mode === "client" ? "active" : ""} onClick={() => setMode("client")}>
                Client
              </button>
            </div>
          </div>

          <div className="messages">
            {messages.map((message, index) => (
              <div className={`message ${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="message assistant typing"><span /><span /><span /></div>}
            <div ref={bottomRef} />
          </div>

          <div className="suggestions">
            {prompts.map((prompt) => (
              <button key={prompt} onClick={() => void sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form className="composer" onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask something recruiters normally cannot learn from a CV..."
              aria-label="Message AdarshOS"
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
              ↑
            </button>
          </form>
          <p className="disclaimer">AI-generated answers may be verified directly with Adarsh.</p>
        </div>
      </section>

      <footer>
        <span>Built as an agentic portfolio experience by Adarsh Shukla.</span>
        <div>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank">LinkedIn</a>
          <a href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank">GitHub</a>
          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || ""}`}>Contact</a>
        </div>
      </footer>
    </main>
  );
}
