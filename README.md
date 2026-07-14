# AdarshOS

A premium interactive AI portfolio agent that lets recruiters and clients talk directly to an AI representation of Adarsh Shukla's professional experience.

## Why this project exists

Most portfolios are passive. AdarshOS turns a portfolio into an interactive technical interview. Visitors can:

- ask why Adarsh may fit a role
- explore his strongest projects
- challenge his technical decisions
- switch between recruiter and client modes
- access his CV, LinkedIn, GitHub, and contact details
- receive grounded answers from a controlled professional knowledge base

## Features

- Premium responsive portfolio interface
- Recruiter and client conversation modes
- OpenAI Responses API integration
- Local fallback answers when no API key is configured
- Curated portfolio knowledge base
- Suggested technical questions
- Project showcase cards
- CV and contact actions
- Mobile-responsive design
- Hallucination-control instructions

## Tech stack

- Next.js App Router
- React
- TypeScript
- OpenAI Responses API
- CSS without a UI framework
- Vercel-ready deployment

## Local setup

```bash
git clone <your-repository-url>
cd adarsh-os
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

The app works in local fallback mode without an API key. Add an OpenAI API key to enable full AI responses.

## Environment variables

```env
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_EMAIL=
NEXT_PUBLIC_CV_URL=/adarsh-shukla-cv.pdf
```

## Personalize it

1. Update `data/portfolio.ts` with verified experience and project information.
2. Replace the links in `.env.local`.
3. Put your CV inside the `public` directory.
4. Update project cards in `app/page.tsx`.
5. Replace the default metadata in `app/layout.tsx`.

## Deployment

Deploy directly to Vercel:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Add environment variables.
4. Deploy.

## Important production improvements

Before publicly promoting the project:

- add rate limiting to `/api/chat`
- add basic analytics
- add lead capture with explicit consent
- log errors without storing sensitive chat content
- verify every metric in the portfolio context
- add a custom domain
- add an Open Graph image

## LinkedIn project title

**AdarshOS — Interactive AI Portfolio Agent**

## LinkedIn project description

Built an interactive AI portfolio agent that allows recruiters and clients to explore my projects, technical skills, engineering decisions, and production experience through natural conversation. The platform includes recruiter and client modes, a controlled professional knowledge base, project discovery, local fallback responses, hallucination safeguards, CV access, and responsive premium UI.

The project was built using Next.js, TypeScript, React, and the OpenAI Responses API, with a focus on low-latency interaction, maintainable architecture, grounded answers, and a differentiated recruiter experience.
