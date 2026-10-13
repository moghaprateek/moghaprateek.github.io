/* =====================================================================
   PORTFOLIO CONFIG – edit this file to update your site.
   You do not need to touch index.html for normal content changes.

   After editing: git add . && git commit -m "Update content" && git push
   (the live site refreshes within a minute or two; hard refresh with Ctrl+F5)

   Notes
   - Keep the quotes, commas and brackets exactly as they are.
   - Remove a section's items (set it to []) to hide that block.
   - Experience bullets are written as ["text", ["Tag1","Tag2"]].
     The tags create the filter buttons in the Experience section.
   - Changing the page title/description for Google and LinkedIn is done
     in the <head> of index.html (see README, "SEO and sharing").
   ===================================================================== */
const CONFIG = {
  // ---- Personal details ----
  name: "Prateek Mogha",
  title: "Senior Software Engineer",
  location: "Edinburgh, United Kingdom",
  keywordsLine: "Java Developer · Backend Engineer · Microservices · Payments",
  currently: "Currently Senior Software Engineer at Jaguar Land Rover, Manchester",
  cv: "Prateek_Mogha_CV.pdf", // file name of your CV in this repo (replace the PDF to update it)
  tagline: "Java 17 · Spring Boot · Microservices · AWS · Kubernetes · Kafka",
  accent: "#10b981",          // theme colour (hex)
  // ---- Contact links (remove a line to hide that button) ----
  social: {
    email: "pmogha2008@gmail.com",
    linkedin: "https://www.linkedin.com/in/moghaprateek/",
    github: "https://github.com/moghaprateek"
  },
  // ---- About me: one string per paragraph ----
  about: [
    "I'm a Senior Java Engineer with over 10 years of experience designing, building and supporting resilient backend and cloud-native systems across enterprise technology, payments, capital markets and automotive technology.",
    "My day-to-day is Java 17, Spring Boot, microservices, AWS, Kubernetes and event-driven architecture with Kafka. I work across the full software development lifecycle: architecture, implementation, automated testing, CI/CD, security and production troubleshooting."
  ],
  skills: ["Java 17","Spring Boot","Microservices","Apache Kafka","AWS","Kubernetes","Docker","GitLab CI/CD","Spring Security","OAuth 2.0 / JWT","Datadog","JUnit 5"],
  // ---- Skills panel (right side) ----
  skillGroups: [
    { name: "Backend", items: ["Java 17","Spring Boot 3.5","Spring Cloud","Spring Security","Spring Batch","Microservices"] },
    { name: "Cloud & DevOps", items: ["AWS CDK","Lambda","DynamoDB","Kubernetes","Docker","GitLab CI/CD","Jenkins"] },
    { name: "Messaging", items: ["Apache Kafka","AWS SQS","Azure Service Bus"] },
    { name: "Security", items: ["OAuth 2.0","JWT","ForgeRock","Snyk","Trivy"] },
    { name: "Testing & Observability", items: ["JUnit 5","Spock","Mockito","PIT","Datadog"] }
  ],
  // ---- Headline numbers shown under About ----
  stats: [
    { value: "10+", label: "years in software engineering" },
    { value: "~200 TPS", label: "payments at 99.9% SLA" },
    { value: "50%", label: "faster CI/CD deployments" },
    { value: "35%", label: "faster vulnerability detection" }
  ],
  // ---- Work projects (add "link" to make a card clickable) ----
  projects: [
    { name: "Mobile-Money Payments Platform", description: "Backend engineering for Airtel Money and Idea Money platforms serving millions of subscribers, supporting around 200 TPS with a 99.9% SLA under RBI payment guidelines.", skills: ["Java","Spring","Payments","RBI compliance"] },
    { name: "Event-Driven Vulnerability Detection", description: "Pipeline that triggers security scans on code commits and processes results asynchronously, cutting vulnerability detection time by 35%.", skills: ["Kafka","Azure Service Bus","Spring Boot"] },
    { name: "Cloud-Native & Serverless Java on AWS", description: "Spring Boot microservices on Kubernetes, AWS infrastructure in CDK (Java), and Lambda functions tuned with Powertools and CRaC/SnapStart.", skills: ["AWS CDK","Lambda","Kubernetes","GitLab CI/CD"] }
  ],
  // ---- GitHub projects (each needs a link) ----
  repos: [
    { name: "DataMining-Project", description: "Python notebooks analysing Lending Club loan data, with an automated exploratory data analysis report generated using Sweetviz.", link: "https://github.com/moghaprateek/DataMining-Project", skills: ["Python","Jupyter","Data Mining"] },
    { name: "firebaseCRUD", description: "A basic demo of create, read, update and delete operations against Firebase, built with HTML, CSS and JavaScript.", link: "https://github.com/moghaprateek/firebaseCRUD", skills: ["JavaScript","Firebase","HTML/CSS"] },
    { name: "singapore-dashboard", description: "A front-end dashboard project built with HTML, CSS and JavaScript.", link: "https://github.com/moghaprateek/singapore-dashboard", skills: ["JavaScript","HTML/CSS"] },
    { name: "Game_Recommendation_System", description: "Game recommendation engine built on the Steam games dataset, using hybrid filtering to generate recommendations. Includes the Python code, presentation and poster.", link: "https://github.com/moghaprateek/Game_Recommendation_System", skills: ["Python","Jupyter","Recommender Systems"] },
    { name: "Cricket-Mud-Games", description: "A Python cricket game run from the terminal. Teams, bowlers, players and saved sessions are held in data files, and the number of overs is configurable. Includes a test report.", link: "https://github.com/moghaprateek/Cricket-Mud-Games", skills: ["Python","File Handling","Unit Testing"] },
  ],
  // ---- Work experience, newest first ----
  experience: [
    { company: "Jaguar Land Rover", title: "Senior Software Engineer", location: "Manchester, UK", dateRange: "Sep 2022 – Present", bullets: [
      ["Develop and maintain Spring Boot 3 microservices using Java 17, Spring Cloud OpenFeign and DynamoDB.", ["Core"]],
      ["Deploy containerised applications to Kubernetes using GitLab CI/CD and Kaniko.", ["DevOps","Cloud"]],
      ["Design asynchronous event-driven solutions using Apache Kafka and AWS SQS for high-volume data streams.", ["Event-driven"]],
      ["Develop AWS infrastructure using AWS CDK with Java, and manage AWS Secrets Manager and STS configuration.", ["Cloud"]],
      ["Build AWS Lambda functions for JWT authorisation, ENI IP lookup and command proxying, using Lambda Powertools and CRaC/SnapStart for serverless Java performance.", ["Cloud"]],
      ["Implement ForgeRock JWT validation using Nimbus JOSE and Spring Security filter chains.", ["Security"]],
      ["Build observability with Micrometer, Datadog, Feign metrics, Lambda tracing and structured JSON logging, including automated Slack and email alerts at a 5% failure-rate threshold.", ["Observability"]],
      ["Integrate Snyk, Trivy, OWASP Dependency-Check and Semgrep into automated CI/CD security checks.", ["Security","DevOps"]],
      ["Enforce quality gates with Checkstyle, Spock, JUnit 5 and PIT mutation testing (100% mutation threshold, 80% coverage threshold).", ["Testing"]],
      ["Mentor junior developers and take part in sprint planning, retrospectives and backlog refinement.", ["Leadership"]]
    ]},
    { company: "Bramfitt Technology Labs", title: "Java Developer", location: "London, UK", dateRange: "Feb 2022 – Sep 2022", bullets: [
      ["Designed an event-driven vulnerability detection pipeline using Apache Kafka and Azure Service Bus.", ["Event-driven","Security"]],
      ["Reduced vulnerability detection time by 35% by triggering scans on code commits and processing results asynchronously.", ["Security"]],
      ["Built Spring Boot and ReactJS role-based access with database-level enforcement, including SSO authentication and auditable access governance.", ["Security","Core"]],
      ["Worked on Microsoft Azure in an Agile/Scrum environment.", ["Cloud"]]
    ]},
    { company: "Mahindra Comviva", title: "Technical Lead", location: "Gurugram, India", dateRange: "Apr 2020 – Jan 2021", bullets: [
      ["Led backend engineering for the Airtel Money and Idea Money payment platforms serving millions of subscribers.", ["Payments","Leadership"]],
      ["Supported approximately 200 TPS and a 99.9% SLA under peak transactional loads.", ["Payments"]],
      ["Worked within RBI payment system guidelines and telecom operator compliance rules for transaction processing and customer data.", ["Payments"]],
      ["Redesigned database schemas and implemented data partitioning to improve transactional performance.", ["Core"]],
      ["Reduced CI/CD deployment time by 50%, from 12 hours to 6 hours.", ["DevOps"]],
      ["Guided junior developers on day-to-day development and troubleshooting.", ["Leadership"]]
    ]},
    { company: "Genpact Headstrong Capital Markets", title: "Consultant – Software Engineer", location: "Noida, India", dateRange: "Dec 2018 – Apr 2020", bullets: [
      ["Developed backend and UI components with Spring MVC for a US healthcare SaaS platform, covering patient billing, clinical user management and data operations under US healthcare compliance.", ["Core"]],
      ["Supported a live capital markets trading application under high request volumes.", ["Core"]],
      ["Diagnosed production failures through root-cause analysis and delivered real-time fixes, eliminating trading downtime incidents.", ["Core"]],
      ["Collaborated with engineering, product and business stakeholders throughout the SDLC.", ["Leadership"]]
    ]},
    { company: "Infosys", title: "Technology Analyst", location: "Bhubaneswar, India", dateRange: "Oct 2017 – Aug 2018", bullets: [
      ["Developed Spring Batch processing for insurance benefits and premium calculations across high-volume regulated datasets.", ["Core"]],
      ["Reduced manual regression testing by 28% through JUnit and Mockito automation in Jenkins CI/CD.", ["Testing","DevOps"]],
      ["Participated in Agile/Scrum development and maintenance.", ["Core"]]
    ]},
    { company: "Comviva", title: "Java Developer", location: "Gurugram, India", dateRange: "Jul 2015 – Oct 2017", bullets: [
      ["Developed USSD payment applications for Airtel and Idea using Java Servlets, JSP and Spring.", ["Payments","Core"]],
      ["Integrated SOAP and RESTful web services.", ["Core"]],
      ["Improved database query performance by 20% through optimisation.", ["Core"]],
      ["Increased automated test coverage to 85% and reduced production incidents by 26%.", ["Testing"]]
    ]}
  ],
  // ---- Education (left panel) ----
  education: [
    { school: "United Kingdom", degree: "MSc in Data Science", dateRange: "2022" },
    { school: "Maharaja Surajmal Institute of Technology, Delhi, India", degree: "B.Tech in Information Technology", dateRange: "2014" },
    { school: "Father Agnel Polytechnic, Delhi, India", degree: "Diploma in Computer Science", dateRange: "2011" }
  ],
  // ---- Certifications (right panel) ----
  certifications: [
    "Microsoft Certified: Azure AI Fundamentals",
    "Microsoft Certified: Security, Compliance & Identity Fundamentals",
    "Spring Boot Microservices (LinkedIn Learning)",
    "Learning Jenkins (LinkedIn Learning)"
  ],
  // number of bullets shown per role before "Show more" (all are shown when filtering)
  visibleBullets: 5,
  // number of roles shown before the "Show earlier roles" button
  visibleRoles: 3 // roles shown before "Show earlier roles"
};
