export interface CaseStudyCard {
  title: string;
  body: string;
}

export interface CaseStudySection {
  kicker: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: CaseStudyCard[];
  // Numbers the cards as steps (01, 02, ...)
  numbered?: boolean;
}

export interface LocalCaseStudy {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  badge?: string;
  year: string;
  stats: { label: string; value: string }[];
  sections: CaseStudySection[];
  stack: string[];
  links: { label: string; detail: string; href: string }[];
}

export const localCaseStudies: LocalCaseStudy[] = [
  {
    slug: "matata",
    name: "Matata",
    eyebrow: "Matata · Crisis Response",
    title: "Crisis damage reports from the community, on an analyst's screen in real time",
    excerpt:
      "A Progressive Web App that lets community members report damaged infrastructure after floods, earthquakes, wildfires or conflict, feeding a live analyst dashboard for UNDP Regional Responders.",
    image: "/case-studies/matata.jpg",
    imageAlt: "Matata home page: Report Crisis Damage in Your Community",
    year: "2026",
    stats: [
      { label: "Built for", value: "UNDP Regional Responders" },
      { label: "Type", value: "Progressive Web App" },
      { label: "Languages", value: "10, including Arabic" },
    ],
    sections: [
      {
        kicker: "The Challenge",
        heading: "The first hours after a crisis are the hardest to see clearly",
        paragraphs: [
          "When a flood, earthquake, wildfire or conflict hits, responders need to know which buildings, roads and utilities are damaged and where. The people who know first are the ones living there, and they are often on a weak or broken mobile connection.",
          "Matata was built so that anyone in an affected community can report damage immediately, with a location and a photo, and so that those reports reach analysts as usable data rather than scattered messages.",
        ],
      },
      {
        kicker: "What We Built",
        heading: "A reporting app for the community and a dashboard for responders",
        paragraphs: [
          "Matata is a mobile-first Progressive Web App. It opens in a browser, installs to the home screen and needs no app store. A report takes less than two minutes.",
        ],
        cards: [
          {
            title: "Locate the damage",
            body: "The reporter shares their GPS location or describes a nearby landmark.",
          },
          {
            title: "Describe the crisis",
            body: "They select the crisis type, the infrastructure affected and the level of damage: minimal, partial or destroyed.",
          },
          {
            title: "Submit the report",
            body: "A photo can be added. The report reaches field analysts as soon as it is sent.",
          },
        ],
        numbered: true,
      },
      {
        kicker: "For Reporters",
        heading: "Built for bad connections and stressful moments",
        bullets: [
          "Works offline: reports are queued on the device and sync automatically when the connection returns",
          "Report anonymously or sign in with an email code to keep a history of submissions",
          "Covers floods, earthquakes, wildfires, conflict and other crises",
          "Available in 10 languages, including right-to-left Arabic",
          "A clear reminder to contact local emergency services first when there is immediate danger",
        ],
      },
      {
        kicker: "For Analysts",
        heading: "A live picture of what is being reported",
        cards: [
          {
            title: "Live report stream",
            body: "New reports and updates appear on the dashboard as they arrive, without refreshing.",
          },
          {
            title: "Damage heatmap",
            body: "Geolocated reports are plotted on an interactive map so clusters of damage are visible at a glance.",
          },
          {
            title: "Duplicate review",
            body: "Reports of the same damage are detected and presented for an analyst to review and merge.",
          },
          {
            title: "AI-assisted assessment",
            body: "Each report carries an AI damage prediction, and analysts can review how accurate those predictions have been.",
          },
          {
            title: "Data export",
            body: "Report data can be exported for use in other response and planning tools.",
          },
          {
            title: "Role-based access",
            body: "Analyst, responder and admin roles control who can see and do what.",
          },
        ],
      },
      {
        kicker: "Status",
        heading: "Live and open source",
        paragraphs: [
          "Matata is live at matatacrisis.xyz and is built and maintained by Origin. The code is open source under the Apache 2.0 licence, so responders and partners can inspect it, adapt it and run it themselves.",
        ],
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Progressive Web App",
      "Leaflet maps",
      "Server-Sent Events",
    ],
    links: [
      { label: "Visit Matata", detail: "matatacrisis.xyz", href: "https://www.matatacrisis.xyz" },
      { label: "Source code", detail: "github.com/Kubu-Ventures/Matata", href: "https://github.com/Kubu-Ventures/Matata" },
    ],
  },
  {
    slug: "pipelinegpt",
    name: "PipelineGPT",
    eyebrow: "PipelineGPT · Pipeline Integrity",
    title: "Asking pipeline integrity data a question, and getting an answer you can trace",
    excerpt:
      "An AI interface that turns inspection reports, SCADA exports and PHMSA incident records into a queryable knowledge base, with a citation on every answer and an engineer in the loop.",
    image: "/case-studies/pipelinegpt.jpg",
    imageAlt: "PipelineGPT home page: Query your pipeline data in any language",
    badge: "2026 Finalist · Hermann Rosen Award",
    year: "2026",
    stats: [
      { label: "Recognition", value: "2026 Rosen Award Finalist" },
      { label: "Type", value: "Self-hosted AI platform" },
      { label: "Languages", value: "10" },
    ],
    sections: [
      {
        kicker: "The Challenge",
        heading: "The answers exist, but they are buried in documents",
        paragraphs: [
          "Pipeline operators hold years of in-line inspection reports, SCADA exports, incident records and compliance schedules. Finding one fact across them can mean hours of reading, and it usually falls to the few people who know where to look.",
          "General-purpose AI tools are a poor fit. In this field an unsourced or unreviewed recommendation is a safety risk, and operators are rightly cautious about sending integrity data to systems they do not control.",
        ],
      },
      {
        kicker: "What We Built",
        heading: "A natural language interface with safeguards built in",
        paragraphs: [
          "PipelineGPT lets operators and engineers ask questions about their own documents in plain language. The project is led at Origin by Collins Kubu.",
        ],
        cards: [
          {
            title: "Natural language queries",
            body: "Ask a question with no SQL and no special syntax. Answers are retrieved from the operator's own uploaded reports and records.",
          },
          {
            title: "Cited, traceable answers",
            body: "Every answer cites the exact source passage: the document, the section and, for PDFs, the page.",
          },
          {
            title: "Engineer review, always",
            body: "High-risk recommendations are routed to a qualified engineer, who approves, edits or rejects them before the operator sees them.",
          },
        ],
      },
      {
        kicker: "How It Works",
        heading: "From an uploaded document to a reviewed answer",
        cards: [
          {
            title: "Ingest",
            body: "Operators upload PDFs, CSV files and PHMSA records. Documents are processed and indexed on the operator's own servers.",
          },
          {
            title: "Retrieve",
            body: "A question is matched against the indexed passages, and the most relevant ones are selected and reranked.",
          },
          {
            title: "Answer",
            body: "Claude writes an answer grounded in those passages, with a citation for each claim, in the language the question was asked in.",
          },
          {
            title: "Review",
            body: "Answers that contain an operational directive, such as a repair, shut-in, pressure reduction or evacuation, or that fall below a confidence threshold, are held for engineer sign-off.",
          },
        ],
        numbered: true,
      },
      {
        kicker: "Trust and Security",
        heading: "Designed for operators who cannot take chances with their data",
        bullets: [
          "Self-hosted: document processing and search stay on the operator's infrastructure",
          "Answers are written by Claude through the provider the operator chooses: Anthropic, AWS Bedrock or Google Vertex AI",
          "Every sign-in, question, upload and engineer decision is logged and exportable for audits",
          "Invite-only access with operator, engineer and admin roles",
          "Mandatory two-factor authentication for engineers and admins, and lockout after repeated failed sign-ins",
          "Open source under AGPL-3.0, so a security team can review every line that touches their data",
        ],
      },
      {
        kicker: "Recognition",
        heading: "A 2026 finalist for the Hermann Rosen Award for Pipeline Innovation",
        paragraphs: [
          "PipelineGPT was named one of three finalists for the 2026 Hermann Rosen Award for Pipeline Innovation, presented by the ASME Foundation. It was entered by Collins Kubu as \"PipelineGPT: A Retrieval-Augmented Natural Language Interface for Pipeline Integrity Data\".",
        ],
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL + pgvector",
      "Celery + Redis",
      "Self-hosted deployment",
    ],
    links: [
      { label: "Visit PipelineGPT", detail: "pipelinegpt.xyz", href: "https://pipelinegpt.xyz/en" },
      { label: "Rosen Award finalists", detail: "asmefoundation.org", href: "https://www.asmefoundation.org/rosen-award/" },
      { label: "Source code", detail: "github.com/Kubu-Ventures", href: "https://github.com/Kubu-Ventures/pipe-line_gpt-backend" },
    ],
  },
];

export function getLocalCaseStudy(slug: string) {
  return localCaseStudies.find((s) => s.slug === slug);
}
