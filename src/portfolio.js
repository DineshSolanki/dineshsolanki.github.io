/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

function getYearsExperienceLabel(careerStartDate) {
  const start = new Date(careerStartDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years--;
  }
  return `${Math.max(1, years)}+ years`;
}

const experienceYears = getYearsExperienceLabel("2021-11-01");

//SEO Related settings
const seo = {
  title: "Dinesh Solanki — Senior Backend Engineer (Java, Spring Boot)",
  description:
    `Remote-first Senior Backend Engineer with ${experienceYears} autonomously building and owning secure, scalable backend systems in Java, Spring Boot, and cloud-native microservices across US, EU, APAC, and India time zones. ` +
    "Specialized in API security and identity (Keycloak, OAuth2, JWT, ISTIO) across global banking, pharma traceability, digital signatures, and identity verification.",
  og: {
    title: "Dinesh Solanki — Senior Backend Engineer",
    type: "website",
    url: "https://dineshsolanki.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Dinesh Solanki",
  logo_name: "DineshSolanki",
  role: "Senior Backend Engineer",
  roleStack:
    "Java · Spring Boot · Remote-First Backend Systems · AI-Assisted Engineering",
  currentPosition:
    "Senior Technical Consultant @ EY · Remote-First · Exploring Senior IC Backend Roles",
  email: "solankid297@gmail.com",
  subTitle:
    `${experienceYears} autonomously owning and shipping secure, scalable backend systems across global banking, pharma traceability, digital signatures, remote notarization, and workflow automation. ` +
    "Remote-first engineer trusted across US, EU, APAC, and India time zones — combining async written communication, disciplined time management, and strict SLA ownership from design docs through UAT and release.",
  resumeLink:
    "https://drive.google.com/file/d/1el3n3F8yZCTgQvOYHpM9WOoZl2Q5UMV5/view?usp=sharing",
  portfolio_repository: "https://github.com/DineshSolanki/DineshSolanki",
  githubProfile: "https://github.com/DineshSolanki",
};

// Headline metrics shown on the home page, most quantified first
const impactStats = [
  {
    value: "2–3 hrs → ~10 min",
    label: "Serialization workflow optimized for 10k+ serials",
  },
  {
    value: "25 → 100",
    label: "OWASP security score raised; PCI compliance achieved",
  },
  {
    value: "Remote · 4 Zones",
    label: "Async delivery & 100% sprint stability across US, EU, India & APAC",
  },
];

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/DineshSolanki",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/DineshSolanki/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:solankid297@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Medium",
    link: "https://dineshsolanki.medium.com/",
    fontAwesomeIcon: "fa-medium",
    backgroundColor: "#12100E",
  },
  {
    name: "Blog",
    link: "https://aprogrammers.wordpress.com/",
    fontAwesomeIcon: "fa-wordpress",
    backgroundColor: "#21759B",
  },
];

const skills = {
  data: [
    {
      title: "Backend & Microservices",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Self-directed, end-to-end backend ownership — driving modules from written design docs and async RFCs through UAT stabilization and release",
        "⚡ Building cloud-native microservices with Java and Spring Boot for enterprise supply-chain, healthcare and document platforms",
        "⚡ Designing RESTful APIs and resolving large-payload and throughput bottlenecks, including MongoDB document limits",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            backgroundColor: "transparent",
            color: "#6CB33E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "logos:angular",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Security & IAM",
      fileName: "SecurityImg",
      skills: [
        "⚡ Raised an application's security posture against OWASP standards from a score of 25 to 100 — a first for the product — and achieved PCI compliance",
        "⚡ Implementing authentication and authorization with Keycloak, OAuth2 and JWT, including multi-realm (multi-tenant) token validation",
        "⚡ Securing service-to-service traffic and access-control flows with ISTIO",
      ],
      softwareSkills: [
        {
          skillName: "Keycloak",
          imageSrc: "keycloak-logo.svg",
        },
        {
          skillName: "Spring Security",
          fontAwesomeClassname: "simple-icons:springsecurity",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: {
            color: "#FB015B",
          },
        },
        {
          skillName: "Istio",
          fontAwesomeClassname: "simple-icons:istio",
          style: {
            color: "#466BB0",
          },
        },
        {
          skillName: "OWASP",
          fontAwesomeClassname: "simple-icons:owasp",
          style: {
            color: "#0B7285",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working across multiple cloud platforms",
        "⚡ Hosting and maintaining microservices on virtual machine instances along with database integration",
        "⚡ Deploying microservices to Kubernetes clusters and containerising services with Docker",
        "⚡ Building middleware for a storage microservice backed by GCP and Azure cloud storage",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        /*{
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },*/
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        /*        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },*/
        /*{
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },*/
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "C# & Desktop",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building performant desktop applications in C#, including FoliCon — an open-source icon utility with a real user base",
        "⚡ Developing WPF applications on an MVVM architecture with Prism",
        "⚡ Experience with the DevExpress, Telerik and Syncfusion component suites",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#953DAC",
          },
        },
        {
          skillName: "WPF",
          imageSrc: "WPF-logo.png",
        },
        {
          skillName: "Prism",
          imageSrc: "prism-library-logo.png",
        },
        {
          skillName: "DevExpress",
          fontAwesomeClassname: "simple-icons:devexpress",
          style: {
            backgroundColor: "white",
            color: "#FF7200",
          },
        },
      ],
    },
    {
      // Flat keyword block: scannable grouped chips for recruiters and ATS matching.
      title: "Technical Skills",
      skills: [],
      skillGroups: [
        {
          category: "Languages & Frameworks",
          items: [
            "Java",
            "Spring Boot",
            "Angular",
            "Maven",
            "Gradle",
            "Spring Shell",
            "JSLT",
            "XSLT",
          ],
        },
        {
          category: "Security & IAM",
          items: [
            "Spring Security",
            "Keycloak",
            "OAuth2",
            "JWT",
            "ISTIO",
            "OWASP",
            "PCI Compliance",
            "Veracode",
            "Blackduck",
            "Coverity",
          ],
        },
        {
          category: "Cloud & DevOps",
          items: [
            "Azure",
            "AWS",
            "GCP",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "Git",
            "Azure DevOps",
            "Tuleap",
            "CI/CD",
          ],
        },
        {
          category: "Standards & Data",
          items: [
            "GS1",
            "EPCIS",
            "DSCSA",
            "REST APIs",
            "OpenAPI",
            "SQL",
            "MongoDB",
            "MongoDB Aggregation",
          ],
        },
        {
          category: "AI-Assisted & Agentic Tooling",
          items: [
            "GitHub Copilot",
            "AutoGen (Multi-Agent)",
            "Power Automate",
            "AI-Assisted Development",
            "Agentic Workflows",
            "Microsoft 365 Copilot",
          ],
        },
        {
          category: "Remote-First & Async Execution",
          items: [
            "Autonomous Delivery",
            "Async Written Communication",
            "Time-Zone Overlap (US / EU / APAC)",
            "Self-Managed Time & SLAs",
            "Design Docs & Async Handoffs",
            "100% Sprint Predictability",
          ],
        },
        {
          category: "Engineering Practices & Languages",
          items: [
            "Microservices",
            "Secure Coding",
            "Code Review",
            "English (Full Professional · EF SET C2)",
            "Hindi (Native)",
            "Spanish (Elementary)",
          ],
        },
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /* {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

const degrees = {
  degrees: [
    {
      title: "MBM Engineering College (Now MBM University)",
      subtitle:
        "Master of Computer Applications (MCA) · Computer Programming & Specific Applications",
      logo_path: "mbmu-logo.png",
      alt_name: "MBM University",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ Studied core software engineering subjects including Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and AI.",
        "⚡ GPA: 8.7",
        "⚡ Coding club mentor; contributed to online tests development and college events.",
      ],
      website_link: "https://www.mbm.ac.in",
    },
    {
      title: "Lachoo Memorial College of Science & Technology",
      subtitle:
        "Bachelor of Computer Applications (BCA) · Computer Science, Technology & Programming",
      logo_path: "lmcst-logo.png",
      alt_name: "Lachoo Memorial College of Science & Technology",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ GPA: 7.1",
        "⚡ TPO cell volunteer and active contributor in college technical activities.",
      ],
      website_link: "https://www.lachoomemorial.org",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Mastering Multi-Agent Development with AutoGen",
      subtitle: "Packt · Coursera",
      issued: "Nov 2026",
      credentialId: "UE6JCVXP1905",
      logo_path: "packt-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/UE6JCVXP1905",
      alt_name: "Packt",
      color_code: "#FFFFFF",
    },
    {
      title: "AI Agent Skills for Leaders",
      subtitle: "Vanderbilt University · Coursera",
      issued: "Nov 2026",
      credentialId: "2XZTYWSDU4AP",
      logo_path: "vanderbilt-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/2XZTYWSDU4AP",
      alt_name: "Vanderbilt University",
      color_code: "#FFFFFF",
    },
    {
      title: "Build and Evaluate Robust Financial Models",
      subtitle: "Coursera",
      issued: "Nov 2026",
      credentialId: "K0MR7YU41JIA",
      logo_path: "coursera-wordmark.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/K0MR7YU41JIA",
      alt_name: "Coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Risk Management and Financial Theory",
      subtitle: "Duke University · Coursera",
      issued: "Nov 2026",
      credentialId: "SNVHK31DD7LH",
      logo_path: "duke-logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/SNVHK31DD7LH",
      alt_name: "Duke University",
      color_code: "#FFFFFF",
    },
    {
      title: "AI Agents: From Prompts to Multi-Agent Systems",
      subtitle: "University of California, Davis · Coursera",
      issued: "May 2026",
      credentialId: "K612F2NLGJUP",
      logo_path: "ucdavis-logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/K612F2NLGJUP",
      alt_name: "UC Davis",
      color_code: "#022851",
    },
    {
      title: "Agentic AI and AI Agents: A Primer for Leaders",
      subtitle: "Vanderbilt University · Coursera",
      issued: "May 2026",
      credentialId: "8VYNJZGZJ41P",
      logo_path: "vanderbilt-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8VYNJZGZJ41P",
      alt_name: "Vanderbilt University",
      color_code: "#FFFFFF",
    },
    {
      title: "Service And Client Orientation",
      subtitle: "Harvard Business Impact Enterprise",
      issued: "May 2026",
      logo_path: "hbi-logo.png",
      certificate_link: "",
      alt_name: "Harvard Business Impact Enterprise",
      color_code: "#02766A",
    },
    {
      title: "Financial Risk Management (FRM): Foundational FRM Principles",
      subtitle: "Udemy",
      issued: "May 2026",
      logo_path: "udemy-logo.svg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#FFFFFF",
    },
    {
      title: "AI Usage and Data-Driven Thinking",
      subtitle: "Harvard Business Impact Enterprise",
      issued: "Apr 2026",
      logo_path: "hbi-logo.png",
      certificate_link: "",
      alt_name: "Harvard Business Impact Enterprise",
      color_code: "#02766A",
    },
    {
      title: "Microsoft 365 Copilot: Personal Productivity for All",
      subtitle: "Vanderbilt University · Coursera",
      issued: "Apr 2026",
      credentialId: "QOB71G22C8VH",
      logo_path: "vanderbilt-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QOB71G22C8VH",
      alt_name: "Vanderbilt University",
      color_code: "#FFFFFF",
    },
    {
      title: "MongoDB Aggregation Fundamentals",
      subtitle: "MongoDB",
      logo_path: "mongodb-logo.svg",
      certificate_link:
        "https://www.credly.com/badges/9c01f3a3-0ee5-4953-a02f-758cd83ca957",
      alt_name: "MongoDB",
      color_code: "#FFFFFF",
    },
    {
      title: "Foundational C#",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#FFFFFF",
    },
    {
      title: "EF SET English Certificate - 77/100",
      subtitle: "C2 Proficient",
      logo_path: "efset_logo.svg",
      certificate_link: "",
      alt_name: "EF SET",
      color_code: "#FFFFFF",
    },
  ],
};

const awards = {
  title: "Awards & Recognition",
  data: [
    {
      title: "Quarterly Award",
      subtitle: "Ness Digital Engineering · 2025",
      logo_path: "ness-logo.png",
      alt_name: "Ness Digital Engineering",
      certificate_link:
        "https://drive.google.com/file/d/1hCJr71efiom_YKtLCpMfuATU0ptz_orY/view?usp=sharing",
    },
    {
      title: "Spot Award",
      subtitle: "Ness Digital Engineering · 2025",
      logo_path: "award.png",
      alt_name: "Spot Award",
      certificate_link:
        "https://drive.google.com/file/d/1Ol6UZS21bp0rJaglY4UqWb6Z2rpJiltL/view?usp=sharing",
    },
    {
      title: "Extra Mile Award",
      subtitle: "Exela Technologies",
      logo_path: "exela-logo.png",
      alt_name: "Exela Technologies",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    `${experienceYears} building and owning backend systems in Java and Spring Boot across global banking, pharma serialization, digital signatures, identity verification, and workflow automation. ` +
    "I thrive in remote-first, distributed environments — operating autonomously with crisp async written communication, disciplined time management, and end-to-end SLA ownership.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: `EY (${getTimePeriod("2026-03-01", Date.now())})`,
      work: true,
      experiences: [
        {
          title: "Senior Technical Consultant",
          company: "EY",
          company_url: "https://www.ey.com/",
          logo_path: "ey-logo.png",
          duration: "Mar 2026 - Present",
          location: "New Delhi, India",
          description: [
            "Partnering with a global banking client on core Java backend microservices and secure coding initiatives.",
            "Working autonomously across backend service design, identity and access controls (Keycloak, OAuth2), AI-assisted development, and DevOps practices.",
          ],
          color: "#2E2E38",
        },
      ],
    },
    {
      title: `Ness Digital Engineering (${getTimePeriod(
        "2024-10-17",
        "2026-02-28"
      )})`,
      work: true,
      experiences: [
        {
          title: "Senior Java Engineer",
          company: "Ness Digital Engineering",
          company_url: "https://www.ness.com/",
          logo_path: "ness-logo.png",
          duration: "Oct 2024 - Feb 2026",
          location: "Pune, India (Distributed · US / EU / APAC Teams)",
          description: [
            "Owned core delivery and serialization backend services for enterprise supply-chain and healthcare systems (Systech TraceIQ™ · GS1 / EPCIS) using Java and Spring Boot.",
            "Optimized high-volume serialization workflows (10k+ serials), cutting processing time from 2\u20133 hours to ~10 minutes.",
            "Diagnosed and resolved large-payload and performance issues, including MongoDB document size limits.",
            "Built microservices with JSON-heavy APIs and Keycloak-based IAM integrations; implemented access-control flows with ISTIO and OAuth2.",
            "Integrated SAST/DAST tooling (Blackduck, Coverity) and developed utilities to handle long-running tasks.",
            "Self-managed UAT stabilization and release readiness asynchronously — resolved C1/C2 incidents under strict SLAs and maintained 100% Jira sprint predictability.",
            "Collaborated smoothly across Philippines, US, EU, and India time zones via concise written handoffs, status updates, and cross-team defect triage.",
            "Mentored interns, reviewed pull requests, influenced architecture decisions and delivered client demos — recognized with quarterly and spot awards (Innovation Catalyst).",
          ],
          color: "#00195F",
        },
      ],
    },
    {
      title: `Exela Technologies (${getTimePeriod(
        "2021-11-01",
        "2024-08-31"
      )})`,
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Exela Technologies",
          company_url: "https://www.exelatech.com/",
          logo_path: "exela-logo.png",
          duration: "Jan 2022 - Aug 2024",
          location: "Pune, Maharashtra, India (100% Remote · 2.5+ yrs)",
          description: [
            "5+ years 100% remote Java full-stack (backend-heavy) ownership across Remote Notarization, DrySign, DMR and in-house products.",
            "Raised the application's security score from 25 to 100 against OWASP standards \u2014 a first for the product \u2014 and achieved PCI compliance.",
            "Remotely led up to 6 developers through a critical API security overhaul and version 2 restructuring via structured task breakdown, async coordination, and PR reviews.",
            "Integrated Keycloak for IAM and implemented Stripe payments.",
            "Developed new features that took DrySign and ERN to a milestone release, and restructured the existing product for a version 2.",
            "Replaced legacy services and eliminated team bottlenecks by authoring documentation and automating recurring operational workflows.",
            "Promoted clean, maintainable code through thorough async code reviews and remote mentoring of onboarding engineers.",
          ],
          color: "#000000",
        },
        {
          title: "Software Engineer Trainee",
          company: "Exela Technologies",
          company_url: "https://www.exelatech.com/",
          logo_path: "exela-logo.png",
          duration: "Nov 2021 - Jan 2022",
          location: "Pune, Maharashtra, India",
          description: [
            "Joined the Java backend team as a trainee, ramping up on Spring Boot and the product stack before converting to a full-time engineer.",
          ],
          color: "#000000",
        },
      ],
    },
    /*{
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },*/
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Enterprise backend platforms delivered in production alongside open-source libraries, developer tools, and upstream contributions across Java, Spring Boot, and C#.",
  avatar_image_path: "projects_image.svg",
};

const corporateProjectsHeader = {
  title: "Corporate Projects",
  description:
    "Production SaaS platforms and enterprise backend systems architected, secured, and scaled across pharma serialization, e-signatures, remote notarization, and digital mailroom automation.",
};

const corporateProjects = {
  data: [
    {
      id: "ey-cloud-microservices",
      title: "Global Banking Microservices & Secure Engineering",
      company: "EY",
      company_url: "https://www.ey.com/",
      logo_path: "ey-logo.png",
      role: "Senior Technical Consultant",
      duration: "Mar 2026 - Present",
      domain: "Global Banking · Cloud & Secure Coding",
      impact: "Global Bank · Java & Secure Coding",
      scopeLabel: "Enterprise",
      accentColor: "#2E2E38",
      summary:
        "Partnering with a global banking client to build and harden Java and Spring Boot microservices with secure coding practices, centralized IAM, and CI/CD delivery.",
      highlights: [
        "Engineering core Java microservices and remediation workflows tailored to global banking security and compliance baselines.",
        "Implementing centralized authentication and authorization using Keycloak and OAuth2 alongside AI-assisted development tooling.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Secure Coding",
        "Keycloak",
        "OAuth2",
        "Microservices",
        "DevOps",
      ],
    },
    {
      id: "ness-systech-traceiq",
      title: "Systech TraceIQ™ — Pharmaceutical Track & Trace",
      company: "Ness Digital Engineering",
      company_url: "https://www.ness.com/",
      logo_path: "ness-logo.png",
      product_name: "Systech TraceIQ™",
      product_url:
        "https://www.systechone.com/products/pharmaceutical-track-trace/",
      product_link_label: "Systech TraceIQ ↗",
      product_logo_path: "systech-logo.png",
      product_logo_alt: "Systech connected solutions by Markem-Imaje",
      role: "Senior Java Engineer",
      duration: "Oct 2024 - Feb 2026",
      domain: "Pharma Track & Trace · DSCSA & EU FMD",
      impact: "2–3 hrs → ~10 min (10k+ serials)",
      scopeLabel: "Production SaaS",
      accentColor: "#2A64B0",
      summary:
        "Intelligent pharmaceutical traceability platform centralizing GS1/EPCIS serialization data, exception management, and trading-partner onboarding across DSCSA and EU FMD compliance workflows.",
      highlights: [
        "Owned core Java and Spring Boot microservices handling compliance-critical serialization and EPCIS workflows across US, EU, India, and Philippines teams.",
        "Optimized high-volume serialization pipelines (10k+ serials), cutting runtime from 2–3 hours to ~10 minutes and resolving MongoDB document size bottlenecks.",
        "Implemented Keycloak IAM, OAuth2, and ISTIO service-mesh access controls with Blackduck and Coverity SAST/DAST security scanning.",
      ],
      architectureNotes: [
        "Partitioned oversized EPCIS serialization payloads to eliminate MongoDB document-size ceiling failures under 10k+ serial batches.",
        "Paired multi-realm Keycloak OAuth2/JWT validation with ISTIO mesh policies and automated Blackduck/Coverity SAST/DAST gates.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "GS1 / EPCIS",
        "DSCSA / EU FMD",
        "Keycloak",
        "ISTIO",
      ],
    },
    {
      id: "exela-drysign-platform",
      title: "DrySign® — Enterprise E-Signature Platform",
      company: "Exela Technologies",
      company_url: "https://www.exelatech.com/",
      logo_path: "exela-logo.png",
      product_name: "DrySign by Exela",
      product_url: "https://www.linkedin.com/showcase/drysign-by-exela/home/",
      product_link_label: "DrySign Showcase ↗",
      product_logo_path: "drysign-logo.png",
      product_logo_alt: "DrySign by Exela",
      role: "Software Engineer",
      duration: "Jan 2022 - Aug 2024",
      domain: "ESIGN & UETA · E-Signature & Payments",
      impact: "OWASP 25 → 100 · PCI Compliant",
      scopeLabel: "Production SaaS",
      accentColor: "#38B6FF",
      summary:
        "Cloud-based digital signature platform compliant with ESIGN Act and UETA, supporting individual, group, and hierarchical signing, MFA, tamper-proof timestamped audit trails, and cloud drive integrations.",
      highlights: [
        "Raised DrySign's security posture against OWASP standards from 25 to 100 — a first for the product — and achieved PCI compliance.",
        "Led up to 6 developers through critical API security refactoring and version 2 platform restructuring.",
        "Integrated Keycloak IAM and Stripe subscription billing while delivering core features for milestone releases.",
      ],
      architectureNotes: [
        "Rebuilt auth and API security boundaries around Spring Security + multi-realm Keycloak JWT validation while meeting PCI cardholder standards.",
        "Separated legacy monolithic flows during v2 restructuring to isolate Stripe billing, document workflows, and third-party drive integrations.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Keycloak",
        "Stripe",
        "Angular",
        "OWASP / PCI",
      ],
    },
    {
      id: "exela-ern-notarization",
      title: "Exela RN (ERN) — Remote Online Notarization",
      company: "Exela Technologies",
      company_url: "https://www.exelatech.com/",
      logo_path: "exela-logo.png",
      product_name: "Exela RN (ERN)",
      product_url:
        "https://www.globenewswire.com/news-release/2021/12/07/2347384/0/en/exela-technologies-launches-remote-online-notarization-exela-rn.html",
      product_link_label: "Launch Announcement ↗",
      role: "Software Engineer",
      duration: "Nov 2021 - Aug 2024",
      domain: "Remote Online Notarization (RON)",
      impact: "Milestone Release · DrySign & DMR Sync",
      scopeLabel: "Production SaaS",
      accentColor: "#1D3557",
      summary:
        "Remote Online Notarization web portal connecting signatories with credentialed notaries for scheduled, recorded sessions, electronic notary journals, and session vaults integrated with DrySign and Digital Mailroom.",
      highlights: [
        "Delivered core Java and Spring Boot backend capabilities taking Exela RN from early product stages to a major milestone release.",
        "Supported notarized workflow integrations bridging ERN with DrySign e-signatures and Digital Mailroom onboarding (USPS Form 1583).",
        "Built REST APIs, scheduling and payment backend flows, and automated recurring operational processes.",
      ],
      architectureNotes: [
        "Coordinated signatory, notary calendar, electronic journal, and audit vault lifecycles across DrySign and DMR onboarding flows.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Keycloak",
        "SQL",
        "OAuth2",
      ],
    },
    {
      id: "exela-dmr-mailroom",
      title: "Digital Mailroom (DMR) — Cloud Mail & IDP Automation",
      company: "Exela Technologies",
      company_url: "https://www.exelatech.com/",
      logo_path: "exela-logo.png",
      product_name: "Digital Mailroom (DMR)",
      product_url: "https://getdigitalmailroom.com/",
      product_link_label: "Product Website ↗",
      product_logo_path: "dmr-logo.svg",
      product_logo_bg: "#0B2239",
      product_logo_alt: "Digital Mailroom (DMR)",
      role: "Software Engineer",
      duration: "Nov 2021 - Aug 2024",
      domain: "IDP / OCR Automation · HIPAA & SOC 2",
      impact: "Legacy Modernization & Automation",
      scopeLabel: "Production SaaS",
      accentColor: "#0B5FFF",
      summary:
        "Cloud SaaS digital mailroom combining physical mail digitization across processing centers with AI-powered OCR/ICR document processing, rule-based workflow routing, SFTP/API integrations, and virtual business addresses.",
      highlights: [
        "Engineered Java and Spring Boot replacements for legacy mailroom backend services to improve reliability and maintainability.",
        "Automated recurring document-processing and backend operational workflows across DMR and companion Exela services.",
        "Promoted maintainable codebases through structured peer code reviews and mentoring incoming team members.",
      ],
      architectureNotes: [
        "Incrementally strangled legacy modules into Spring Boot services backed by SQL/MongoDB for document routing and process automation.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL",
        "MongoDB",
        "Microservices",
      ],
    },
  ],
};

const openSourceProjectsHeader = {
  title: "Open Source Projects",
  description:
    "Authored developer tools, libraries, and desktop applications — plus merged contributions to upstream open-source ecosystems.",
  contributionsTitle: "Upstream Open Source Contributions",
  contributionsDescription:
    "Merged pull requests and enhancements contributed to widely used community and enterprise open-source repositories.",
};

const openSourceProjects = {
  // Metadata tags mapped by repo name for pinned repos from src/shared/opensource/projects.json
  repoCategories: {
    FoliCon: "Desktop App",
    NullNotion: "IntelliJ Plugin",
    Samay: "Spring Boot Library",
    "BatchMuxer-Subtitle": "CLI Utility",
    AudioFixer: "Desktop Utility",
  },
  // Additional authored open-source repos beyond the 5 pinned items in projects.json
  additionalRepos: [
    {
      id: "oss-sonarqube-status-plus",
      name: "sonarqube-status-plus",
      category: "VS Code Extension",
      createdAt: "2025-02-15T00:00:00Z",
      url: "https://github.com/DineshSolanki/sonarqube-status-plus",
      description:
        "VS Code extension displaying SonarQube analysis status, quality gates, and code metrics directly inside the editor.",
      isFork: false,
      languages: [
        { name: "TypeScript", iconifyClass: "logos-typescript-icon" },
      ],
    },
    {
      id: "oss-multi-tenant-mongo",
      name: "multi-tenant-mongo-spring-boot-starter",
      category: "Spring Boot Starter",
      createdAt: "2024-12-28T00:00:00Z",
      url:
        "https://github.com/DineshSolanki/multi-tenant-mongo-spring-boot-starter",
      description:
        "Spring Boot starter library enabling clean multi-tenant MongoDB resolution and configuration out of the box.",
      isFork: false,
      languages: [
        { name: "Java", iconifyClass: "logos-java" },
        { name: "Spring Boot", iconifyClass: "simple-icons:springboot" },
        { name: "MongoDB", iconifyClass: "simple-icons:mongodb" },
      ],
    },
    {
      id: "oss-deviantart-net",
      name: "DeviantArt.Net",
      category: ".NET SDK",
      createdAt: "2024-09-05T00:00:00Z",
      url: "https://github.com/DineshSolanki/DeviantArt.Net",
      description:
        ".NET client library for the DeviantArt REST API covering Deviations, Collections, Gallery, Comments, Messages, and User endpoints.",
      isFork: false,
      languages: [{ name: "C#", iconifyClass: "logos-c-sharp" }],
    },
    {
      id: "oss-parameter-store-manager",
      name: "parameter-store-manager",
      category: "Node.js Utility",
      createdAt: "2025-02-01T00:00:00Z",
      url: "https://github.com/DineshSolanki/parameter-store-manager",
      description:
        "Node.js utility for managing configuration parameters with automated GitHub Actions release workflows.",
      isFork: false,
      languages: [{ name: "JavaScript", iconifyClass: "logos-javascript" }],
    },
  ],
  upstreamContributions: [
    {
      id: "upstream-keycloak",
      repo: "keycloak/keycloak",
      url: "https://github.com/keycloak/keycloak/pull/28690",
      badge: "Merged PR #28690",
      language: "Java",
      iconifyClass: "logos-java",
      description:
        "Refactored UI element identifiers from IDs to classes (#24462) in the upstream Keycloak identity and access management platform.",
    },
    {
      id: "upstream-schibsted-jslt",
      repo: "schibsted/jslt",
      url: "https://github.com/schibsted/jslt/pull/375",
      badge: "Merged PR #375",
      language: "Java",
      iconifyClass: "logos-java",
      description:
        "Enhanced identifier parsing in Schibsted's JSLT JSON query and transformation engine to support Unicode characters (#373).",
    },
    {
      id: "upstream-jslt-intellij",
      repo: "fuchsst/jslt-intellij-plugin",
      url: "https://github.com/fuchsst/jslt-intellij-plugin/pull/17",
      badge: "2 Merged PRs",
      language: "Java",
      iconifyClass: "logos-java",
      description:
        "Added JSLT plugin validations, code completion, and Gradle/IntelliJ compatibility updates for modern IDE releases.",
    },
    {
      id: "upstream-jellyfin-tmdblib",
      repo: "jellyfin/TMDbLib",
      url: "https://github.com/jellyfin/TMDbLib/pull/507",
      badge: "3 Merged PRs",
      language: "C#",
      iconifyClass: "logos-c-sharp",
      description:
        "Added Collection media type support in SearchMultiAsync, TV show video language filtering, and SearchCollection properties.",
    },
    {
      id: "upstream-sharpcompress",
      repo: "adamhathcock/sharpcompress",
      url: "https://github.com/adamhathcock/sharpcompress/pull/859",
      badge: "Merged PR #859",
      language: "C#",
      iconifyClass: "logos-c-sharp",
      description:
        "Sanitized invalid filename characters during archive extraction (#858) to improve cross-platform reliability.",
    },
    {
      id: "upstream-fastforward",
      repo: "FastForwardTeam/FastForward",
      url:
        "https://github.com/FastForwardTeam/FastForward/pulls?q=is%3Apr+author%3ADineshSolanki",
      badge: "6 Merged PRs",
      language: "JavaScript",
      iconifyClass: "logos-javascript",
      description:
        "Contributed URL bypass rules and maintenance improvements across six merged pull requests.",
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "github-shields",
      name:
        "Shields/Badges and your repositories, Beginners’ guide to GitHub Shields.",
      createdAt: "2020-10-18T00:00:00Z",
      tags: ["Open Source", "GitHub", "Documentation"],
      description:
        "Badges, also known as shields, are a great way to quickly showcase information about your repository. They can be found on the top of my project FoliCon’s Readme. In this post, we’ll learn how to use them to make your Readme’s look more professional.",
      url:
        "https://dineshsolanki.medium.com/shields-badges-and-your-repositories-beginners-guide-to-github-shields-84f9c4452f7e?source=portfolio",
    },
    {
      id: "java-graal-vm",
      name:
        "Create Self-Contained Executables: Java Programs to native executables with GraalVM",
      createdAt: "2024-05-24T00:00:00Z",
      tags: ["Java", "GraalVM", "Maven"],
      description:
        "Are you tired of hearing native is better? Say hello to GraalVM! This powerhouse tool converts your Java program into a self-contained executable, ensuring a seamless experience for all. With simple steps like setting environment variables and using Maven, you'll be up and running in no time.",
      url:
        "https://aprogrammers.wordpress.com/2024/05/24/how-to-create-self-contained-executables-convert-java-programs-with-graalvm/",
    },
    {
      id: "Single-Entity-with-mongo-JPA",
      name: "Using Single Entity with JPA and Mongo DB in spring-boot",
      createdAt: "2024-01-25T00:00:00Z",
      tags: ["Spring Boot", "MongoDB", "JPA"],
      description:
        "When dealing with data split across SQL and NoSQL, it's tricky to handle a single entity. While not ideal, use a combination of JPA and starter-data-mongo, carefully managing dependencies and creating different profiles. With careful entity and repository design, it's possible to make them work. Remember to separate repositories and handle case-sensitive fields. This approach offers an effective way to handle the situation.",
      url:
        "https://aprogrammers.wordpress.com/2024/01/25/using-single-entity-with-jpa-and-mongo-db-in-spring-boot/",
    },
    {
      id: "keycloak-multi-tenancy",
      name:
        "How to validate keycloak token when you have multiple realms(Multi-tenancy)",
      createdAt: "2023-09-17T00:00:00Z",
      tags: ["Keycloak", "IAM / JWT", "Multi-Tenancy"],
      description:
        "Validating JWT tokens provided by Keycloak in a Spring Boot application with multiple realms can be challenging. This blog post will provide a step-by-step guide on how to implement a custom JWT decoder that can handle multiple realms.",
      url:
        "https://aprogrammers.wordpress.com/2023/09/17/how-to-validate-keycloak-token-when-you-have-multiple-realmsmulti-tenancy/",
    },
    {
      id: "java-logs-retrieval",
      name: "Programmatically Retrieving Log Files in Java Spring Boot",
      createdAt: "2023-11-20T00:00:00Z",
      tags: ["Java", "Spring Boot", "Observability"],
      description:
        "In any Java application, having access to log files is crucial for debugging issues, monitoring app performance, and understanding usage patterns. In this post, we'll explore different techniques for programmatically retrieving log files in Java for administrative purposes or log analysis. Getting the Log File Location First, we need to determine where the log files",
      url:
        "https://aprogrammers.wordpress.com/2023/11/20/programmatically-retrieving-log-files-in-java/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile-image.png",
    description:
      "Open to remote-first Senior IC backend roles across distributed systems, Java/Spring Boot, and API security — reach out via email or LinkedIn for async or scheduled conversations.",
  },
  blogSection: {
    title: "Technical Writing",
    subtitle:
      "Deep-dives on Java, Spring Boot, multi-tenant Keycloak JWT validation, GraalVM native binaries, and real-world backend lessons.",
    link: "https://aprogrammers.wordpress.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location & Remote Readiness",
    subtitle:
      "India (IST) · Remote-First Engineer — 5+ years 100% remote delivery and async multi-time-zone overlap across US, EU & APAC",
    locality: "New Delhi",
    country: "INDIA",
    region: "Delhi NCR / Rajasthan",
    location_map_link:
      "https://www.google.com/maps/search/?api=1&query=New+Delhi,+India",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

function getTimePeriod(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  const plural = (n, unit) => `${n} ${unit}${n === 1 ? "" : "s"}`;

  if (years === 0) {
    return plural(months, "month");
  } else if (months === 0) {
    return plural(years, "year");
  }
  return `${plural(years, "year")} ${plural(months, "month")}`;
}

export {
  settings,
  seo,
  greeting,
  impactStats,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  awards,
  experience,
  projectsHeader,
  corporateProjectsHeader,
  corporateProjects,
  openSourceProjectsHeader,
  openSourceProjects,
  publicationsHeader,
  publications,
  contactPageData,
};
