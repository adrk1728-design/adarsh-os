"use client";

import Link from "next/link";
import styles from "./page.module.css";

const stages = [
  {
    number: "01",
    title: "Scenario Generator",
    description:
      "Creates realistic and adversarial test scenarios across accuracy, hallucination, prompt injection, incomplete context, angry users and business-specific questions.",
  },
  {
    number: "02",
    title: "Live Test Runner",
    description:
      "Sends each scenario into the target assistant and captures the complete response, timing, execution status and supporting metadata.",
  },
  {
    number: "03",
    title: "AI Judge",
    description:
      "Evaluates each response against defined quality criteria, identifies failures and assigns a structured score, severity and explanation.",
  },
  {
    number: "04",
    title: "Reporting Layer",
    description:
      "Transforms raw evaluations into actionable QA reports showing recurring failures, risk areas, performance trends and recommended fixes.",
  },
];

const capabilities = [
  "Automated test generation",
  "Live conversation execution",
  "Response scoring",
  "Hallucination detection",
  "Prompt-injection testing",
  "Failure severity classification",
  "Actionable QA reporting",
  "Human review escalation",
];

const technologies = [
  "Agentic AI",
  "LLM Evaluation",
  "n8n",
  "Gemini",
  "APIs",
  "Prompt Engineering",
  "Structured Outputs",
  "Automated Reporting",
];

export default function AutonomousAIQAPage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.backgroundGlow} ${styles.glowOne}`} />
      <div className={`${styles.backgroundGlow} ${styles.glowTwo}`} />
      <div className={styles.noise} />

      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>A</span>

          <div>
            <strong>AdarshOS</strong>
            <span>AI Portfolio Agent</span>
          </div>
        </Link>

        <Link href="/" className={styles.backButton}>
          ← Back to portfolio
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.heroMeta}>
              <span className={styles.projectNumber}>02 / PROJECT</span>

              <span className={styles.liveStatus}>
                <i />
                BUILT SYSTEM
              </span>
            </div>

            <span className={styles.eyebrow}>
              AGENTIC AI · AUTOMATED EVALUATION
            </span>

            <h1>
              <span className={styles.titleLinePrimary}>Autonomous AI</span>
              <span className={styles.titleLineSecondary}>QA Agent.</span>
            </h1>

            <p className={styles.heroDescription}>
              A multi-stage AI testing system built to generate scenarios,
              execute live conversations, evaluate responses, detect failures
              and produce structured QA reports without relying on slow manual
              testing.
            </p>

            <div className={styles.heroActions}>
              <a href="#architecture" className={styles.primaryButton}>
                Explore architecture
                <span>↓</span>
              </a>

              <Link href="/" className={styles.secondaryButton}>
                Test AdarshOS
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.systemWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>

                <span>autonomous-qa-agent.workflow</span>

                <div className={styles.windowStatus}>RUNNING</div>
              </div>

              <div className={styles.workflow}>
                <div className={`${styles.workflowNode} ${styles.activeNode}`}>
                  <span className={styles.nodeIndex}>01</span>
                  <div>
                    <strong>Planner Agent</strong>
                    <p>Generate test scenarios</p>
                  </div>
                </div>

                <div className={styles.connector}>
                  <span />
                </div>

                <div className={styles.workflowNode}>
                  <span className={styles.nodeIndex}>02</span>
                  <div>
                    <strong>Test Runner</strong>
                    <p>Execute live conversations</p>
                  </div>
                </div>

                <div className={styles.connector}>
                  <span />
                </div>

                <div className={styles.workflowNode}>
                  <span className={styles.nodeIndex}>03</span>
                  <div>
                    <strong>Judge Agent</strong>
                    <p>Score and classify failures</p>
                  </div>
                </div>

                <div className={styles.connector}>
                  <span />
                </div>

                <div className={`${styles.workflowNode} ${styles.resultNode}`}>
                  <span className={styles.nodeIndex}>04</span>
                  <div>
                    <strong>QA Report</strong>
                    <p>Actionable engineering output</p>
                  </div>
                </div>
              </div>

              <div className={styles.systemStats}>
                <div>
                  <strong>100–1000</strong>
                  <span>tests per day</span>
                </div>

                <div>
                  <strong>8+</strong>
                  <span>evaluation criteria</span>
                </div>

                <div>
                  <strong>Live</strong>
                  <span>assistant testing</span>
                </div>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardOne}`}>
              <span>PASS RATE</span>
              <strong>94.6%</strong>
              <small>Latest evaluation batch</small>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTwo}`}>
              <span>ISSUE FOUND</span>
              <strong>Retrieval mismatch</strong>
              <small>Severity: Medium</small>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className={styles.sectionLabel}>
          <span>01</span>
          PROJECT OVERVIEW
        </div>

        <div className={styles.overviewGrid}>
          <h2>
            Manual chatbot testing does not scale.
            <span>This system does.</span>
          </h2>

          <div className={styles.overviewContent}>
            <p>
              A single tester can manually validate only a limited number of
              conversations each day. That makes comprehensive regression
              testing slow, inconsistent and difficult to repeat.
            </p>

            <p>
              This agentic QA system automates the complete evaluation loop. It
              creates diverse test scenarios, sends them to the target AI
              assistant, judges the resulting answers and converts failures
              into structured engineering feedback.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.impactSection}>
        <div className={styles.impactCard}>
          <span className={styles.impactLabel}>TESTING CAPACITY</span>
          <strong>100–1000</strong>
          <p>automated test executions per day</p>
        </div>

        <div className={styles.impactCard}>
          <span className={styles.impactLabel}>MANUAL BASELINE</span>
          <strong>50–70</strong>
          <p>questions per tester per day</p>
        </div>

        <div className={styles.impactCard}>
          <span className={styles.impactLabel}>OUTPUT</span>
          <strong>Structured</strong>
          <p>scores, severity, reasons and fixes</p>
        </div>
      </section>

      <section className={styles.architecture} id="architecture">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>SYSTEM ARCHITECTURE</span>

            <h2>
              Four specialised stages.
              <span>One automated evaluation loop.</span>
            </h2>
          </div>

          <p>
            Each stage performs one controlled responsibility, making the
            workflow easier to debug, improve and maintain.
          </p>
        </div>

        <div className={styles.stageGrid}>
          {stages.map((stage) => (
            <article className={styles.stageCard} key={stage.number}>
              <span className={styles.stageNumber}>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.evaluationSection}>
        <div className={styles.evaluationCopy}>
          <span className={styles.sectionEyebrow}>EVALUATION FRAMEWORK</span>

          <h2>
            The judge does more than label an answer
            <span>good or bad.</span>
          </h2>

          <p>
            Every response is inspected across business relevance, factual
            accuracy, hallucination safety, retrieval quality, clarity, CTA
            behaviour and resistance to malicious prompts.
          </p>
        </div>

        <div className={styles.evaluationPanel}>
          <div className={styles.panelHeader}>
            <span>QA EVALUATION RESULT</span>
            <span className={styles.scoreBadge}>82 / 100</span>
          </div>

          <div className={styles.evaluationRow}>
            <span>Accuracy</span>
            <strong className={styles.pass}>PASS</strong>
          </div>

          <div className={styles.evaluationRow}>
            <span>Business relevance</span>
            <strong className={styles.pass}>PASS</strong>
          </div>

          <div className={styles.evaluationRow}>
            <span>Retrieval quality</span>
            <strong className={styles.warning}>WARNING</strong>
          </div>

          <div className={styles.evaluationRow}>
            <span>Prompt-injection resistance</span>
            <strong className={styles.pass}>PASS</strong>
          </div>

          <div className={styles.evaluationIssue}>
            <span>IDENTIFIED ISSUE</span>
            <p>
              The answer was correct but used a weak case-study match. Improve
              retrieval filters and rank results by intent relevance.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className={styles.capabilitiesBlock}>
          <span className={styles.sectionEyebrow}>CORE CAPABILITIES</span>

          <h2>What the system handles.</h2>

          <div className={styles.capabilityList}>
            {capabilities.map((capability, index) => (
              <div key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{capability}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.technologiesBlock}>
          <span className={styles.sectionEyebrow}>TECHNOLOGY</span>

          <h2>Tools and concepts used.</h2>

          <div className={styles.technologyTags}>
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className={styles.engineeringNote}>
            <span>ENGINEERING PRINCIPLE</span>

            <p>
              AI outputs are never trusted blindly. Every stage uses structured
              data, validation rules, controlled prompts and explicit failure
              handling.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <span>PROJECT 02</span>

        <h2>
          AI systems need evaluation
          <strong>before they need scale.</strong>
        </h2>

        <p>
          This project demonstrates how Adarsh approaches AI reliability:
          automate repeatable work, separate responsibilities, validate every
          output and convert failures into measurable improvements.
        </p>

        <Link href="/" className={styles.closingButton}>
          Interview AdarshOS
          <span>↗</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <span>Autonomous AI QA Agent · Built by Adarsh Shukla</span>
        <Link href="/">Return to portfolio</Link>
      </footer>
    </main>
  );
}