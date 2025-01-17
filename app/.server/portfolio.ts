import {
  deescut,
  hetchrLogo,
  innosonianHome,
  jobypepperHome,
  nomadherHome,
  packativeHome,
  sicpama,
  smartMeUpLogo,
} from "~/ui/img";

export type PortfolioItem = {
  id: string;
  title: string;
  imgs: string[];
  url: string;
  date: string;
  description: string;
  intro: string;
  type: string;
  challenge: string;
  result: string[];
  sector: string;
  technologies: string[];
  work: string;
};
const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: "packative",
    title: "Packative",
    imgs: [packativeHome],
    date: "June 2024 - November 2024",
    description: "Ecommerce for packaging",
    url: "https://www.packative.com",
    intro:
      "Packative is a young startup striving to revolutionize the packaging industry in South Korea. Through their applications, they aim to help small and medium-sized businesses easily create and order custom-designed packaging.",
    type: "Frontend & Backend",
    challenge:
      "I joined Packative during the development of their new version. The company urgently needed to release this version to attract new clients and address customer needs, which is why I was recruited. Joining in the middle of a sprint required a great deal of flexibility in my work. I had less than a week to familiarize myself with the packaging industry, understand how the company operates, learn the main features of the software, and get up to speed with the codebase.",
    result: [
      "Successfully released a new e-commerce application.",
      "Increased front-end test coverage from 0% to over 70%.",
      "Shifted 90% of user actions from being server-handled to client-side handling using Zustand.",
      "Maintained full SEO compliance with excellent Google indexing.",
      "Reduced reported errors from approximately 20 per day to fewer than 1 per day, as tracked by Sentry.",
      "Migrated the Next.js application from Vercel to AWS, cutting server costs by more than half.",
      "Trained 2 developers in TDD and clean architecture principles.",
    ],
    work: "As a freelance web developer, I played a key role in developing an innovative e-commerce platform using Next.js and Medusa.js. My responsibilities included designing and implementing the core platform, enhancing the admin dashboard, integrating a sleek new design, and building a custom sizing system tailored to packaging needs. I also worked on a sophisticated 3D editor to provide users with an interactive customization experience. Throughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand for robust state management and maintainability.\n\nMy primary mission was to help the development team complete and release the new e-commerce application. After discovering that the entire application lacked tests, I decided, with the CTO's approval, to implement and manage a unit testing system. I also trained the development team on the TDD (Test-Driven Development) approach and how to apply it to new features.\n\nSince TDD encourages developers to adopt clean architecture principles (also known as onion architecture or hexagonal architecture), I explained these concepts to the team. After redesigning the architecture and integrating Zustand as a state manager (despite using Next.js), we were able to release new features on the front end quickly and with confidence, avoiding unexpected issues in production.\n\nOn the backend, most of the work was handled by Medusa.js, a headless e-commerce framework. While Medusa provides a stable system with extensive features for e-commerce applications, the packaging industry's unique requirements necessitated the creation and customization of certain features to better serve our users.",
    technologies: [
      "Next.JS",
      "Zustand",
      "Medusa.JS",
      "AWS",
      "Typescript",
      "PostgreSQL",
    ],
    sector: "E-commerce application",
  },

  {
    id: "nomadher",
    title: "NomadHer",
    date: "April 2022 - November 2023",
    description: "Mobile appplication for women traveling alone",
    imgs: [nomadherHome],
    url: "https://www.nomadher.com",
    intro:
      "NomadHer is the first mobile application designed for solo women travelers. As the Head of Tech, I managed the entire application independently, ensuring the platform's scalability. Growing the user base from 500 to over 200,000 was an incredible experience.",
    type: "Head of tech",
    work: "As Head of Tech at NomadHer, I single-handedly scaled the app from 500 to 200,000+ users, successfully managing the complexities of a rapidly growing social network. I led all aspects of development, from implementing new React Native mobile features with Firebase to migrating the backend to Nest.js, while adopting TDD and CI/CD workflows. Additionally, I refactored GCP environments, integrated Stripe and ElasticSearch, and redesigned the NoSQL database architecture.\n\nMy primary mission was to continue mobile application development. Every two weeks, I released a new version with new features and bug fixes. Since the codebase lacked unit tests, I implemented a comprehensive unit testing system. Releasing the application became increasingly challenging because it communicated directly with Firebase via the mobile SDK. To address this, my second primary objective was to build a robust backend with Nest.js to properly manage versioning and shift as much business logic as possible to the server side. The backend was developed using a TDD approach and Clean Architecture principles. As a result, it was deployed to production within two months, achieving nearly 90% code coverage.\n\nThe main database, Firestore, contained highly denormalized data. One of my key tasks was to refactor the schema, normalize critical frequently-changing data, and implement a proper backup system. Since Firestore lacked full-text search capabilities, I integrated ElasticSearch as a secondary database, enabling new features for users and providing the admin team with an efficient way to monitor KPIs.\n\nIn addition to these tasks, I developed new features, including:\n\nTravel Buddy: This feature allowed users to find and connect with other solo travelers nearby, enabling them to communicate and meet up. ElasticSearch facilitated an efficient solution for users.\n\nTravel Camp: The company organized global trips to bring the community together for activities. I implemented a comprehensive ticketing system using GCP Task Scheduler and Stripe. Since spots were limited, I integrated a timer system giving users 10 minutes to complete their payments.\n\nBeyond these features, I also:\n-  Refactored the onboarding system.\n- Enhanced the identity verification system, requiring proof of identity.\n- Created an admin dashboard for application management.\n- Reworked the feed feature, integrating ElasticSearch.\n- Sanitized and optimized the data.\n\nThrough these efforts, I significantly enhanced the app's scalability, functionality, and user experience.",
    result: [
      "The application grew from 500 users to over 200,000!",
      "The new backend was deployed to production seamlessly.",
      "Achieved approximately 90% code coverage.",
      "Implemented a new search system using ElasticSearch.",
      "Developed a ticketing system, providing the company with a new source of revenue.",
      "Introduced the widely-used Travel Buddy feature.",
      "Created a comprehensive admin dashboard, enabling the admin team to effectively manage the application.",
      "Established a CI/CD pipeline to assist the development team with test SDKs and automated releases.",
      "Implemented a versioning system for both the mobile app and the backend.",
      "Fully sanitized and secured the database, with an automated backup system in place.",
    ],
    challenge:
      "I joined NomadHer shortly after their founding engineer left the company. The team urgently needed an engineer to maintain and continue the development of the application.\nTaking on this role alone, without any documentation, for an already released application with a small but growing user base was a challenging task. My primary objectives were to continue developing the application, refactor the codebase, resolve security issues, establish a proper CI pipeline, and manage DevOps to scale the system as the community rapidly grew.",
    technologies: [
      "React Native",
      "Redux",
      "GCP",
      "Firebase",
      "Typescript",
      "Firestore",
      "ElasticSearch",
      "React",
      "Nest.JS",
    ],
    sector: "Social network - Mobile application",
  },
  {
    id: "innosonian",
    title: "Innosonian",
    imgs: [innosonianHome],
    date: "September 2020 - April 2022",
    description: "Web and mobile application for connected cpr manikins",
    url: "https://www.innosonian.global",
    intro:
      "Innosonian is a company focused on creating innovative solutions for healthcare training and education. They are recognized for their development of cutting-edge technologies and tools designed to enhance medical and emergency response training, with a particular emphasis on CPR and life support simulation systems.",
    type: "Frontend & Backend",
    challenge:
      "Working at Innosonian required adapting to a predominantly non-English environment with a vastly different cultural background, which enhanced my cross-cultural communication and collaboration skills. I also tackled the challenge of developing innovative solutions using emerging technologies like Web Bluetooth, which had limited support and documentation at the time.\n\nAdditionally, I was responsible for managing the entire lifecycle of the web application, from design to feature ideation and implementation. This required balancing technical execution with creative problem-solving to deliver a robust, user-friendly product that met the company’s high standards for healthcare training solutions.",
    result: [
      "Successfully implemented a real-time data handling system capable of processing requests at 300ms intervals without significant latency or disruptions.",
      "Developed the application to function seamlessly across multiple platforms (e.g., desktop, mobile, or specific browsers).",
      "Independently gathered and implemented user feedback to improve application usability and introduce innovative features, enhancing the user experience for healthcare professionals.",
      "Designed the system architecture to support multiple simultaneous connections (e.g., multiple manikins or users), ensuring scalability for group training sessions.",
      "Supported localization and internationalization by integrating 3 languages, making the application accessible to diverse users worldwide.",
      "Enabled healthcare professionals to conduct remote training sessions through the online classroom system, reducing barriers for geographically dispersed users.",
      "Successfully integrated Web Bluetooth and WebRTC to enable secure, low-latency communication between devices and users, ensuring reliable operation in real-time training scenarios.",
      "Delivered a unique solution that combined real-time feedback, remote control, and live video streaming, setting a new standard for healthcare training technology.",
      "Directly contributed to the adoption of the platform by more than 30 organizations globally, from hospitals to training centers, demonstrating its practical impact and success in real-world applications.",
    ],
    work: "As a web developer at Innosonian, my primary responsibility was to design and develop their web application. The application connected via Bluetooth to three different types of CPR manikins and adhered to a rigorous communication protocol. One of the most significant technical challenges was ensuring the application handled data requests sent every 300ms without interruptions or delays. This required optimizing the application's architecture for real-time performance, implementing error-handling mechanisms for dropped connections, and ensuring smooth user experiences despite the inherent limitations of Web Bluetooth technology. Beyond the technical implementation, I also managed user feedback independently and developed innovative features to improve usability, such as enabling the connection of multiple manikins simultaneously. This feature allowed group training sessions, enhancing the overall value of the product for users.\n\nMy second major project was developing the online class system. This project aimed to address the needs of users who required remote communication and student assessment capabilities. I designed a system where teachers could manage connected manikins through WebRTC, allowing them to create class sessions, remotely start and stop manikins, and evaluate students in real-time using live feedback. To achieve this, I architected a solution where data from the manikins was transmitted to the web application via Web Bluetooth, processed, and then relayed back to the teacher using WebRTC. This approach ensured seamless synchronization between multiple users. One significant challenge I overcame was ensuring low-latency data transmission between manikins, the web application, and remote users, despite the complexity of combining Web Bluetooth and WebRTC technologies. Additionally, I integrated a video chat system for real-time communication, which further enhanced the system’s interactivity and usability.\n\nMy final project was developing an admin dashboard for companies using our applications. This dashboard allowed administrators to manage class sessions, users, and training types while also offering customization features for automatic certification. The diploma customization feature required implementing a dynamic template system to accommodate various client needs, enabling organizations to tailor certifications to their branding and standards. The dashboard streamlined administrative tasks, making it an essential tool for organizations relying on Innosonian’s applications.",
    technologies: [
      "React",
      "Redux",
      "AWS",
      "Typescript",
      "PostgreSQL",
      "WebRTC",
      "Web bluetooth",
    ],
    sector: "Healthcare & embedded software",
  },
  {
    id: "jobypepper",
    title: "JobyPepper",
    date: "January 2018 - June 2018",
    description: "SAAS for short term student job",
    imgs: [jobypepperHome],
    url: "https://www.jobypepper.com",
    intro:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    work: "",
    technologies: ["React", "Redux", "MongoDB"],
    sector: "SaaS - Student jobs",
  },
  {
    id: "Marreli",
    title: "Smart me up - Marreli",
    date: "July 2020 - September 2020",
    description: "Private dashboard for autopiloted car fleet",
    imgs: [smartMeUpLogo],
    url: "https://www.marelli.com/",
    intro:
      "SmartMeUp, founded in 2012 and based in Meylan, France, specialized in developing perception software for autonomous driving, focusing on low-power object detection and 3D environment modeling. With my help we created an admin dashboard and reviewed their anotation plateform and system",
    type: "Frontend & Backend",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    work: "",
    technologies: ["Vue.JS", "Python", "MongoDB", "Typescript", "Jango"],
    sector: "Computer vision - autopilot cars",
  },
  {
    id: "Hetchr",
    title: "Hetchr",
    date: "September 2019 - June 2020",
    description: "SaaS for developer's team management",
    imgs: [hetchrLogo],
    url: "https://www.marelli.com/",
    intro:
      "Hetchr is a French startup founded in 2019 that focuses on providing tools for automating and optimizing processes for small to medium-sized businesses. The company aims to simplify and streamline workflows by offering tailored SaaS solutions that can be customized to meet specific client needs.",
    type: "Frontend & Backend",
    challenge:
      "At Hetchr, I independently developed the first SaaS version using Express and React, managing the database with PostgreSQL and front-end state with Redux and Redux-Saga. I also handled DevOps on AWS, ensuring a robust and scalable application by adhering to best practices in code architecture and design.",
    result: [""],
    work: "",
    technologies: [
      "React",
      "Redux",
      "Webhook",
      "AWS",
      "Typescript",
      "PostgreSQL",
    ],
    sector: "SaaS - HR - project management",
  },
  {
    id: "sicpama",
    title: "SicPama",
    imgs: [sicpama],
    date: "November 2023 - June 2024",
    description: "Order solution for F&B",
    url: "https://www.sicpama.com/",
    type: "Frontend & Backend",
    intro:
      "SicPama is a South Korean startup founded in 2021, specializing in QR code-based ordering and payment systems for the restaurant industry. Their platform enables customers to place joint orders and choose payment options without the need for additional hardware, enhancing operational efficiency for restaurant owners",
    challenge:
      "At SicPama, I spearheaded the transformation of customer-facing applications and the KDS, evolving a mixed JS/TS React app into a full TS solution. Working closely with the CTO, we refactored the backend with clean architecture and SOLID principles. I introduced functional programming, resolved over 500 warnings, and designed data-driven systems for rewards, menu management, and inventory.",
    result: [""],
    work: "",
    technologies: [
      "Next.JS",
      "React",
      "Zustand",
      "AWS",
      "Typescript",
      "PostgreSQL",
      "Express",
    ],
    sector: "Food & Beverage - Point Of Sale",
  },
  {
    id: "Deescut",
    title: "Deescut",
    date: "January 2019 - April 2019",
    description: "SaaS for developer's team management",
    imgs: [deescut],
    url: "https://fr.linkedin.com/company/deescut",
    intro:
      "JobyPepper is the leading SaaS platform for student jobs in France. The company provides all the tools students and companies need to find jobs and manage billing. As a developer during the company's early stages, it was an incredible experience to work on a variety of topics.",
    type: "Frontend",
    work: "",
    challenge:
      "As a web developer, I played a key role in developing their innovative e-commerce platform using Next.js and Medusa.js.\nMy responsibilities included designing and implementing the core platform, creating and enhancing the admin dashboard, integrating a sleek new design, and building a custom size system tailored to packaging needs.\n\nI also worked on their sophisticated 3D editor to provide users with an interactive customization experience.\n\nThroughout the project, I adhered to rigorous Test-Driven Development (TDD) practices, leveraging Zustand to ensure robust state management and maintainability.",
    result: [""],
    technologies: ["React", "Redux", "Typescript"],
    sector: "Social network - Debate plateform",
  },
];

export const getPortfolioHome = async () => PORTFOLIO_LIST.slice(0, 4);
export const getPortfolioList = async () => PORTFOLIO_LIST;
export const getPortfolioById = async (id: string) =>
  PORTFOLIO_LIST.find((p) => p.id === id);
