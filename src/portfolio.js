/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dinesh Solanki — Senior Backend Engineer (Java, Spring Boot)",
  description:
    "Senior Backend Engineer with ~5 years building and owning secure, scalable backend systems in Java, Spring Boot and cloud-native microservices. " +
    "Specialized in API security and identity — Keycloak, OAuth2, JWT and ISTIO — across compliance-heavy enterprise platforms.",
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
  roleStack: "Java · Spring Boot · Cloud-Native Microservices",
  currentPosition: "Senior Technical Consultant @ EY",
  email: "solankid297@gmail.com",
  subTitle:
    "~5 years building and owning secure, scalable backend systems for compliance-heavy enterprise platforms — digital signatures, remote notarization, identity verification and workflow automation. " +
    "I specialize in API security and identity with Keycloak, OAuth2, JWT and ISTIO.",
  resumeLink:
    "https://drive.google.com/file/d/1tNeM4Lq9leQob1oQnWNXw60sEvFiuuIf/view?usp=sharing",
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
    value: "4 regions",
    label: "Delivered with teams across Philippines, US, EU & India",
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
        "⚡ Owning backend modules end-to-end — from design and implementation through UAT stabilization and release",
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
      // Flat keyword block: scannable for recruiters and ATS keyword matching.
      // No illustration -- renders full width.
      title: "Technical Skills",
      skills: [
        "⚡ Languages & Frameworks: Java, Spring Boot, Angular, Maven, Gradle, Spring Shell, JSLT, XSLT",
        "⚡ Security: Spring Security, Keycloak, OWASP, PCI Compliance, SAST/DAST, Veracode, Blackduck, Coverity",
        "⚡ Cloud & DevOps: Azure, AWS, Docker, Kubernetes, Jenkins, Git, Azure DevOps, Tuleap",
        "⚡ Standards & Protocols: GS1, EPCIS, DSCSA, REST APIs, OpenAPI",
        "⚡ Databases & Tools: SQL, MongoDB, Subversion, Jira, IntelliJ, VSCode, Eclipse, Visual Studio",
        "⚡ Others: CI, Code Review, Microservices, Authentication & Authorization, Secure Coding Practices",
        "⚡ Languages: English (Full Professional), Spanish (Elementary), Hindi (Native or Bilingual)",
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
      subtitle: "Master of Computer Applications",
      logo_path: "mbmu-logo.png",
      alt_name: "MBM University",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ GPA - 8.7",
        "⚡ Coding club mentor; contributed to online tests development and college events.",
      ],
      website_link: "https://www.mbm.ac.in",
    },
    {
      title: "Lachoo Memorial College of Science & Technology",
      subtitle: "Bachelor of Computer Applications",
      logo_path: "lmcst-logo.png",
      alt_name: "Lachoo Memorial College of Science & Technology",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ GPA - 7.1",
        "⚡ TPO cell volunteer and active in college activities.",
      ],
      website_link: "https://www.lachoomemorial.org",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Foundational C#",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B01",
    },
    {
      title: "EF SET English Certificate - 77/100",
      subtitle: "C2 Proficient",
      logo_path: "efset_logo.svg",
      certificate_link: "",
      alt_name: "EF SET",
      color_code: "#0C9D58",
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
    "~5 years building and owning backend systems in Java and Spring Boot, across document-centric and compliance-heavy enterprise platforms. " +
    "I work deeply on backend engineering, system design and security-focused problem solving, and stay actively involved in open-source communities.",
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
            "Building Java microservices and cloud-native systems for enterprise clients.",
            "Working across backend service design, security and identity (Keycloak, OAuth2) and DevOps practices.",
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
          location: "Pune, Maharashtra, India",
          description: [
            "Owned backend services for enterprise supply-chain and healthcare systems (GS1 / EPCIS) using Java and Spring Boot.",
            "Optimized high-volume serialization workflows (10k+ serials), cutting processing time from 2\u20133 hours to ~10 minutes.",
            "Diagnosed and resolved large-payload and performance issues, including MongoDB document size limits.",
            "Built microservices with JSON-heavy APIs and Keycloak-based IAM integrations; implemented access-control flows with ISTIO and OAuth2.",
            "Integrated SAST/DAST tooling (Blackduck, Coverity) and developed utilities to handle long-running tasks.",
            "Stabilized UAT phases and improved release readiness \u2014 handled C1/C2 incidents under strict SLAs and held 100% Jira board stability since joining the sprint.",
            "Collaborated across a multi-regional team spanning the Philippines, US, EU and India, working with QA, product and engineering to resolve critical defects.",
            "Mentored interns, reviewed pull requests, influenced architecture decisions and delivered client demos \u2014 recognized with quarterly and spot awards (Innovation Catalyst).",
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
          location: "Pune, Maharashtra, India (Remote)",
          description: [
            "Java full-stack developer (backend-heavy) across Remote Notarization, DrySign, DMR and in-house products.",
            "Raised the application's security score from 25 to 100 against OWASP standards \u2014 a first for the product \u2014 and achieved PCI compliance.",
            "Led a team of up to 6 developers through a critical refactoring and API security overhaul.",
            "Integrated Keycloak for IAM and implemented Stripe payments.",
            "Developed new features that took DrySign and ERN to a milestone release, and restructured the existing product for a version 2.",
            "Built replacements for legacy services, and documented and automated recurring processes.",
            "Promoted clean, readable code through reviews and mentoring of new team members.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Java backend services and C# desktop applications.",
  avatar_image_path: "projects_image.svg",
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
      description:
        "Are you tired of hearing native is better? Say hello to GraalVM! This powerhouse tool converts your Java program into a self-contained executable, ensuring a seamless experience for all. With simple steps like setting environment variables and using Maven, you'll be up and running in no time.",
      url:
        "https://aprogrammers.wordpress.com/2024/05/24/how-to-create-self-contained-executables-convert-java-programs-with-graalvm/",
    },
    {
      id: "Single-Entity-with-mongo-JPA",
      name: "Using Single Entity with JPA and Mongo DB in spring-boot",
      createdAt: "2024-01-25T00:00:00Z",
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
      description:
        "Validating JWT tokens provided by Keycloak in a Spring Boot application with multiple realms can be challenging. This blog post will provide a step-by-step guide on how to implement a custom JWT decoder that can handle multiple realms.",
      url:
        "https://aprogrammers.wordpress.com/2023/09/17/how-to-validate-keycloak-token-when-you-have-multiple-realmsmulti-tenancy/",
    },
    {
      id: "java-logs-retrieval",
      name: "Programmatically Retrieving Log Files in Java Spring Boot",
      createdAt: "2023-11-20T00:00:00Z",
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
      "You can reach out to me for any queries, job positions or collaboration. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as technical knowledge sharing.",
    link: "https://aprogrammers.wordpress.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Jodhpur, Rajasthan, India",
    locality: "Rajasthan",
    country: "INDIA",
    region: "Rajasthan",
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
  publicationsHeader,
  publications,
  contactPageData,
};
