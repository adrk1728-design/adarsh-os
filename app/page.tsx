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
  "What is his technical stack?",
];

const clientPrompts = [
  "What can Adarsh automate for my company?",
  "How would he improve a slow AI assistant?",
  "Can he build an agentic workflow?",
  "How does he handle production debugging?",
];

const projects = [
  {
    label: "Agentic QA",
    title: "Autonomous AI QA Agent",
    description:
      "Generates test scenarios, executes live conversations, judges responses, scores failures, and produces actionable QA reports.",
    tags: ["LLM Evaluation", "n8n", "Automation"],
  },
  {
    label: "RAG",
    title: "Personal Knowledge Assistant",
    description:
      "An AI assistant that answers questions using a controlled personal knowledge base, safe prompting, and contextual retrieval.",
    tags: ["RAG", "AI Assistant", "Knowledge Base"],
  },
  {
    label: "Automation",
    title: "AI Workflow Systems",
    description:
      "Reliable multi-step workflows connecting APIs, models, business logic, validation, reporting, and human escalation.",
    tags: ["APIs", "Agents", "Production"],
  },
  {
    label: "Reliability",
    title: "Aegis Incident Recovery",
    description:
      "Diagnoses AI and API failures, scores severity, recommends guarded recovery strategies, and returns structured incident reports.",
    tags: ["n8n", "Incident Automation", "Webhooks"],
  },
];

export default function Home() {
  const [mode, setMode] = useState<Mode>("recruiter");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Adarsh OS, your AI guide to Adarsh Shukla's work. You can ask me about his skills, projects, experience, technical decisions, or how he approaches solving real-world AI and automation problems.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const prompts = useMemo(
    () => (mode === "recruiter" ? recruiterPrompts : clientPrompts),
    [mode]
  );

  async function sendMessage(text: string) {
    const clean = text.trim();

    if (!clean || loading) return;

    const nextMessages = [
      ...messages,
      {
        role: "user" as const,
        content: clean,
      },
    ];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
          mode,
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.reply || "I couldn't generate a response.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The live model is temporarily unavailable. Please try again or contact Adarsh directly.",
        },
      ]);
    } finally {
      setLoading(false);

      requestAnimationFrame(() => {
        bottomRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
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
          <span className="status">
            <i />
            Available for serious opportunities
          </span>

          <a
            className="ghostButton"
            href="/Adarsh-CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <div className="eyebrow">
            AI DEVELOPER · AGENTIC SYSTEMS · AUTOMATION
          </div>

          <h1>
            Don&apos;t read another portfolio.
            <span> Interview my AI.</span>
          </h1>

          <p>
            Explore Adarsh&apos;s projects, challenge his technical thinking,
            inspect his approach to production AI, or ask whether he fits your
            team.
          </p>

          <div className="metrics">
            <div>
              <strong>93%+</strong>
              <span>Automation efficiency</span>
            </div>

            <div>
              <strong>100–1000</strong>
              <span>Automated QA tests/day</span>
            </div>

            <div>
              <strong>Production</strong>
              <span>Engineering-first mindset</span>
            </div>
          </div>

          <div className="projectGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <span className="projectLabel">{project.label}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="chatPanel">
          <div className="chatHeader">
            <div className="agentIdentity">
              <div className="orb">
                <span />
              </div>

              <div>
                <strong>AdarshOS</strong>
                <span>
                  Online · answers from Adarsh&apos;s professional context
                </span>
              </div>
            </div>

            <div className="modeSwitch">
              <button
                type="button"
                className={mode === "recruiter" ? "active" : ""}
                onClick={() => setMode("recruiter")}
              >
                Recruiter
              </button>

              <button
                type="button"
                className={mode === "client" ? "active" : ""}
                onClick={() => setMode("client")}
              >
                Client
              </button>
            </div>
          </div>

          <div className="messages">
            {messages.map((message, index) => (
              <div
                className={`message ${message.role}`}
                key={`${message.role}-${index}`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="message assistant typing">
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="suggestions">
            {prompts.map((prompt) => (
              <button
                type="button"
                key={prompt}
                onClick={() => void sendMessage(prompt)}
              >
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

            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              ↑
            </button>
          </form>

          <p className="disclaimer">
            AI-generated answers may be verified directly with Adarsh.
          </p>
        </div>
      </section>


      <section className="featuredWork">
        <div className="featuredGlow featuredGlowOne" />
        <div className="featuredGlow featuredGlowTwo" />

        <div className="featuredHeader">
          <div>
            <span className="featuredEyebrow">
              <i />
              FEATURED WORK
            </span>

            <h2>
              I don&apos;t just discuss AI.
              <span> I ship it.</span>
            </h2>
          </div>

          <p>
            Three real AI systems built around conversational experiences,
            autonomous testing, incident recovery, production engineering and
            measurable operational value.
          </p>
        </div>

        <div className="featuredProjects">
          <a
            href="/projects/ai-portfolio"
            className="featuredCard"
            aria-label="Explore AI Portfolio Assistant project"
          >
            <div className="featuredCardTop">
              <div className="featuredIndex">01 / FEATURED PROJECT</div>

              <div className="featuredLive">
                <span />
                LIVE
              </div>
            </div>

            <div className="featuredCardContent">
              <div className="featuredInformation">
                <div className="featuredProjectType">
                  AI PRODUCT · CONVERSATIONAL EXPERIENCE
                </div>

                <h3>AI Portfolio Assistant</h3>

                <p>
                  An intelligent portfolio agent that allows recruiters and
                  clients to explore my experience, engineering decisions,
                  projects and technical capabilities through natural
                  conversation.
                </p>

                <div className="featuredTags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Gemini</span>
                  <span>AI API</span>
                  <span>Vercel</span>
                </div>

                <div className="featuredExplore">
                  Explore full case study
                  <span>↗</span>
                </div>
              </div>

              <div className="featuredVisual">
                <div className="visualBrowser">
                  <div className="visualBrowserBar">
                    <div className="browserDots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="browserUrl">adarsh-os.vercel.app</div>
                  </div>

                  <div className="visualInterface">
                    <div className="visualHero">
                      <span>ADARSH OS</span>

                      <strong>
                        Don&apos;t browse
                        <br />
                        my portfolio.
                      </strong>

                      <p>Ask my AI instead.</p>
                    </div>

                    <div className="visualChat">
                      <div className="visualAgent">
                        <div className="miniOrb" />

                        <div>
                          <strong>AdarshOS</strong>
                          <span>Online</span>
                        </div>
                      </div>

                      <div className="visualQuestion">
                        What kind of AI systems has Adarsh built?
                      </div>

                      <div className="visualAnswer">
                        AI assistants, RAG systems, autonomous QA agents and
                        production automation workflows.
                      </div>

                      <div className="visualInput">
                        Ask about Adarsh&apos;s work...
                        <span>↑</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floatingBadge badgeOne">
                  <span>93%+</span>
                  Automation efficiency
                </div>

                <div className="floatingBadge badgeTwo">
                  <span>24/7</span>
                  Live AI experience
                </div>
              </div>
            </div>

            <div className="featuredBottom">
              <span>Strategy</span>
              <i />
              <span>Design</span>
              <i />
              <span>AI Engineering</span>
              <i />
              <span>Deployment</span>

              <strong>VIEW PROJECT ↗</strong>
            </div>
          </a>

          <a
            href="/projects/autonomous-ai-qa"
            className="featuredCard"
            aria-label="Explore Autonomous AI QA Agent project"
          >
            <div className="featuredCardTop">
              <div className="featuredIndex">02 / FEATURED PROJECT</div>

              <div className="featuredLive featuredBuilt">
                <span />
                BUILT
              </div>
            </div>

            <div className="featuredCardContent">
              <div className="featuredInformation">
                <div className="featuredProjectType">
                  AGENTIC AI · AUTOMATED EVALUATION
                </div>

                <h3>Autonomous AI QA Agent</h3>

                <p>
                  A multi-stage testing system that generates scenarios,
                  executes live conversations, evaluates responses, detects
                  hallucinations and converts failures into actionable QA
                  reports.
                </p>

                <div className="featuredTags">
                  <span>Agentic AI</span>
                  <span>LLM Evaluation</span>
                  <span>n8n</span>
                  <span>Gemini</span>
                  <span>Reporting</span>
                </div>

                <div className="featuredExplore">
                  Explore full case study
                  <span>↗</span>
                </div>
              </div>

              <div className="featuredVisual">
                <div className="visualBrowser qaBrowser">
                  <div className="visualBrowserBar">
                    <div className="browserDots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="browserUrl">
                      autonomous-qa-agent.workflow
                    </div>
                  </div>

                  <div className="qaWorkflow">
                    <div className="qaNode activeQaNode">
                      <span>01</span>
                      <div>
                        <strong>Planner Agent</strong>
                        <p>Generate test scenarios</p>
                      </div>
                    </div>

                    <div className="qaConnector" />

                    <div className="qaNode">
                      <span>02</span>
                      <div>
                        <strong>Live Test Runner</strong>
                        <p>Execute conversations</p>
                      </div>
                    </div>

                    <div className="qaConnector" />

                    <div className="qaNode">
                      <span>03</span>
                      <div>
                        <strong>AI Judge</strong>
                        <p>Score and classify failures</p>
                      </div>
                    </div>

                    <div className="qaConnector" />

                    <div className="qaNode resultQaNode">
                      <span>04</span>
                      <div>
                        <strong>QA Report</strong>
                        <p>Return actionable fixes</p>
                      </div>
                    </div>
                  </div>

                  <div className="qaStats">
                    <div>
                      <strong>100–1000</strong>
                      <span>Tests per day</span>
                    </div>
                    <div>
                      <strong>8+</strong>
                      <span>Quality criteria</span>
                    </div>
                    <div>
                      <strong>Live</strong>
                      <span>Assistant testing</span>
                    </div>
                  </div>
                </div>

                <div className="floatingBadge badgeOne">
                  <span>94.6%</span>
                  Latest pass rate
                </div>

                <div className="floatingBadge badgeTwo">
                  <span>LIVE</span>
                  Automated evaluation
                </div>
              </div>
            </div>

            <div className="featuredBottom">
              <span>Planning</span>
              <i />
              <span>Execution</span>
              <i />
              <span>Evaluation</span>
              <i />
              <span>Reporting</span>

              <strong>VIEW PROJECT ↗</strong>
            </div>
          </a>

          <a
            href="https://github.com/adrk1728-design/aegis-autonomous-incident-recovery"
            target="_blank"
            rel="noreferrer"
            className="featuredCard aegisCard"
            aria-label="Explore Aegis Autonomous Incident Recovery Engine on GitHub"
          >
            <div className="featuredCardTop">
              <div className="featuredIndex">03 / FEATURED PROJECT</div>

              <div className="featuredLive">
                <span />
                LIVE API
              </div>
            </div>

            <div className="featuredCardContent">
              <div className="featuredInformation">
                <div className="featuredProjectType">
                  RELIABILITY AUTOMATION · INCIDENT RECOVERY
                </div>

                <h3>Aegis Incident Recovery Engine</h3>

                <p>
                  A production-style n8n system that receives AI and API
                  failures, validates the incident, identifies the likely root
                  cause, scores severity, selects guarded recovery strategies
                  and returns structured incident reports through a live
                  dashboard.
                </p>

                <div className="featuredTags">
                  <span>n8n</span>
                  <span>JavaScript</span>
                  <span>Webhooks</span>
                  <span>Incident Automation</span>
                  <span>Reliability</span>
                </div>

                <div className="featuredExplore">
                  View GitHub case study
                  <span>↗</span>
                </div>
              </div>

              <div className="featuredVisual">
                <div className="visualBrowser aegisBrowser">
                  <div className="visualBrowserBar">
                    <div className="browserDots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="browserUrl">
                      aegis.production.incident-engine
                    </div>
                  </div>

                  <div className="aegisInterface">
                    <div className="aegisMetrics">
                      <div>
                        <span>ROOT CAUSE</span>
                        <strong>Rate Limit</strong>
                      </div>
                      <div>
                        <span>CONFIDENCE</span>
                        <strong>97%</strong>
                      </div>
                      <div>
                        <span>SEVERITY</span>
                        <strong>Critical</strong>
                      </div>
                    </div>

                    <div className="aegisPipeline">
                      <div className="aegisNode activeAegisNode">
                        <span>01</span>
                        <div>
                          <strong>Incident Intake</strong>
                          <p>Normalize and validate payload</p>
                        </div>
                      </div>

                      <div className="aegisLine" />

                      <div className="aegisNode activeAegisNode">
                        <span>02</span>
                        <div>
                          <strong>Root Cause Analysis</strong>
                          <p>Detect failure category and confidence</p>
                        </div>
                      </div>

                      <div className="aegisLine" />

                      <div className="aegisNode">
                        <span>03</span>
                        <div>
                          <strong>Recovery Policy</strong>
                          <p>Bounded exponential backoff</p>
                        </div>
                      </div>

                      <div className="aegisLine" />

                      <div className="aegisNode resultAegisNode">
                        <span>04</span>
                        <div>
                          <strong>Incident Report</strong>
                          <p>Structured actions and next step</p>
                        </div>
                      </div>
                    </div>

                    <div className="aegisHealth">
                      <div>
                        <span>System health</span>
                        <strong>43 / 100</strong>
                      </div>
                      <div className="aegisHealthTrack">
                        <span />
                      </div>
                      <small>Recovery plan generated · Human-safe guardrails applied</small>
                    </div>
                  </div>
                </div>

                <div className="floatingBadge badgeOne">
                  <span>23</span>
                  Meaningful workflow nodes
                </div>

                <div className="floatingBadge badgeTwo">
                  <span>9</span>
                  Recovery strategies
                </div>
              </div>
            </div>

            <div className="featuredBottom">
              <span>Detection</span>
              <i />
              <span>Diagnosis</span>
              <i />
              <span>Recovery</span>
              <i />
              <span>Reporting</span>

              <strong>VIEW GITHUB ↗</strong>
            </div>
          </a>
        </div>
      </section>

      <footer>
        <span>Built as an agentic portfolio experience by Adarsh Shukla.</span>

        <div>
          <a
            href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || ""}`}>
            Contact
          </a>
        </div>
      </footer>

      <style jsx>{`
        .featuredWork {
          position: relative;
          width: min(1380px, calc(100% - 48px));
          margin: 90px auto 30px;
          padding: 100px 0 60px;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .featuredProjects {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 34px;
        }

        .featuredGlow {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(110px);
          opacity: 0.2;
        }

        .featuredGlowOne {
          width: 420px;
          height: 420px;
          top: 80px;
          right: -180px;
          background: #8757ff;
        }

        .featuredGlowTwo {
          width: 340px;
          height: 340px;
          bottom: 50px;
          left: -180px;
          background: #087cff;
        }

        .featuredHeader {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
          align-items: end;
          gap: 70px;
          margin-bottom: 50px;
        }

        .featuredEyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #aaa6b6;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .featuredEyebrow i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8b5cf6;
          box-shadow: 0 0 18px rgba(139, 92, 246, 0.9);
        }

        .featuredHeader h2 {
          max-width: 880px;
          margin: 20px 0 0;
          color: #ffffff;
          font-size: clamp(45px, 6vw, 85px);
          line-height: 0.98;
          letter-spacing: -0.065em;
        }

        .featuredHeader h2 span {
          display: block;
          color: #77727f;
        }

        .featuredHeader > p {
          margin: 0;
          color: #8f8a98;
          font-size: 16px;
          line-height: 1.8;
        }

        .featuredCard {
          position: relative;
          display: block;
          overflow: hidden;
          padding: 30px;
          color: inherit;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 32px;
          background:
            radial-gradient(circle at 85% 20%, rgba(139, 92, 246, 0.14), transparent 35%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
          box-shadow:
            0 50px 130px rgba(0, 0, 0, 0.42),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(24px);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .featuredCard:hover {
          transform: translateY(-8px);
          border-color: rgba(139, 92, 246, 0.45);
          box-shadow:
            0 60px 150px rgba(0, 0, 0, 0.55),
            0 0 70px rgba(139, 92, 246, 0.11),
            inset 0 1px 0 rgba(255, 255, 255, 0.11);
        }

        .featuredCardTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .featuredIndex {
          color: #6f6b78;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .featuredLive {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          color: #b7f7cd;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          border: 1px solid rgba(34, 197, 94, 0.22);
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.07);
        }

        .featuredLive span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 14px rgba(34, 197, 94, 0.9);
        }

        .featuredBuilt {
          color: #d8ccff;
          border-color: rgba(139, 92, 246, 0.3);
          background: rgba(139, 92, 246, 0.08);
        }

        .featuredBuilt span {
          background: #8b5cf6;
          box-shadow: 0 0 14px rgba(139, 92, 246, 0.9);
        }

        .featuredCardContent {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(480px, 1.15fr);
          align-items: center;
          gap: 70px;
          padding: 70px 15px 60px;
        }

        .featuredProjectType {
          color: #9780ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .featuredInformation h3 {
          max-width: 600px;
          margin: 18px 0 0;
          color: #ffffff;
          font-size: clamp(43px, 5vw, 76px);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .featuredInformation > p {
          max-width: 590px;
          margin: 25px 0 0;
          color: #96919f;
          font-size: 16px;
          line-height: 1.8;
        }

        .featuredTags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 30px;
        }

        .featuredTags span {
          padding: 9px 12px;
          color: #b8b4c0;
          font-size: 11px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.035);
        }

        .featuredExplore {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-top: 42px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
        }

        .featuredExplore span {
          display: grid;
          width: 40px;
          height: 40px;
          place-items: center;
          border-radius: 50%;
          background: #ffffff;
          color: #09090b;
          transition: transform 0.3s ease;
        }

        .featuredCard:hover .featuredExplore span {
          transform: translate(4px, -4px);
        }

        .featuredVisual {
          position: relative;
          min-width: 0;
          perspective: 1200px;
        }

        .visualBrowser {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          background: #09090c;
          box-shadow:
            0 35px 90px rgba(0, 0, 0, 0.58),
            0 0 70px rgba(123, 83, 255, 0.09);
          transform: rotateY(-5deg) rotateX(2deg);
          transition: transform 0.45s ease;
        }

        .featuredCard:hover .visualBrowser {
          transform: rotateY(0deg) rotateX(0deg) translateY(-5px);
        }

        .visualBrowserBar {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          min-height: 45px;
          padding: 0 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: #111115;
        }

        .browserDots {
          display: flex;
          gap: 6px;
        }

        .browserDots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #393940;
        }

        .browserUrl {
          justify-self: center;
          color: #68636f;
          font-size: 9px;
        }

        .visualInterface {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          min-height: 390px;
        }

        .visualHero,
        .visualChat {
          padding: 28px;
        }

        .visualHero {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          background:
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.18), transparent 38%),
            #0b0b0f;
        }

        .visualHero > span {
          color: #9b7fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .visualHero > strong {
          margin-top: 15px;
          font-size: clamp(27px, 3vw, 45px);
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .visualHero > p {
          margin: 15px 0 0;
          color: #817b88;
          font-size: 12px;
        }

        .visualChat {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 12px;
          background: #0d0d12;
        }

        .visualAgent {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: auto;
        }

        .miniOrb {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #ffffff, #8b5cf6 35%, #312e81);
          box-shadow: 0 0 24px rgba(139, 92, 246, 0.38);
        }

        .visualAgent strong,
        .visualAgent span {
          display: block;
        }

        .visualAgent strong {
          font-size: 11px;
        }

        .visualAgent span {
          margin-top: 2px;
          color: #6ee7a5;
          font-size: 8px;
        }

        .visualQuestion,
        .visualAnswer,
        .visualInput {
          padding: 12px 14px;
          font-size: 10px;
          line-height: 1.55;
        }

        .visualQuestion {
          align-self: flex-end;
          max-width: 86%;
          color: #111111;
          border-radius: 14px 14px 4px 14px;
          background: #ffffff;
        }

        .visualAnswer {
          max-width: 92%;
          color: #c9c5cf;
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 14px 14px 14px 4px;
          background: rgba(139, 92, 246, 0.1);
        }

        .visualInput {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 5px;
          color: #615c67;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .visualInput span {
          display: grid;
          width: 25px;
          height: 25px;
          place-items: center;
          color: #111111;
          border-radius: 50%;
          background: #ffffff;
        }

        .qaBrowser {
          transform: rotateY(-4deg) rotateX(2deg);
        }

        .qaWorkflow {
          padding: 28px;
          background:
            radial-gradient(circle at 90% 10%, rgba(139, 92, 246, 0.12), transparent 35%),
            #0d0d12;
        }

        .qaNode {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 15px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.025);
        }

        .qaNode > span {
          display: grid;
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          place-items: center;
          color: #a889ff;
          font-size: 9px;
          font-weight: 800;
          border: 1px solid rgba(139, 92, 246, 0.26);
          border-radius: 10px;
          background: rgba(139, 92, 246, 0.08);
        }

        .qaNode strong {
          display: block;
          font-size: 11px;
        }

        .qaNode p {
          margin: 3px 0 0;
          color: #706b78;
          font-size: 9px;
        }

        .activeQaNode {
          border-color: rgba(139, 92, 246, 0.36);
          background: rgba(139, 92, 246, 0.07);
        }

        .resultQaNode {
          border-color: rgba(34, 197, 94, 0.24);
          background: rgba(34, 197, 94, 0.045);
        }

        .qaConnector {
          width: 2px;
          height: 14px;
          margin-left: 44px;
          background: rgba(255, 255, 255, 0.1);
        }

        .qaStats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          background: #0a0a0e;
        }

        .qaStats div {
          padding: 15px;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
        }

        .qaStats div:last-child {
          border-right: 0;
        }

        .qaStats strong,
        .qaStats span {
          display: block;
        }

        .qaStats strong {
          font-size: 12px;
        }

        .qaStats span {
          margin-top: 4px;
          color: #696470;
          font-size: 7px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .aegisCard {
          background:
            radial-gradient(circle at 82% 18%, rgba(66, 230, 150, 0.12), transparent 36%),
            radial-gradient(circle at 10% 90%, rgba(58, 127, 255, 0.09), transparent 35%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018));
        }

        .aegisCard:hover {
          border-color: rgba(66, 230, 150, 0.42);
          box-shadow:
            0 60px 150px rgba(0, 0, 0, 0.55),
            0 0 72px rgba(66, 230, 150, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.11);
        }

        .aegisBrowser {
          transform: rotateY(-4deg) rotateX(2deg);
          box-shadow:
            0 35px 90px rgba(0, 0, 0, 0.58),
            0 0 70px rgba(66, 230, 150, 0.08);
        }

        .aegisInterface {
          padding: 24px;
          background:
            radial-gradient(circle at 90% 0%, rgba(66, 230, 150, 0.12), transparent 34%),
            #0b0e12;
        }

        .aegisMetrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }

        .aegisMetrics div {
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .aegisMetrics span,
        .aegisMetrics strong {
          display: block;
        }

        .aegisMetrics span {
          color: #66707d;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .aegisMetrics strong {
          margin-top: 7px;
          color: #f4f8f6;
          font-size: 14px;
        }

        .aegisPipeline {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.018);
        }

        .aegisNode {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 11px 12px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.02);
        }

        .aegisNode > span {
          display: grid;
          width: 31px;
          height: 31px;
          flex: 0 0 auto;
          place-items: center;
          color: #7ef0b3;
          font-size: 8px;
          font-weight: 800;
          border: 1px solid rgba(66, 230, 150, 0.26);
          border-radius: 9px;
          background: rgba(66, 230, 150, 0.07);
        }

        .aegisNode strong {
          display: block;
          font-size: 10px;
        }

        .aegisNode p {
          margin: 3px 0 0;
          color: #69727d;
          font-size: 8px;
        }

        .activeAegisNode {
          border-color: rgba(66, 230, 150, 0.24);
          background: rgba(66, 230, 150, 0.045);
        }

        .resultAegisNode {
          border-color: rgba(89, 155, 255, 0.24);
          background: rgba(89, 155, 255, 0.05);
        }

        .aegisLine {
          width: 2px;
          height: 11px;
          margin-left: 28px;
          background: linear-gradient(#42e696, rgba(255, 255, 255, 0.08));
        }

        .aegisHealth {
          margin-top: 14px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.018);
        }

        .aegisHealth > div:first-child {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .aegisHealth span {
          color: #858e99;
          font-size: 9px;
        }

        .aegisHealth strong {
          color: #ffffff;
          font-size: 12px;
        }

        .aegisHealthTrack {
          overflow: hidden;
          height: 6px;
          margin: 10px 0;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.06);
        }

        .aegisHealthTrack span {
          display: block;
          width: 43%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4e8cff, #42e696);
        }

        .aegisHealth small {
          color: #636c78;
          font-size: 7px;
        }

        .floatingBadge {
          position: absolute;
          padding: 12px 14px;
          color: #8d8794;
          font-size: 9px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 13px;
          background: rgba(13, 13, 18, 0.94);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(12px);
        }

        .floatingBadge span {
          display: block;
          margin-bottom: 3px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
        }

        .badgeOne {
          top: 70px;
          right: -18px;
        }

        .badgeTwo {
          bottom: 55px;
          left: -20px;
        }

        .featuredBottom {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 24px;
          color: #77727f;
          font-size: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .featuredBottom i {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #4c4852;
        }

        .featuredBottom strong {
          margin-left: auto;
          color: #d8d4dd;
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        @media (max-width: 1100px) {
          .featuredHeader,
          .featuredCardContent {
            grid-template-columns: 1fr;
          }

          .featuredHeader {
            gap: 28px;
          }

          .featuredCardContent {
            gap: 55px;
          }

          .featuredVisual {
            max-width: 850px;
          }
        }

        @media (max-width: 700px) {
          .featuredWork {
            width: min(100% - 24px, 1380px);
            margin-top: 65px;
            padding-top: 70px;
          }

          .featuredHeader h2 {
            font-size: 48px;
          }

          .featuredCard {
            padding: 18px;
            border-radius: 24px;
          }

          .featuredCardContent {
            padding: 48px 0 42px;
          }

          .featuredInformation h3 {
            font-size: 47px;
          }

          .visualInterface {
            grid-template-columns: 1fr;
          }

          .visualHero {
            min-height: 240px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          }

          .visualChat {
            min-height: 330px;
          }

          .floatingBadge {
            display: none;
          }

          .featuredBottom {
            flex-wrap: wrap;
          }

          .featuredBottom strong {
            width: 100%;
            margin: 8px 0 0;
          }

          .qaStats {
            grid-template-columns: 1fr;
          }

          .aegisMetrics {
            grid-template-columns: 1fr;
          }

          .qaStats div {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          }
        }
      `}</style>
    </main>
  );
}