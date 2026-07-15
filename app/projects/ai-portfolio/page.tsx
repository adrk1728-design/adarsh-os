import Link from "next/link";
import styles from "./page.module.css";

const features = [
  {
    icon: "✦",
    title: "Conversational Portfolio",
    text: "Visitors can explore experience, skills, projects and professional background through natural conversation.",
  },
  {
    icon: "⚡",
    title: "Fast AI Responses",
    text: "The assistant is designed to return concise and relevant answers without forcing visitors through multiple pages.",
  },
  {
    icon: "◈",
    title: "Structured Knowledge",
    text: "Professional information is organized into a controlled knowledge layer for more reliable and consistent answers.",
  },
  {
    icon: "↗",
    title: "Recruiter Actions",
    text: "Direct access to resume, LinkedIn, GitHub, project pages and contact options from a single interface.",
  },
  {
    icon: "◎",
    title: "Responsive Experience",
    text: "The interface adapts across desktop, tablet and mobile devices while preserving usability and visual quality.",
  },
  {
    icon: "⌁",
    title: "Production Deployment",
    text: "Deployed publicly on Vercel with an automated GitHub-based deployment workflow.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "CSS Modules",
  "AI API",
  "Vercel",
  "GitHub",
  "Responsive UI",
];

const statistics = [
  { value: "100%", label: "Responsive interface" },
  { value: "24/7", label: "Publicly accessible" },
  { value: "₹0", label: "Hosting cost" },
  { value: "1", label: "Interactive AI experience" },
];

export default function AIPortfolioProjectPage() {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGrid} />

      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.backLink}>
            ← Back to portfolio
          </Link>

          <div className={styles.status}>
            <span className={styles.statusDot} />
            Live on Vercel
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.eyebrow}>Featured AI Project</div>

          <h1 className={styles.title}>AI Portfolio Assistant</h1>

          <p className={styles.description}>
            An intelligent and interactive portfolio experience that allows
            recruiters, clients and collaborators to understand my work through
            a live conversational AI interface.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Open Live Experience ↗
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}
            >
              Explore GitHub
            </a>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.browserBar}>
              <span className={styles.browserDot} />
              <span className={styles.browserDot} />
              <span className={styles.browserDot} />

              <div className={styles.browserAddress}>
                adarsh-ai-portfolio.vercel.app
              </div>
            </div>

            <div className={styles.preview}>
              <div className={styles.previewLeft}>
                <span className={styles.previewLabel}>
                  Interactive AI Portfolio
                </span>

                <h2 className={styles.previewHeading}>
                  Don’t browse my resume.
                  <br />
                  Ask my AI.
                </h2>

                <p className={styles.previewText}>
                  A faster and more engaging way to explore my experience,
                  technical capabilities and production AI projects.
                </p>
              </div>

              <div className={styles.previewRight}>
                <div className={styles.chatMessage}>
                  What kind of AI systems has Adarsh built?
                </div>

                <div className={styles.chatReply}>
                  Adarsh builds AI assistants, autonomous QA agents, RAG
                  systems, API integrations and production automation workflows.
                </div>

                <div className={styles.chatMessage}>
                  Show me his strongest project.
                </div>

                <div className={styles.chatReply}>
                  Start with his AI Portfolio Assistant and automated AI QA
                  architecture.
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section className={styles.stats}>
          {statistics.map((stat) => (
            <article key={stat.label} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Project Overview</span>

            <h2 className={styles.sectionTitle}>
              Turning a static portfolio into an AI product.
            </h2>

            <p className={styles.sectionText}>
              Traditional portfolios require visitors to manually search through
              multiple sections. This project replaces that experience with a
              conversational assistant that provides direct and contextual
              answers.
            </p>
          </div>

          <div className={styles.twoColumn}>
            <article className={styles.infoCard}>
              <span className={styles.cardNumber}>01 — The problem</span>

              <h3 className={styles.cardTitle}>
                Recruiters do not have time to read everything.
              </h3>

              <p className={styles.cardText}>
                Most portfolio visitors spend only a short time reviewing a
                candidate. Important technical experience can remain hidden
                inside long pages, resumes and project descriptions.
              </p>
            </article>

            <article className={styles.infoCard}>
              <span className={styles.cardNumber}>02 — The solution</span>

              <h3 className={styles.cardTitle}>
                Let visitors ask exactly what they need.
              </h3>

              <p className={styles.cardText}>
                The AI assistant acts as an interactive professional profile,
                giving focused answers about my skills, employment history,
                projects, tools and engineering capabilities.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Technology Stack</span>

            <h2 className={styles.sectionTitle}>
              Built with a lightweight production stack.
            </h2>
          </div>

          <div className={styles.techStack}>
            {techStack.map((technology) => (
              <span key={technology} className={styles.tech}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Core Capabilities</span>

            <h2 className={styles.sectionTitle}>
              More than a chatbot inside a website.
            </h2>

            <p className={styles.sectionText}>
              The project combines user experience, AI interaction, structured
              professional knowledge and production deployment.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>System Architecture</span>

            <h2 className={styles.sectionTitle}>
              A clean request-to-response flow.
            </h2>
          </div>

          <div className={styles.architecture}>
            <article className={styles.architectureItem}>
              <div className={styles.architectureTitle}>Visitor</div>
              <div className={styles.architectureText}>
                Asks a question through the portfolio
              </div>
            </article>

            <article className={styles.architectureItem}>
              <div className={styles.architectureTitle}>Chat Interface</div>
              <div className={styles.architectureText}>
                Captures and displays conversation
              </div>
            </article>

            <article className={styles.architectureItem}>
              <div className={styles.architectureTitle}>API Route</div>
              <div className={styles.architectureText}>
                Validates and processes the request
              </div>
            </article>

            <article className={styles.architectureItem}>
              <div className={styles.architectureTitle}>AI Model</div>
              <div className={styles.architectureText}>
                Generates a grounded response
              </div>
            </article>

            <article className={styles.architectureItem}>
              <div className={styles.architectureTitle}>Answer</div>
              <div className={styles.architectureText}>
                Returns structured information
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Engineering Outcome</span>

            <h2 className={styles.sectionTitle}>
              A real, public and verifiable AI project.
            </h2>
          </div>

          <div className={styles.resultGrid}>
            <article className={styles.resultMain}>
              <h3>What the project demonstrates</h3>

              <p>
                This portfolio is not only a visual design exercise. It
                demonstrates frontend development, AI integration, deployment,
                responsive design and product thinking.
              </p>

              <ul className={styles.resultList}>
                <li>
                  <span className={styles.check}>✓</span>
                  Built using a modern Next.js application structure
                </li>
                <li>
                  <span className={styles.check}>✓</span>
                  Connected to a real conversational AI system
                </li>
                <li>
                  <span className={styles.check}>✓</span>
                  Deployed through GitHub and Vercel
                </li>
                <li>
                  <span className={styles.check}>✓</span>
                  Optimized for desktop and mobile visitors
                </li>
              </ul>
            </article>

            <article className={styles.resultSide}>
              <h3>Next improvements</h3>

              <ul className={styles.resultList}>
                <li>
                  <span className={styles.check}>→</span>
                  Conversation memory
                </li>
                <li>
                  <span className={styles.check}>→</span>
                  Streaming responses
                </li>
                <li>
                  <span className={styles.check}>→</span>
                  Analytics and interaction tracking
                </li>
                <li>
                  <span className={styles.check}>→</span>
                  Additional project case studies
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Experience the project instead of only reading about it.
          </h2>

          <p className={styles.ctaText}>
            Ask the assistant about my AI engineering work, automation
            experience, technical stack or production projects.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              Talk to the AI Assistant ↗
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          Designed and developed by Adarsh Shukla.
        </footer>
      </div>
    </main>
  );
}