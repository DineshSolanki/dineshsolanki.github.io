/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dinesh's Portfolio",
  description:
    "I'm Dinesh Solanki, I'm passionate about coding and contributing to open-source projects with experience building backend systems and APIs in Java and C#. " +
    "I'm passionate about writing clean, readable code and delivering robust, scalable solutions. " +
    "I'm always open to collaborating on new and innovative ideas.",
  og: {
    title: "Dinesh Solanki Portfolio",
    type: "website",
    url: "https://aprogrammer.wordpress.com/",
  },
};

//Home Page
const greeting = {
  title: "Dinesh Solanki",
  logo_name: "DineshSolanki",
  nickname: "Dinesh_Solanki",
  subTitle:
    "I'm Dinesh Solanki, I'm passionate about coding and contributing to open-source projects with experience building backend systems and APIs in Java and C#. I'm passionate about writing clean, readable code and delivering robust, scalable solutions. I'm always open to collaborating on new and innovative ideas.",
  resumeLink:
    "https://drive.google.com/file/d/1tNeM4Lq9leQob1oQnWNXw60sEvFiuuIf/view?usp=sharing",
  portfolio_repository: "https://github.com/DineshSolanki/DineshSolanki",
  githubProfile: "https://github.com/DineshSolanki",
};

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
  /*  {
    name: "YouTube",
    link: "https://youtube.com/c/-",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:solankid297@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*{
    name: "X-Twitter",
    link: "https://twitter.com/-",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },*/
  /*{
    name: "Facebook",
    link: "https://www.facebook.com/-/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  /*{
    name: "Instagram",
    link: "https://www.instagram.com/-/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },*/
];

const skills = {
  data: [
    {
      title: "Java full-stack Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready micro-services for a variety of use cases",
        "⚡ Experience of working with Spring Boot, Angular, Keycloak and more",
        "⚡ Restful API development using Java, Spring Boot and API Security",
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
          skillName: "Keycloak",
          imageSrc: "keycloak-logo.svg",
        },
        {
          skillName: "Azure Cloud Services",
          fontAwesomeClassname: "devicon:azure-wordmark",
        },
      ],
    },
    {
      title: "C# Desktop Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building performant and beautiful desktop applications using C#",
        "⚡ Developing WPF applications with MVVM architecture with Prism",
        "⚡ Creating Winforms applications",
        "⚡ Experience with DevExpress, Telerik, syncfusion and more",
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
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining microservices on virtual machine instances along with integration of databases",
        "⚡ Deploying microservices to kubernetes clusters",
        "⚡ Creating middleware for storage microservice to store and retrieve data from GCP and Azure cloud storage",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
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
    /*    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },*/
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
        "⚡ Apart from this, I have been involved in many college events and activities.",
        "⚡ I was also part of college's technical club and contributed to many opensource projects.",
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
        "⚡ Apart from core subjects, I have been part of College's literature activities.",
        "⚡ Volunteer of Training and Placement Cell.",
      ],
      website_link: "https://www.lachoomemorial.org",
    },
  ],
};

const certifications = {
  certifications: [
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I started my professional career with Java and have been continuously developing in the Java tech stack and its surrounding ecosystem. " +
    "I am also actively involved with many open-source communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: `Ness Digital Engineering (${getTimePeriod(
        "2024-10-17",
        Date.now()
      )})`,
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Ness Digital Engineering",
          company_url: "https://www.ness.com/",
          logo_path: "ness-logo.png",
          duration: "Oct 2024 - Present",
          location: "Pune, Maharashtra, India",
          description:
            "\n● Working closely in SCM projects" +
            "\n● Leading Java microservices creation and features" +
            "\n● Building NoCode platform in angular with java" +
            "\n● Mentoring technical upskill within team" +
            "\n● Working in agile environment " +
            "\n● Documented various process and automated tasks.",
          color: "#000000",
        },
      ],
    },
    {
      title: `Exela Technologies (${getTimePeriod(
        "2021-11-01",
        "2024-07-31"
      )})`,
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Exela Technologies",
          company_url: "https://www.exelatech.com/",
          logo_path: "exela-logo.png",
          duration: "Nov 2021 - July 2024",
          location: "Pune, Maharashtra, India (Remote)",
          description:
            "\n● Developed new features enabling key product (DrySign and ERN) to reach milestone release." +
            "\n● Enhanced application security strengthening controls around access, input validation, rate limiting etc. - raised score from 25 to 100 on OWASP standards" +
            "\n● Achieved PCI compliance" +
            "\n● Promoted clean coding best practices through code reviews and mentoring of new team members" +
            "\n● Communicating with end-users in case of product issue" +
            "\n● Developed replacements for legacy services" +
            "\n● Lead team of up to 6 developers for critical refactoring and API security overhaul" +
            "\n● Documented various process and automated tasks.",
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
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://aprogrammers.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Jodhpur, Rajasthan, India",
    locality: "Rajasthan",
    country: "INDIA",
    region: "Rajasthan",
    // postalCode: "95129",
    // streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
  if (years === 0) {
    return `${months} months`;
  } else if (months === 0) {
    return `${years} years`;
  }
  return `${years} years ${months} months`;
}

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
