import { prisma } from "../config/prisma.js";

type SeedSkill = {
  name: string;
  aliases?: string[];
  requiredLevel: number;
  importance: number;
  requirementType: "CORE" | "IMPORTANT" | "PREFERRED";
};

type SeedJobProfile = {
  slug: string;
  title: string;
  domain: string;
  description: string;
  responsibilities: string[];
  aliases: string[];
  skills: SeedSkill[];
};

const ROLE_SKILL_ALIASES: Record<string, string[]> = {
  "JavaScript": [
    "JavaScript Programming",
    "JavaScript Programming Language",
    "ECMAScript",
  ],
  "TypeScript": [
    "TypeScript Programming",
    "TypeScript Programming Language",
  ],
  "Node.js": ["Node.js Programming", "NodeJS", "Node JS"],
  "Express.js": ["Express", "ExpressJS"],
  "React": ["React.js", "ReactJS"],
  "REST API": ["REST APIs", "RESTful API", "RESTful APIs"],
  "GraphQL": ["GraphQL API"],
  "SQL": ["SQL Programming", "Relational SQL"],
  "PostgreSQL": ["Postgres", "PostgreSQL Database"],
  "MongoDB": ["Mongo DB", "Mongo Database"],
  "Redis": ["Redis Cache"],
  "Python": [
    "Python Programming",
    "Python Programming Language",
  ],
  "Java": ["Java Programming", "Java Programming Language"],
  "C++": ["CPP", "C Plus Plus"],
  "C#": ["C Sharp", "CSharp"],
  ".NET": [".NET Framework", "DotNet", "ASP.NET"],
  "Docker": ["Docker Containers", "Containerization"],
  "Kubernetes": ["K8s", "Kubernetes Orchestration"],
  "AWS": ["Amazon Web Services"],
  "Azure": ["Microsoft Azure"],
  "GCP": ["Google Cloud", "Google Cloud Platform"],
  "CI/CD": [
    "CI CD",
    "Continuous Integration",
    "Continuous Delivery",
    "Continuous Integration/Continuous Delivery",
  ],
  "Linux": ["Linux Administration", "Linux OS"],
  "Git": ["Git Version Control", "Version Control"],
  "Terraform": ["Infrastructure as Code", "IaC"],
  "Prometheus": ["Prometheus Monitoring"],
  "Grafana": ["Grafana Monitoring"],
  "OpenTelemetry": ["OpenTelemetry Observability", "OTel"],
  "Python Data Stack": ["NumPy", "Pandas"],
  "Pandas": ["Python Pandas"],
  "NumPy": ["Numpy"],
  "Spark": ["Apache Spark", "PySpark"],
  "Airflow": ["Apache Airflow"],
  "dbt": ["DBT", "Data Build Tool"],
  "Data Warehousing": [
    "Data Warehouse",
    "Data Warehouse Design",
  ],
  "ETL": [
    "ELT",
    "Extract Transform Load",
    "Extract Load Transform",
  ],
  "Data Quality": [
    "Data Quality Management",
    "Data Validation",
  ],
  "MLOps": [
    "ML Operations",
    "Machine Learning Operations",
  ],
  "Machine Learning": [
    "ML",
    "Machine Learning Engineering",
  ],
  "Deep Learning": [
    "Deep Neural Networks",
    "Neural Networks",
  ],
  "Computer Vision": ["CV", "Image Processing"],
  "NLP": ["Natural Language Processing"],
  "Generative AI": [
    "GenAI",
    "Generative Artificial Intelligence",
  ],
  "LLM": [
    "Large Language Models",
    "Large Language Model",
  ],
  "PyTorch": ["Pytorch"],
  "TensorFlow": ["Tensor Flow"],
  "Model Deployment": [
    "ML Model Deployment",
    "Model Serving",
  ],
  "Security": [
    "Application Security",
    "Cybersecurity",
  ],
  "OAuth": ["OAuth 2.0", "OAuth2"],
  "Embedded Systems": [
    "Embedded Software",
    "Embedded Development",
  ],
};

const normalizeName = (value: string): string => {
  const cleaned = value.trim().toLowerCase();

  // Keep programming-language names distinct before stripping punctuation.
  // In particular, "C++" must not normalize to the same key as "C".
  if (
    ["c++", "cpp", "c plus plus"].includes(cleaned)
  ) {
    return "cpp";
  }

  if (
    ["c#", "csharp", "c sharp"].includes(cleaned)
  ) {
    return "csharp";
  }

  if (
    [".net", "dotnet", "dot net"].includes(cleaned)
  ) {
    return "dotnet";
  }

  return cleaned
    .replace(/\.(?=net\b)/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "")
    .replace(/js$/g, "js");
};

const profiles: SeedJobProfile[] = [
  {
    slug: "graphql-developer",
    title: "GraphQL Developer",
    domain: "Software Development",
    description:
      "Build APIs and application services around GraphQL schemas, resolvers, data sources, and client integrations.",
    responsibilities: [
      "Design GraphQL schemas, types, queries, mutations, and subscriptions.",
      "Implement resolvers and connect GraphQL services to application data sources.",
      "Manage API validation, authorization, performance, and documentation.",
    ],
    aliases: [
      "GraphQL Engineer",
      "GraphQL API Developer",
    ],
    skills: [
      {
        name: "GraphQL",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "JavaScript",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "TypeScript",
        requiredLevel: 60,
        importance: 0.75,
        requirementType: "IMPORTANT",
      },
      {
        name: "REST API",
        requiredLevel: 50,
        importance: 0.45,
        requirementType: "PREFERRED",
      },
      {
        name: "Node.js",
        requiredLevel: 60,
        importance: 0.7,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 50,
        importance: 0.4,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    domain: "Software Development",
    description:
      "Create automated tests and quality workflows that validate software behavior across APIs, web applications, and services.",
    responsibilities: [
      "Design automated test suites for functional and regression coverage.",
      "Validate APIs, web applications, and service integrations.",
      "Integrate automated testing into CI/CD workflows and investigate failures.",
    ],
    aliases: [
      "Test Automation Engineer",
      "Automation QA Engineer",
    ],
    skills: [
      {
        name: "JavaScript",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "TypeScript",
        requiredLevel: 55,
        importance: 0.55,
        requirementType: "PREFERRED",
      },
      {
        name: "REST API",
        requiredLevel: 60,
        importance: 0.85,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 55,
        importance: 0.55,
        requirementType: "IMPORTANT",
      },
      {
        name: "CI/CD",
        requiredLevel: 55,
        importance: 0.7,
        requirementType: "IMPORTANT",
      },
      {
        name: "SQL",
        requiredLevel: 50,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "data-quality-analyst",
    title: "Data Quality Analyst",
    domain: "Data Science & Analytics",
    description:
      "Assess, monitor, and improve the accuracy, completeness, consistency, and reliability of organizational data.",
    responsibilities: [
      "Define and evaluate data quality checks and validation rules.",
      "Investigate anomalies, missing values, duplicates, and inconsistent records.",
      "Collaborate with data engineering and analytics teams to improve data reliability.",
    ],
    aliases: [
      "Data Quality Specialist",
      "Data Quality Engineer",
    ],
    skills: [
      {
        name: "Data Quality",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "SQL",
        requiredLevel: 65,
        importance: 0.9,
        requirementType: "CORE",
      },
      {
        name: "Python",
        requiredLevel: 55,
        importance: 0.65,
        requirementType: "IMPORTANT",
      },
      {
        name: "Pandas",
        requiredLevel: 50,
        importance: 0.55,
        requirementType: "IMPORTANT",
      },
      {
        name: "ETL",
        requiredLevel: 50,
        importance: 0.55,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Warehousing",
        requiredLevel: 45,
        importance: 0.4,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "data-warehouse-engineer",
    title: "Data Warehouse Engineer",
    domain: "Data Science & Analytics",
    description:
      "Design and maintain analytical data warehouses, dimensional models, transformation workflows, and reliable data pipelines.",
    responsibilities: [
      "Design analytical schemas, dimensional models, and warehouse structures.",
      "Build and maintain ETL or ELT data transformation workflows.",
      "Optimize warehouse queries, data quality, and downstream analytics reliability.",
    ],
    aliases: [
      "Data Warehouse Developer",
      "Warehouse Engineer",
    ],
    skills: [
      {
        name: "SQL",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Warehousing",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "ETL",
        requiredLevel: 65,
        importance: 0.85,
        requirementType: "CORE",
      },
      {
        name: "dbt",
        requiredLevel: 55,
        importance: 0.55,
        requirementType: "IMPORTANT",
      },
      {
        name: "Python",
        requiredLevel: 50,
        importance: 0.5,
        requirementType: "IMPORTANT",
      },
      {
        name: "Airflow",
        requiredLevel: 50,
        importance: 0.45,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "computer-vision-research-engineer",
    title: "Computer Vision Research Engineer",
    domain: "AI & Machine Learning",
    description:
      "Develop and evaluate computer vision models and experiments for image, video, and visual understanding tasks.",
    responsibilities: [
      "Develop experiments for image and video understanding problems.",
      "Train, evaluate, and analyze deep learning models for visual tasks.",
      "Translate research ideas into reproducible prototypes and engineering workflows.",
    ],
    aliases: [
      "Computer Vision Researcher",
      "Vision Research Engineer",
    ],
    skills: [
      {
        name: "Computer Vision",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Deep Learning",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Python",
        requiredLevel: 70,
        importance: 0.85,
        requirementType: "CORE",
      },
      {
        name: "PyTorch",
        requiredLevel: 65,
        importance: 0.75,
        requirementType: "IMPORTANT",
      },
      {
        name: "Machine Learning",
        requiredLevel: 70,
        importance: 0.85,
        requirementType: "CORE",
      },
      {
        name: "NumPy",
        requiredLevel: 55,
        importance: 0.45,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "mlops-engineer",
    title: "MLOps Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build reliable infrastructure and delivery workflows for training, deploying, monitoring, and maintaining machine learning systems.",
    responsibilities: [
      "Automate model training and deployment workflows.",
      "Operate model-serving infrastructure and reproducible ML environments.",
      "Monitor model and system behavior and improve ML platform reliability.",
    ],
    aliases: [
      "Machine Learning Operations Engineer",
      "ML Platform Engineer",
    ],
    skills: [
      {
        name: "MLOps",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Python",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 65,
        importance: 0.75,
        requirementType: "CORE",
      },
      {
        name: "Kubernetes",
        requiredLevel: 60,
        importance: 0.7,
        requirementType: "IMPORTANT",
      },
      {
        name: "CI/CD",
        requiredLevel: 60,
        importance: 0.7,
        requirementType: "IMPORTANT",
      },
      {
        name: "Machine Learning",
        requiredLevel: 60,
        importance: 0.65,
        requirementType: "IMPORTANT",
      },
      {
        name: "Model Deployment",
        requiredLevel: 65,
        importance: 0.75,
        requirementType: "CORE",
      },
    ],
  },
  {
    slug: "ml-research-engineer",
    title: "ML Research Engineer",
    domain: "AI & Machine Learning",
    description:
      "Prototype, implement, evaluate, and productionize machine learning research ideas through systematic experimentation.",
    responsibilities: [
      "Implement research papers and experimental model architectures.",
      "Design experiments, evaluate results, and analyze model behavior.",
      "Build reproducible research code and prototypes for further development.",
    ],
    aliases: [
      "Machine Learning Research Engineer",
      "Research ML Engineer",
    ],
    skills: [
      {
        name: "Machine Learning",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Deep Learning",
        requiredLevel: 75,
        importance: 0.9,
        requirementType: "CORE",
      },
      {
        name: "Python",
        requiredLevel: 75,
        importance: 0.9,
        requirementType: "CORE",
      },
      {
        name: "PyTorch",
        requiredLevel: 65,
        importance: 0.75,
        requirementType: "IMPORTANT",
      },
      {
        name: "NumPy",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "observability-engineer",
    title: "Observability Engineer",
    domain: "Cloud & DevOps",
    description:
      "Build telemetry, monitoring, logging, and tracing systems that make distributed applications measurable and diagnosable.",
    responsibilities: [
      "Design metrics, logs, traces, dashboards, and alerting strategies.",
      "Instrument applications and infrastructure using modern observability standards.",
      "Improve incident diagnosis through actionable telemetry and service health signals.",
    ],
    aliases: [
      "Observability Developer",
      "Telemetry Engineer",
      "Monitoring Engineer",
    ],
    skills: [
      {
        name: "OpenTelemetry",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Prometheus",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "CORE",
      },
      {
        name: "Grafana",
        requiredLevel: 60,
        importance: 0.7,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 55,
        importance: 0.6,
        requirementType: "IMPORTANT",
      },
      {
        name: "Kubernetes",
        requiredLevel: 55,
        importance: 0.6,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 55,
        importance: 0.65,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "solutions-architect",
    title: "Solutions Architect",
    domain: "Cloud & DevOps",
    description:
      "Design application and infrastructure solutions that connect business requirements with scalable technical architectures.",
    responsibilities: [
      "Translate product and business requirements into technical architectures.",
      "Evaluate service, integration, security, reliability, and deployment trade-offs.",
      "Produce architecture guidance and coordinate implementation across engineering teams.",
    ],
    aliases: [
      "Cloud Solutions Architect",
      "Software Solutions Architect",
    ],
    skills: [
      {
        name: "AWS",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Architecture Design",
        aliases: [
          "System Architecture",
          "Software Architecture",
        ],
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "REST API",
        requiredLevel: 60,
        importance: 0.6,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "IMPORTANT",
      },
      {
        name: "Kubernetes",
        requiredLevel: 50,
        importance: 0.45,
        requirementType: "PREFERRED",
      },
      {
        name: "Security",
        requiredLevel: 60,
        importance: 0.7,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 50,
        importance: 0.4,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "security-engineer",
    title: "Security Engineer",
    domain: "Cloud & DevOps",
    description:
      "Design and implement security controls across applications, infrastructure, identity, APIs, and development workflows.",
    responsibilities: [
      "Identify and mitigate application and infrastructure security risks.",
      "Implement authentication, authorization, secure configuration, and security monitoring controls.",
      "Collaborate with engineering teams to integrate security into development and deployment workflows.",
    ],
    aliases: [
      "Application Security Engineer",
      "Cloud Security Engineer",
    ],
    skills: [
      {
        name: "Security",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "OAuth",
        requiredLevel: 60,
        importance: 0.65,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 60,
        importance: 0.65,
        requirementType: "IMPORTANT",
      },
      {
        name: "REST API",
        requiredLevel: 55,
        importance: 0.55,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 50,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "AWS",
        requiredLevel: 55,
        importance: 0.6,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 50,
        importance: 0.4,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "embedded-software-engineer",
    title: "Embedded Software Engineer",
    domain: "Software Development",
    description:
      "Develop software for resource-constrained devices, controllers, and embedded systems with strong attention to reliability and hardware interaction.",
    responsibilities: [
      "Develop firmware and embedded software for device-level systems.",
      "Interface software with hardware peripherals and device communication protocols.",
      "Debug, test, optimize, and maintain reliable embedded applications.",
    ],
    aliases: [
      "Embedded Engineer",
      "Embedded Developer",
      "Firmware Engineer",
    ],
    skills: [
      {
        name: "Embedded Systems",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "C++",
        requiredLevel: 70,
        importance: 0.9,
        requirementType: "CORE",
      },
      {
        name: "C",
        requiredLevel: 70,
        importance: 0.9,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 50,
        importance: 0.45,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 50,
        importance: 0.4,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "data-platform-engineer",
    title: "Data Platform Engineer",
    domain: "Data Science & Analytics",
    description:
      "Build and operate platforms that move, process, store, govern, and serve data for analytics and machine learning workloads.",
    responsibilities: [
      "Build scalable data ingestion, processing, storage, and orchestration systems.",
      "Maintain reliable data pipelines and platform infrastructure.",
      "Provide reusable platform capabilities for analytics and machine learning teams.",
    ],
    aliases: [
      "Data Platform Developer",
      "Data Infrastructure Engineer",
    ],
    skills: [
      {
        name: "Python",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "CORE",
      },
      {
        name: "SQL",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "CORE",
      },
      {
        name: "ETL",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "CORE",
      },
      {
        name: "Spark",
        requiredLevel: 60,
        importance: 0.65,
        requirementType: "IMPORTANT",
      },
      {
        name: "Airflow",
        requiredLevel: 55,
        importance: 0.6,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 50,
        importance: 0.45,
        requirementType: "PREFERRED",
      },
      {
        name: "PostgreSQL",
        requiredLevel: 50,
        importance: 0.5,
        requirementType: "IMPORTANT",
      },
    ],
  },
];

/**
 * Database copies of the frontend curated role catalog.
 *
 * The frontend contains 40 curated Job Profiles. These database records
 * provide canonical JobProfile IDs/slugs so synced jobs can be classified
 * and Job Recommendations can filter against the selected career direction.
 */
const CURATED_COMPATIBILITY_PROFILES: SeedJobProfile[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    domain: "Software Development",
    description:
      "Build responsive, accessible interfaces and turn product ideas into polished web experiences.",
    responsibilities: [
      "Build production web interfaces",
      "Integrate APIs and reusable components",
      "Improve performance and accessibility",
    ],
    aliases: [
      "Web Developer",
      "React Developer",
    ],
    skills: [
      {
        name: "JavaScript",
        aliases: [
          "javascript programming",
          "js",
        ],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "React",
        aliases: [
          "react.js",
          "reactjs",
        ],
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "HTML",
        aliases: ["html5"],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "CSS",
        aliases: ["css3"],
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "TypeScript",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Next.js",
        aliases: ["nextjs"],
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    domain: "Software Development",
    description:
      "Design reliable APIs, application services and data flows that power modern products.",
    responsibilities: [
      "Build APIs and backend services",
      "Design data access patterns",
      "Improve reliability and observability",
    ],
    aliases: [
      "Node.js Developer",
      "API Developer",
    ],
    skills: [
      {
        name: "Node.js",
        aliases: ["nodejs", "node"],
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "REST APIs",
        aliases: ["rest api", "rest"],
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Databases",
        aliases: [
          "database",
          "sql",
        ],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "System Design",
        requiredLevel: 60,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    domain: "Software Development",
    description:
      "Develop end-to-end product features across interfaces, APIs, application logic and data.",
    responsibilities: [
      "Develop end-to-end features",
      "Connect frontend, backend and databases",
      "Ship complete product functionality",
    ],
    aliases: ["Full Stack Engineer"],
    skills: [
      {
        name: "JavaScript",
        aliases: [
          "javascript programming",
          "js",
        ],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "React",
        aliases: [
          "reactjs",
          "react.js",
        ],
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Node.js",
        aliases: ["nodejs"],
        requiredLevel: 68,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "REST APIs",
        aliases: ["rest api"],
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Databases",
        aliases: [
          "database",
          "sql",
        ],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    domain: "Software Development",
    description:
      "Solve engineering problems across implementation, architecture, testing and delivery.",
    responsibilities: [
      "Implement maintainable software",
      "Collaborate on technical design",
      "Debug, test and ship features",
    ],
    aliases: [
      "Software Developer",
      "Application Developer",
    ],
    skills: [
      {
        name: "Programming",
        aliases: ["programming"],
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Structures",
        aliases: [
          "data structures and algorithms",
          "dsa",
        ],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "System Design",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 60,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Cloud",
        requiredLevel: 48,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "web-developer",
    title: "Web Developer",
    domain: "Software Development",
    description:
      "Create and maintain websites and web applications across frontend and server technologies.",
    responsibilities: [
      "Build web experiences",
      "Maintain client and server code",
      "Integrate services and content",
    ],
    aliases: ["Web Application Developer"],
    skills: [
      {
        name: "HTML",
        aliases: ["html5"],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "CSS",
        aliases: ["css3"],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "JavaScript",
        aliases: [
          "javascript programming",
          "js",
        ],
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Responsive Design",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Accessibility",
        requiredLevel: 48,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    domain: "Software Development",
    description:
      "Build mobile applications with strong product experiences, APIs and reliable app behavior.",
    responsibilities: [
      "Build mobile application features",
      "Integrate APIs and local data",
      "Test and release app experiences",
    ],
    aliases: [
      "React Native Developer",
      "Mobile Developer",
    ],
    skills: [
      {
        name: "Mobile Development",
        aliases: ["mobile apps"],
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "JavaScript",
        aliases: ["javascript programming"],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "React Native",
        aliases: [
          "react-native",
          "react native",
        ],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "react-developer",
    title: "React Developer",
    domain: "Software Development",
    description:
      "Specialize in building component-driven interfaces and frontend application experiences with React.",
    responsibilities: [
      "Build reusable React components",
      "Manage application state and APIs",
      "Improve UI performance and accessibility",
    ],
    aliases: ["Frontend React Developer"],
    skills: [
      {
        name: "React",
        aliases: [
          "reactjs",
          "react.js",
        ],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "JavaScript",
        aliases: [
          "javascript programming",
          "js",
        ],
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "HTML",
        aliases: ["html5"],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "CSS",
        aliases: ["css3"],
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "TypeScript",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "nodejs-developer",
    title: "Node.js Developer",
    domain: "Software Development",
    description:
      "Build JavaScript and TypeScript backend services, APIs and integrations with Node.js.",
    responsibilities: [
      "Build Node.js services",
      "Design API integrations",
      "Work with databases and asynchronous workflows",
    ],
    aliases: ["Node Developer"],
    skills: [
      {
        name: "Node.js",
        aliases: [
          "nodejs",
          "node",
        ],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "JavaScript",
        aliases: [
          "javascript programming",
          "js",
        ],
        requiredLevel: 76,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "REST APIs",
        aliases: ["rest api"],
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Databases",
        aliases: [
          "database",
          "sql",
        ],
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "java-developer",
    title: "Java Developer",
    domain: "Software Development",
    description:
      "Develop backend and enterprise applications using Java, APIs, databases and testing practices.",
    responsibilities: [
      "Build Java services",
      "Work with APIs and databases",
      "Test and maintain production applications",
    ],
    aliases: ["Java Software Developer"],
    skills: [
      {
        name: "Java",
        aliases: ["java programming"],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Spring",
        aliases: [
          "spring boot",
          "springboot",
        ],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "REST APIs",
        aliases: ["rest api"],
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "SQL",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Docker",
        requiredLevel: 48,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "dotnet-developer",
    title: ".NET Developer",
    domain: "Software Development",
    description:
      "Build application and backend services with the .NET ecosystem and supporting cloud tools.",
    responsibilities: [
      "Build .NET applications",
      "Develop APIs and data access",
      "Maintain application quality and reliability",
    ],
    aliases: [
      "C# Developer",
      "ASP.NET Developer",
    ],
    skills: [
      {
        name: "C#",
        aliases: ["c sharp"],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: ".NET",
        aliases: ["dotnet"],
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "ASP.NET",
        aliases: [
          "asp net",
          "aspnet",
        ],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "SQL",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "REST APIs",
        aliases: ["rest api"],
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },

  {
    slug: "data-analyst",
    title: "Data Analyst",
    domain: "Data Science & Analytics",
    description:
      "Turn structured data into useful insights through analysis, reporting and visualization.",
    responsibilities: [
      "Query and clean datasets",
      "Build reports and dashboards",
      "Communicate useful findings",
    ],
    aliases: ["Business Data Analyst"],
    skills: [
      {
        name: "SQL",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Excel",
        aliases: ["microsoft excel"],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Python",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Visualization",
        aliases: [
          "data viz",
          "visualization",
        ],
        requiredLevel: 62,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Pandas",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "BI Tools",
        aliases: [
          "power bi",
          "tableau",
        ],
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    domain: "Data Science & Analytics",
    description:
      "Use statistics, programming and machine learning to answer data-driven questions.",
    responsibilities: [
      "Explore and clean data",
      "Build statistical or ML models",
      "Communicate findings and model results",
    ],
    aliases: ["Applied Data Scientist"],
    skills: [
      {
        name: "Python",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Pandas",
        requiredLevel: 70,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "NumPy",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Machine Learning",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "SQL",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Visualization",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    domain: "Data Science & Analytics",
    description:
      "Build reliable data pipelines, storage systems and transformations that support analytics and ML.",
    responsibilities: [
      "Build data pipelines",
      "Design data storage and transformation",
      "Improve data reliability and scalability",
    ],
    aliases: ["Analytics Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "SQL",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "ETL",
        aliases: [
          "data pipelines",
          "etl",
        ],
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Databases",
        aliases: ["database"],
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Warehousing",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Spark",
        aliases: ["apache spark"],
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Cloud",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "business-analyst",
    title: "Business Analyst",
    domain: "Data Science & Analytics",
    description:
      "Translate business questions into structured analysis, requirements and actionable insights.",
    responsibilities: [
      "Analyze business problems",
      "Define requirements and metrics",
      "Communicate decisions with data",
    ],
    aliases: ["Business Data Analyst"],
    skills: [
      {
        name: "SQL",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Excel",
        aliases: ["microsoft excel"],
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Analysis",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 50,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Visualization",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Requirements Analysis",
        requiredLevel: 68,
        importance: 1,
        requirementType: "CORE",
      },
    ],
  },
  {
    slug: "bi-analyst",
    title: "BI Analyst",
    domain: "Data Science & Analytics",
    description:
      "Create reporting and business intelligence products that help teams understand performance.",
    responsibilities: [
      "Build dashboards",
      "Model business metrics",
      "Translate data into decisions",
    ],
    aliases: ["Business Intelligence Analyst"],
    skills: [
      {
        name: "SQL",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Power BI",
        aliases: [
          "powerbi",
          "power bi",
        ],
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Visualization",
        requiredLevel: 68,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Excel",
        aliases: ["microsoft excel"],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Modeling",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Statistics",
        requiredLevel: 50,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "bi-developer",
    title: "BI Developer",
    domain: "Data Science & Analytics",
    description:
      "Design reporting systems, semantic models and dashboards for business intelligence teams.",
    responsibilities: [
      "Build BI data models",
      "Develop reports and dashboards",
      "Maintain data refresh workflows",
    ],
    aliases: ["Business Intelligence Developer"],
    skills: [
      {
        name: "SQL",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Power BI",
        aliases: [
          "powerbi",
          "power bi",
        ],
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Modeling",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "ETL",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Warehousing",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Python",
        requiredLevel: 45,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "product-analyst",
    title: "Product Analyst",
    domain: "Data Science & Analytics",
    description:
      "Analyze product behavior, funnels and metrics to support product decisions.",
    responsibilities: [
      "Analyze product usage",
      "Build product metrics and funnels",
      "Communicate insights to product teams",
    ],
    aliases: ["Product Data Analyst"],
    skills: [
      {
        name: "SQL",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Analysis",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Visualization",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Experimentation",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Python",
        requiredLevel: 48,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "analytics-engineer",
    title: "Analytics Engineer",
    domain: "Data Science & Analytics",
    description:
      "Transform raw data into trustworthy analytical models and reusable business metrics.",
    responsibilities: [
      "Build analytical models",
      "Develop transformation workflows",
      "Create reliable metric definitions",
    ],
    aliases: ["Analytics Developer"],
    skills: [
      {
        name: "SQL",
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Modeling",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "ETL",
        requiredLevel: 68,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Python",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Warehousing",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "quantitative-analyst",
    title: "Quantitative Analyst",
    domain: "Data Science & Analytics",
    description:
      "Apply mathematics, statistics and programming to financial or operational problems.",
    responsibilities: [
      "Build quantitative models",
      "Analyze time series and structured data",
      "Validate analytical assumptions",
    ],
    aliases: ["Quant Analyst"],
    skills: [
      {
        name: "Python",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Probability",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Linear Algebra",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "SQL",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Data Analysis",
        requiredLevel: 70,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "data-visualization-specialist",
    title: "Data Visualization Specialist",
    domain: "Data Science & Analytics",
    description:
      "Turn complex datasets into clear visual stories, dashboards and analytical experiences.",
    responsibilities: [
      "Design analytical visualizations",
      "Build interactive dashboards",
      "Improve clarity of data communication",
    ],
    aliases: ["Data Visualization Analyst"],
    skills: [
      {
        name: "Data Visualization",
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "SQL",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Statistics",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "BI Tools",
        aliases: [
          "power bi",
          "tableau",
        ],
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Python",
        requiredLevel: 50,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Data Analysis",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },

  {
    slug: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build, evaluate and productionize machine-learning systems from data to deployment.",
    responsibilities: [
      "Prepare data and train models",
      "Evaluate model quality",
      "Deploy and monitor ML systems",
    ],
    aliases: ["ML Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Machine Learning",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Pandas",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Scikit-learn",
        aliases: ["sklearn"],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "PyTorch",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "MLOps",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build AI-powered applications by combining machine learning, APIs and production software.",
    responsibilities: [
      "Integrate AI capabilities into products",
      "Build model-backed services",
      "Evaluate and improve AI features",
    ],
    aliases: ["Applied AI Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Machine Learning",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "LLM Integration",
        aliases: [
          "llms",
          "large language models",
        ],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Cloud",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Testing",
        requiredLevel: 48,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "deep-learning-engineer",
    title: "Deep Learning Engineer",
    domain: "AI & Machine Learning",
    description:
      "Develop neural-network systems for language, vision, recommendation and other AI tasks.",
    responsibilities: [
      "Train deep-learning models",
      "Prepare datasets and experiments",
      "Evaluate and optimize model performance",
    ],
    aliases: ["Deep Learning Developer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Deep Learning",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "PyTorch",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "TensorFlow",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Statistics",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linear Algebra",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "nlp-engineer",
    title: "NLP Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build systems that process and understand human language using NLP and machine learning.",
    responsibilities: [
      "Prepare language datasets",
      "Build NLP models and pipelines",
      "Evaluate language-system quality",
    ],
    aliases: ["Natural Language Processing Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "NLP",
        aliases: ["natural language processing"],
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Machine Learning",
        requiredLevel: 70,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Transformers",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "PyTorch",
        requiredLevel: 58,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Statistics",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build vision systems for image understanding, detection, segmentation and related tasks.",
    responsibilities: [
      "Prepare image datasets",
      "Train vision models",
      "Evaluate inference quality",
    ],
    aliases: ["Computer Vision Developer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Computer Vision",
        aliases: ["cv"],
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Deep Learning",
        requiredLevel: 74,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "OpenCV",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "PyTorch",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Statistics",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "generative-ai-engineer",
    title: "Generative AI Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build applications and workflows around large language models and generative AI systems.",
    responsibilities: [
      "Integrate foundation models",
      "Design prompting and evaluation workflows",
      "Build reliable AI application features",
    ],
    aliases: [
      "GenAI Engineer",
      "Generative AI Developer",
    ],
    skills: [
      {
        name: "Python",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "LLM Integration",
        aliases: [
          "llms",
          "large language models",
        ],
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Prompt Engineering",
        requiredLevel: 72,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Machine Learning",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Vector Databases",
        aliases: ["vector db"],
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Evaluation",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "applied-ai-engineer",
    title: "Applied AI Engineer",
    domain: "AI & Machine Learning",
    description:
      "Apply AI methods to real product problems with a strong focus on useful, deployable systems.",
    responsibilities: [
      "Translate AI capabilities into product features",
      "Evaluate models in application context",
      "Ship AI-backed experiences",
    ],
    aliases: ["Applied Machine Learning Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Machine Learning",
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "LLM Integration",
        aliases: ["llms"],
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Data Analysis",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Cloud",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "research-engineer",
    title: "Research Engineer",
    domain: "AI & Machine Learning",
    description:
      "Implement and experiment with technical methods that turn research ideas into working systems.",
    responsibilities: [
      "Implement research ideas",
      "Run experiments and evaluations",
      "Build reproducible research tooling",
    ],
    aliases: ["Research Software Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 85,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Machine Learning",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Statistics",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "PyTorch",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Research",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Linux",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "ml-platform-engineer",
    title: "ML Platform Engineer",
    domain: "AI & Machine Learning",
    description:
      "Build the infrastructure, tooling and workflows that support machine-learning development at scale.",
    responsibilities: [
      "Build ML tooling and infrastructure",
      "Automate training and deployment",
      "Improve reliability of ML workflows",
    ],
    aliases: ["MLOps Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "MLOps",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Kubernetes",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Cloud",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "CI/CD",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Machine Learning",
        requiredLevel: 58,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "ai-solutions-engineer",
    title: "AI Solutions Engineer",
    domain: "AI & Machine Learning",
    description:
      "Design practical AI solutions that connect business requirements, data and deployed AI capabilities.",
    responsibilities: [
      "Translate use cases into AI systems",
      "Integrate models and APIs",
      "Support reliable deployment and adoption",
    ],
    aliases: ["AI Solutions Developer"],
    skills: [
      {
        name: "AI",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "APIs",
        aliases: ["rest api"],
        requiredLevel: 68,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Python",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "LLM Integration",
        aliases: ["llms"],
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Cloud",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "System Design",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },

  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    domain: "Cloud & DevOps",
    description:
      "Automate delivery, infrastructure and operational workflows for reliable software systems.",
    responsibilities: [
      "Automate CI/CD workflows",
      "Manage infrastructure and environments",
      "Improve delivery reliability",
    ],
    aliases: ["DevOps Engineer"],
    skills: [
      {
        name: "Linux",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "CI/CD",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Cloud",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Kubernetes",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Infrastructure as Code",
        aliases: [
          "terraform",
          "iac",
        ],
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "cloud-engineer",
    title: "Cloud Engineer",
    domain: "Cloud & DevOps",
    description:
      "Design, deploy and operate cloud infrastructure and services for application teams.",
    responsibilities: [
      "Provision cloud infrastructure",
      "Automate environments",
      "Maintain cloud reliability and security",
    ],
    aliases: ["Cloud Developer"],
    skills: [
      {
        name: "Cloud",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Linux",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Networking",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Infrastructure as Code",
        aliases: [
          "terraform",
          "iac",
        ],
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "site-reliability-engineer",
    title: "Site Reliability Engineer",
    domain: "Cloud & DevOps",
    description:
      "Improve the reliability, performance and operational resilience of production systems.",
    responsibilities: [
      "Monitor and operate services",
      "Automate operational work",
      "Improve reliability and incident response",
    ],
    aliases: ["SRE"],
    skills: [
      {
        name: "Linux",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Cloud",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Monitoring",
        aliases: ["observability"],
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Kubernetes",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "CI/CD",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Networking",
        requiredLevel: 58,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "platform-engineer",
    title: "Platform Engineer",
    domain: "Cloud & DevOps",
    description:
      "Build internal platforms and developer tooling that make software delivery easier and safer.",
    responsibilities: [
      "Build developer platforms",
      "Automate deployment workflows",
      "Provide reusable infrastructure services",
    ],
    aliases: ["Internal Platform Engineer"],
    skills: [
      {
        name: "Cloud",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Kubernetes",
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "CI/CD",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Infrastructure as Code",
        aliases: [
          "terraform",
          "iac",
        ],
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 65,
        importance: 1,
        requirementType: "CORE",
      },
    ],
  },
  {
    slug: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    domain: "Cloud & DevOps",
    description:
      "Combine cloud infrastructure and delivery automation to support scalable application systems.",
    responsibilities: [
      "Design cloud environments",
      "Automate application delivery",
      "Operate production infrastructure",
    ],
    aliases: ["Cloud DevOps Developer"],
    skills: [
      {
        name: "Cloud",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "CI/CD",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Linux",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Kubernetes",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "infrastructure-engineer",
    title: "Infrastructure Engineer",
    domain: "Cloud & DevOps",
    description:
      "Build and maintain infrastructure systems, automation and operational foundations.",
    responsibilities: [
      "Manage infrastructure",
      "Automate system administration",
      "Maintain reliable environments",
    ],
    aliases: ["Infrastructure Developer"],
    skills: [
      {
        name: "Linux",
        requiredLevel: 80,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Networking",
        requiredLevel: 68,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Cloud",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Infrastructure as Code",
        aliases: [
          "terraform",
          "iac",
        ],
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Docker",
        requiredLevel: 52,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
      {
        name: "Monitoring",
        aliases: ["observability"],
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "kubernetes-engineer",
    title: "Kubernetes Engineer",
    domain: "Cloud & DevOps",
    description:
      "Operate container orchestration environments and production workloads on Kubernetes.",
    responsibilities: [
      "Deploy workloads to Kubernetes",
      "Manage clusters and configurations",
      "Improve container reliability and operations",
    ],
    aliases: ["K8s Engineer"],
    skills: [
      {
        name: "Kubernetes",
        requiredLevel: 85,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Linux",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Cloud",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Networking",
        requiredLevel: 62,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "CI/CD",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
    ],
  },
  {
    slug: "cloud-security-engineer",
    title: "Cloud Security Engineer",
    domain: "Cloud & DevOps",
    description:
      "Secure cloud infrastructure, identities, workloads and operational environments.",
    responsibilities: [
      "Secure cloud infrastructure",
      "Manage identity and access controls",
      "Improve security monitoring and posture",
    ],
    aliases: ["Cloud Security Developer"],
    skills: [
      {
        name: "Cloud",
        requiredLevel: 75,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Security",
        requiredLevel: 78,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Networking",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "IAM",
        aliases: ["identity access management"],
        requiredLevel: 70,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Monitoring",
        aliases: ["observability"],
        requiredLevel: 58,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "release-engineer",
    title: "Release Engineer",
    domain: "Cloud & DevOps",
    description:
      "Coordinate automated software delivery, release processes and deployment quality.",
    responsibilities: [
      "Build release pipelines",
      "Automate deployment workflows",
      "Improve release reliability",
    ],
    aliases: ["Release Developer"],
    skills: [
      {
        name: "CI/CD",
        requiredLevel: 82,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Git",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Docker",
        requiredLevel: 58,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Testing",
        requiredLevel: 60,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Cloud",
        requiredLevel: 55,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 62,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
  {
    slug: "automation-engineer",
    title: "Automation Engineer",
    domain: "Cloud & DevOps",
    description:
      "Automate repetitive engineering and operational workflows with reliable tooling.",
    responsibilities: [
      "Automate engineering workflows",
      "Build reusable scripts and tooling",
      "Improve operational efficiency",
    ],
    aliases: ["Infrastructure Automation Engineer"],
    skills: [
      {
        name: "Python",
        requiredLevel: 68,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Scripting",
        requiredLevel: 72,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "CI/CD",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Linux",
        requiredLevel: 65,
        importance: 0.8,
        requirementType: "IMPORTANT",
      },
      {
        name: "Git",
        requiredLevel: 62,
        importance: 1,
        requirementType: "CORE",
      },
      {
        name: "Testing",
        requiredLevel: 55,
        importance: 0.5,
        requirementType: "PREFERRED",
      },
    ],
  },
];

/**
 * Additional role-specific skills to make each profile useful for matching.
 * These are deliberately explicit rather than generated from a generic template.
 */
const ROLE_SKILL_EXPANSIONS: Record<string, string[]> = {
  "graphql-developer": [
    "GraphQL Schema Design",
    "Resolvers",
    "Apollo Server",
    "GraphQL Federation",
    "API Authorization",
    "API Versioning",
    "DataLoader",
    "Query Optimization",
    "API Documentation",
    "API Testing",
    "Caching Strategies",
    "Schema Validation",
  ],
  "qa-automation-engineer": [
    "Playwright",
    "Cypress",
    "Selenium",
    "Jest",
    "Vitest",
    "Test Planning",
    "Regression Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Mocking",
    "Test Reporting",
    "Bug Tracking",
  ],
  "data-quality-analyst": [
    "Data Profiling",
    "Data Cleansing",
    "Data Validation Rules",
    "Anomaly Detection",
    "Duplicate Detection",
    "Data Governance",
    "Data Lineage",
    "Great Expectations",
    "Data Reconciliation",
    "Data Auditing",
    "Data Contracts",
    "Root Cause Analysis",
  ],
  "data-warehouse-engineer": [
    "Dimensional Modeling",
    "Star Schema",
    "Snowflake Schema",
    "Slowly Changing Dimensions",
    "Warehouse Optimization",
    "dbt Testing",
    "Data Vault",
    "Incremental Models",
    "Partitioning",
    "Query Optimization",
    "Data Marts",
    "Semantic Layer",
  ],
  "computer-vision-research-engineer": [
    "Image Classification",
    "Object Detection",
    "Image Segmentation",
    "Vision Transformers",
    "OpenCV",
    "Image Augmentation",
    "Transfer Learning",
    "Model Evaluation",
    "CUDA",
    "Experiment Tracking",
    "Dataset Curation",
    "Research Reproducibility",
  ],
  "mlops-engineer": [
    "MLflow",
    "Kubeflow",
    "Model Registry",
    "Feature Store",
    "Model Monitoring",
    "Experiment Tracking",
    "Model Serving",
    "Workflow Orchestration",
    "Model Versioning",
    "Data Drift Detection",
    "Canary Deployments",
    "Reproducible Pipelines",
  ],
  "ml-research-engineer": [
    "Experimental Design",
    "Research Paper Implementation",
    "Model Evaluation",
    "Hyperparameter Tuning",
    "Jupyter",
    "Scikit-learn",
    "CUDA",
    "Distributed Training",
    "Experiment Tracking",
    "Statistical Significance",
    "Reproducibility",
    "Benchmarking",
  ],
  "observability-engineer": [
    "Distributed Tracing",
    "Structured Logging",
    "Alerting",
    "Service Level Objectives",
    "Incident Response",
    "Log Aggregation",
    "OpenMetrics",
    "Jaeger",
    "Elastic Stack",
    "Telemetry Instrumentation",
    "Capacity Planning",
    "Root Cause Analysis",
  ],
  "solutions-architect": [
    "System Design",
    "Architecture Decision Records",
    "Microservices",
    "Event-Driven Architecture",
    "High Availability",
    "Disaster Recovery",
    "Cost Optimization",
    "Threat Modeling",
    "Network Architecture",
    "Data Modeling",
    "Resilience Patterns",
    "Technical Documentation",
  ],
  "security-engineer": [
    "Threat Modeling",
    "OWASP Top 10",
    "Vulnerability Management",
    "Secure Coding",
    "Penetration Testing",
    "Identity and Access Management",
    "Secrets Management",
    "SAST",
    "DAST",
    "Security Auditing",
    "Incident Response",
    "Encryption",
  ],
  "embedded-software-engineer": [
    "Embedded C",
    "Microcontrollers",
    "RTOS",
    "Firmware Development",
    "UART",
    "SPI",
    "I2C",
    "CAN Bus",
    "Hardware Debugging",
    "Memory Optimization",
    "Device Drivers",
    "Unit Testing",
  ],
  "data-platform-engineer": [
    "Kafka",
    "Data Lakehouse",
    "Delta Lake",
    "Data Orchestration",
    "Data Catalog",
    "Schema Evolution",
    "Data Governance",
    "Streaming Data",
    "Data Observability",
    "Workflow Scheduling",
    "Data Access Control",
    "Pipeline Monitoring",
  ],
  "frontend-developer": [
    "Accessibility",
    "Responsive Design",
    "Web Performance",
    "Browser APIs",
    "CSS Architecture",
    "State Management",
    "Frontend Testing",
    "Webpack",
    "Vite",
    "Design Systems",
    "Web Security",
    "Internationalization",
  ],
  "backend-developer": [
    "Express.js",
    "Authentication",
    "Authorization",
    "Database Transactions",
    "Caching Strategies",
    "Message Queues",
    "API Design",
    "Rate Limiting",
    "Input Validation",
    "Background Jobs",
    "Observability",
    "Concurrency",
  ],
  "full-stack-developer": [
    "HTML",
    "CSS",
    "Authentication",
    "Authorization",
    "State Management",
    "Database Design",
    "API Design",
    "Responsive Design",
    "Integration Testing",
    "Deployment",
    "Web Security",
    "Performance Optimization",
  ],
  "software-engineer": [
    "Object-Oriented Design",
    "Design Patterns",
    "Clean Code",
    "Code Review",
    "Debugging",
    "Unit Testing",
    "Integration Testing",
    "Concurrency",
    "Algorithms",
    "Technical Documentation",
    "Refactoring",
    "Agile Development",
  ],
  "web-developer": [
    "HTML",
    "CSS",
    "Responsive Design",
    "Accessibility",
    "Browser APIs",
    "Web Performance",
    "SEO Fundamentals",
    "Web Security",
    "Content Management Systems",
    "Cross-Browser Testing",
    "Frontend Testing",
    "Deployment",
  ],
  "mobile-app-developer": [
    "React Native",
    "Mobile UI Design",
    "App Lifecycle",
    "Offline Storage",
    "Push Notifications",
    "Mobile Security",
    "App Performance",
    "Deep Linking",
    "Mobile Testing",
    "App Store Deployment",
    "Device APIs",
    "Crash Reporting",
  ],
  "react-developer": [
    "JSX",
    "React Hooks",
    "Context API",
    "State Management",
    "React Router",
    "Component Testing",
    "React Testing Library",
    "Frontend Performance",
    "Memoization",
    "Accessibility",
    "Vite",
    "API Integration",
  ],
  "nodejs-developer": [
    "Express.js",
    "Asynchronous Programming",
    "Event Loop",
    "Authentication",
    "Authorization",
    "API Validation",
    "Database Transactions",
    "Caching Strategies",
    "Message Queues",
    "Background Jobs",
    "Logging",
    "Performance Profiling",
  ],
  "java-developer": [
    "Spring Boot",
    "Hibernate",
    "JPA",
    "Maven",
    "Gradle",
    "JUnit",
    "Mockito",
    "JVM Performance",
    "Multithreading",
    "Dependency Injection",
    "Microservices",
    "Application Security",
  ],
  "dotnet-developer": [
    "ASP.NET Core",
    "Entity Framework Core",
    "LINQ",
    "C# Async/Await",
    "Dependency Injection",
    "NuGet",
    "xUnit",
    "Azure App Service",
    "Middleware",
    "Identity Framework",
    "Application Logging",
    "Performance Profiling",
  ],
  "data-analyst": [
    "Excel",
    "Power BI",
    "Tableau",
    "Exploratory Data Analysis",
    "Data Cleaning",
    "Hypothesis Testing",
    "SQL Joins",
    "Dashboard Design",
    "Business Metrics",
    "Data Storytelling",
    "A/B Testing",
    "Data Reporting",
  ],
  "data-scientist": [
    "Scikit-learn",
    "Feature Engineering",
    "Model Validation",
    "Regression Analysis",
    "Classification",
    "Clustering",
    "Hypothesis Testing",
    "Experiment Design",
    "Jupyter",
    "Model Interpretability",
    "Time Series Analysis",
    "Data Cleaning",
  ],
  "data-engineer": [
    "Apache Kafka",
    "Apache Spark",
    "Airflow",
    "dbt",
    "Data Lakes",
    "Batch Processing",
    "Stream Processing",
    "Data Modeling",
    "Pipeline Monitoring",
    "Schema Evolution",
    "Data Partitioning",
    "Data Governance",
  ],
  "business-analyst": [
    "Requirements Elicitation",
    "Stakeholder Management",
    "Process Modeling",
    "User Stories",
    "Acceptance Criteria",
    "Business Process Mapping",
    "KPI Definition",
    "Gap Analysis",
    "Use Case Modeling",
    "Workshop Facilitation",
    "UAT",
    "Documentation",
  ],
  "bi-analyst": [
    "DAX",
    "Power Query",
    "Dashboard Design",
    "KPI Definition",
    "Data Storytelling",
    "Data Cleaning",
    "Semantic Models",
    "Report Automation",
    "Business Metrics",
    "SQL Joins",
    "Data Governance",
    "Stakeholder Communication",
  ],
  "bi-developer": [
    "DAX",
    "Power Query",
    "Semantic Models",
    "SSAS",
    "Report Automation",
    "Data Refresh Scheduling",
    "Dimensional Modeling",
    "Dashboard Performance",
    "Data Integration",
    "Row-Level Security",
    "KPI Definition",
    "Version Control",
  ],
  "product-analyst": [
    "Product Analytics",
    "Funnel Analysis",
    "Cohort Analysis",
    "Retention Analysis",
    "A/B Testing",
    "Event Tracking",
    "Amplitude",
    "Mixpanel",
    "Experiment Design",
    "North Star Metrics",
    "User Segmentation",
    "Product Metrics",
  ],
  "analytics-engineer": [
    "dbt",
    "Data Modeling",
    "Dimensional Modeling",
    "Data Tests",
    "Semantic Layer",
    "Metric Definitions",
    "SQL Optimization",
    "Version Control",
    "Data Documentation",
    "Incremental Models",
    "Data Lineage",
    "CI for Data",
  ],
  "quantitative-analyst": [
    "Time Series Analysis",
    "Stochastic Processes",
    "Financial Mathematics",
    "Optimization",
    "Monte Carlo Simulation",
    "Econometrics",
    "Numerical Methods",
    "Risk Modeling",
    "Pandas",
    "NumPy",
    "Backtesting",
    "Scientific Computing",
  ],
  "data-visualization-specialist": [
    "Tableau",
    "Power BI",
    "D3.js",
    "Dashboard Design",
    "Data Storytelling",
    "Visual Encoding",
    "Chart Selection",
    "Color Theory for Data",
    "Interactive Visualization",
    "Accessibility",
    "Geospatial Visualization",
    "KPI Design",
  ],
  "machine-learning-engineer": [
    "Scikit-learn",
    "Feature Engineering",
    "Model Evaluation",
    "Model Serving",
    "MLflow",
    "Feature Stores",
    "Hyperparameter Tuning",
    "Data Pipelines",
    "Model Monitoring",
    "Model Versioning",
    "A/B Testing",
    "Statistical Learning",
  ],
  "ai-engineer": [
    "PyTorch",
    "Scikit-learn",
    "Model Serving",
    "Prompt Engineering",
    "Vector Databases",
    "Embedding Models",
    "RAG",
    "Evaluation Frameworks",
    "Feature Engineering",
    "Model Monitoring",
    "API Integration",
    "Experiment Tracking",
  ],
  "deep-learning-engineer": [
    "PyTorch",
    "TensorFlow",
    "Neural Network Design",
    "Backpropagation",
    "CNNs",
    "Transformers",
    "GPU Computing",
    "Distributed Training",
    "Model Quantization",
    "Mixed Precision Training",
    "Experiment Tracking",
    "Model Evaluation",
  ],
  "nlp-engineer": [
    "Transformers",
    "Hugging Face",
    "Tokenization",
    "Text Classification",
    "Named Entity Recognition",
    "Semantic Search",
    "Embeddings",
    "Text Preprocessing",
    "Evaluation Metrics",
    "Fine-Tuning",
    "Information Extraction",
    "Language Modeling",
  ],
  "computer-vision-engineer": [
    "OpenCV",
    "Object Detection",
    "Image Segmentation",
    "Image Classification",
    "Image Augmentation",
    "Transfer Learning",
    "ONNX",
    "Model Optimization",
    "Video Analytics",
    "Dataset Labeling",
    "Inference Optimization",
    "Model Evaluation",
  ],
  "generative-ai-engineer": [
    "LLM",
    "Prompt Engineering",
    "Retrieval-Augmented Generation",
    "Vector Databases",
    "Embedding Models",
    "LLM Evaluation",
    "Guardrails",
    "LangChain",
    "Model Serving",
    "Semantic Search",
    "Token Optimization",
    "Prompt Versioning",
  ],
  "applied-ai-engineer": [
    "Model Evaluation",
    "Prompt Engineering",
    "RAG",
    "Vector Databases",
    "API Integration",
    "AI Safety Evaluation",
    "Workflow Automation",
    "Embedding Models",
    "LLM Evaluation",
    "Data Preparation",
    "Inference Optimization",
    "Product Analytics",
  ],
  "research-engineer": [
    "Research Paper Implementation",
    "Experimental Design",
    "Jupyter",
    "PyTorch",
    "Scikit-learn",
    "Benchmarking",
    "Statistical Analysis",
    "Reproducibility",
    "Distributed Computing",
    "Model Evaluation",
    "Experiment Tracking",
    "Technical Writing",
  ],
  "ml-platform-engineer": [
    "Kubernetes",
    "MLflow",
    "Feature Stores",
    "Model Registry",
    "Workflow Orchestration",
    "GPU Scheduling",
    "Model Serving",
    "Pipeline Templates",
    "Model Monitoring",
    "Resource Optimization",
    "Multi-Tenancy",
    "Platform APIs",
  ],
  "ai-solutions-engineer": [
    "Solution Design",
    "LLM Integration",
    "Prompt Engineering",
    "RAG",
    "Vector Databases",
    "API Integration",
    "Customer Discovery",
    "Proof of Concept Development",
    "AI Evaluation",
    "Data Privacy",
    "Workflow Automation",
    "Technical Presentations",
  ],
  "devops-engineer": [
    "Terraform",
    "Ansible",
    "CI/CD",
    "Infrastructure as Code",
    "Docker",
    "Kubernetes",
    "Monitoring",
    "Log Aggregation",
    "Secrets Management",
    "Deployment Strategies",
    "Incident Response",
    "Configuration Management",
  ],
  "cloud-engineer": [
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Cloud Networking",
    "IAM",
    "Load Balancing",
    "Cloud Storage",
    "Autoscaling",
    "Cloud Monitoring",
    "Disaster Recovery",
    "Cost Management",
  ],
  "site-reliability-engineer": [
    "Service Level Objectives",
    "Error Budgets",
    "Incident Management",
    "Distributed Systems",
    "Capacity Planning",
    "Chaos Engineering",
    "Monitoring",
    "Alerting",
    "Runbook Automation",
    "Postmortem Analysis",
    "Load Testing",
    "Reliability Engineering",
  ],
  "platform-engineer": [
    "Kubernetes",
    "Terraform",
    "Internal Developer Platforms",
    "Developer Portals",
    "GitOps",
    "Service Catalogs",
    "CI/CD",
    "Observability",
    "Secrets Management",
    "Infrastructure Automation",
    "Platform APIs",
    "Golden Paths",
  ],
  "cloud-devops-engineer": [
    "Terraform",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Cloud Networking",
    "IAM",
    "Monitoring",
    "Infrastructure as Code",
    "Deployment Automation",
    "Secrets Management",
    "Incident Response",
    "Cost Optimization",
  ],
  "infrastructure-engineer": [
    "Linux Administration",
    "Networking",
    "Terraform",
    "Ansible",
    "Virtualization",
    "Storage Systems",
    "Backup and Recovery",
    "Configuration Management",
    "Monitoring",
    "Identity Management",
    "Capacity Planning",
    "Disaster Recovery",
  ],
  "kubernetes-engineer": [
    "Helm",
    "Kustomize",
    "Container Networking",
    "Cluster Autoscaling",
    "RBAC",
    "Ingress Controllers",
    "Service Mesh",
    "GitOps",
    "Pod Security",
    "Persistent Volumes",
    "Cluster Monitoring",
    "Troubleshooting",
  ],
  "cloud-security-engineer": [
    "IAM",
    "Cloud Security Posture Management",
    "Threat Detection",
    "Network Security",
    "Secrets Management",
    "Encryption",
    "Security Monitoring",
    "Compliance Automation",
    "Container Security",
    "Vulnerability Scanning",
    "Incident Response",
    "Zero Trust",
  ],
  "release-engineer": [
    "Release Automation",
    "Build Systems",
    "Artifact Management",
    "Semantic Versioning",
    "CI/CD",
    "Deployment Strategies",
    "Rollback Planning",
    "Release Governance",
    "Change Management",
    "Git Workflows",
    "Build Reproducibility",
    "Release Monitoring",
  ],
  "automation-engineer": [
    "Python Scripting",
    "Bash Scripting",
    "Workflow Automation",
    "Ansible",
    "CI/CD",
    "API Integration",
    "Task Scheduling",
    "Infrastructure Automation",
    "Test Automation",
    "Monitoring",
    "Error Handling",
    "Process Optimization",
  ],
};

const DOMAIN_SKILL_EXPANSIONS: Record<string, string[]> = {
  "Software Development": [
    "Git",
    "Testing",
    "API Design",
    "Debugging",
    "CI/CD",
  ],
  "Data Science & Analytics": [
    "Data Cleaning",
    "Data Modeling",
    "Statistics",
    "Data Visualization",
    "Data Governance",
  ],
  "AI & Machine Learning": [
    "Python",
    "Model Evaluation",
    "Experiment Tracking",
    "Feature Engineering",
    "Data Preparation",
  ],
  "Cloud & DevOps": [
    "Linux",
    "Networking",
    "Monitoring",
    "Infrastructure as Code",
    "Incident Response",
  ],
};

function buildExpandedSkills(profile: SeedJobProfile): SeedSkill[] {
  const names = [
    ...(ROLE_SKILL_EXPANSIONS[profile.slug] ?? []),
    ...(DOMAIN_SKILL_EXPANSIONS[profile.domain] ?? []),
  ];

  const expanded: SeedSkill[] = names.map((name, index) => ({
    name,
    requiredLevel: index < 3 ? 60 : 50,
    importance: index < 3 ? 0.7 : 0.45,
    requirementType: index < 3 ? "IMPORTANT" : "PREFERRED",
  }));

  // Merge by normalized name so the same skill is not repeated in a profile.
  const byName = new Map<string, SeedSkill>();
  for (const skill of [...profile.skills, ...expanded]) {
    const key = normalizeName(skill.name);
    const current = byName.get(key);
    if (!current || skill.requirementType === "CORE") {
      byName.set(key, skill);
    }
  }
  return [...byName.values()];
}

function getAliases(
  name: string,
  explicitAliases: string[] = [],
): string[] {
  return Array.from(
    new Set([
      ...(ROLE_SKILL_ALIASES[name] ?? []),
      ...explicitAliases,
    ]),
  );
}

async function findOrCreateSkill(
  skill: SeedSkill,
) {
  const aliases = getAliases(
    skill.name,
    skill.aliases,
  );

  const candidateNames = [
    skill.name,
    ...aliases,
  ];

  const normalizedCandidates =
    candidateNames.map(normalizeName);

  const existingSkill =
    await prisma.skill.findFirst({
      where: {
        OR: normalizedCandidates.map(
          (normalizedName) => ({
            normalizedName,
          }),
        ),
      },
    });

  if (existingSkill) {
    return existingSkill;
  }

  return prisma.skill.create({
    data: {
      name: skill.name,
      normalizedName: normalizeName(
        skill.name,
      ),
      category:
        skill.name === "Architecture Design"
          ? "ARCHITECTURE"
          : undefined,
      description:
        `Skill relevant to the ${skill.name} capability area.`,
    },
  });
}

async function seedJobProfile(
  profile: SeedJobProfile,
): Promise<void> {
  const jobProfile =
    await prisma.jobProfile.upsert({
      where: {
        slug: profile.slug,
      },

      update: {
        title: profile.title,
        domain: profile.domain,
        description: profile.description,
        responsibilities:
          profile.responsibilities,
        aliases: profile.aliases,
        source: "DATABASE",
        isActive: true,
      },

      create: {
        slug: profile.slug,
        title: profile.title,
        domain: profile.domain,
        description: profile.description,
        responsibilities:
          profile.responsibilities,
        aliases: profile.aliases,
        source: "DATABASE",
        isActive: true,
      },
    });

  await prisma.jobProfileSkill.deleteMany({
    where: {
      jobProfileId: jobProfile.id,
    },
  });

  const linkedSkillIds =
    new Set<string>();

  for (const skill of profile.skills) {
    const resolvedSkill =
      await findOrCreateSkill(skill);

    // Multiple role labels/aliases can resolve to
    // the same canonical Skill.
    if (
      linkedSkillIds.has(
        resolvedSkill.id,
      )
    ) {
      continue;
    }

    linkedSkillIds.add(
      resolvedSkill.id,
    );

    await prisma.jobProfileSkill.create({
      data: {
        jobProfileId:
          jobProfile.id,
        skillId:
          resolvedSkill.id,
        requirementType:
          skill.requirementType,
        requiredLevel:
          skill.requiredLevel,
        importance:
          skill.importance,
        aliases:
          getAliases(
            skill.name,
            skill.aliases,
          ),
      },
    });
  }

  console.log(
    `[Job Profiles] Seeded ${jobProfile.title} (${profile.skills.length} skills)`,
  );
}

export async function seedJobProfiles(): Promise<void> {
  console.log(
    "[Job Profiles] Starting seed...",
  );

  const sourceProfiles = [
    ...profiles,
    ...CURATED_COMPATIBILITY_PROFILES,
  ];

  const allProfiles = sourceProfiles.map((profile) => ({
    ...profile,
    skills: buildExpandedSkills(profile),
  }));

  for (const profile of allProfiles) {
    await seedJobProfile(profile);
  }

  const [profileCount, associationCount, uniqueSkillCount] = await Promise.all([
    prisma.jobProfile.count({ where: { isActive: true } }),
    prisma.jobProfileSkill.count(),
    prisma.skill.count(),
  ]);

  console.log(
    `[Job Profiles] Completed. Profiles: ${profileCount}; JobProfileSkill associations: ${associationCount}; canonical skills: ${uniqueSkillCount}.`,
  );
}
  