export const personalInfo = {
  name: "Udit Narayan Ganguly",
  handle: "udit@root",
  domain: "uditganguly.dev",
  college: "JIS College Of Engineering, Kalyani",
  yearAndDept: "2nd Year B.Tech in Computer Science & Engineering (CSE)",
  title: "Aspiring Cyber Security Specialist and Ethical Hacker with Software Developer",
  subtitles: [
    "2nd Year B.Tech CSE Student at JIS College Of Engineering, Kalyani",
    "Strengthening DSA Journey Through Java",
    "Cyber Security & Ethical Hacking Enthusiast (Course Ongoing)",
    "Exploring AI & Machine Learning For Future Tech",
    "Creator of MaatiKatha (Flagship Project)",
    "Smart Governance for Coal Mines Innovator",
    "Avid Hackathon Competitor & Tech Enthusiast"
  ],
  bio: "I am Udit Narayan Ganguly, a 2nd-year B.Tech Computer Science and Engineering student at JIS College Of Engineering, Kalyani. As an enthusiastic technologist, I have foundational knowledge in Java, Python, SQL, and HTML. I am actively strengthening my Data Structures and Algorithms (DSA) through Java, while pursuing my passion in Cyber Security and Ethical Hacking through specialized courses. With an eye toward the future, I am also learning AI and Machine Learning. I love building practical, impactful projects - most proudly 'MaatiKatha' and a 'Smart Governance Monitoring System for Coal Mines' - and have enriched my problem-solving skills across several hackathons.",
  location: "Kalyani, West Bengal, India (IST, UTC+5:30)",
  availability: "Open for Tech Projects, Hackathons & Open Source", 
  email: "uditnarayanganguly10@gmail.com",
  phone: "+91 9064470858",
  rawPhone: "9064470858",
  github: "https://github.com/uditnarayan2672007",
  linkedin: "https://www.linkedin.com/in/udit-narayan-ganguly-0855883a1",
  tryhackme: "https://tryhackme.com",
  hackthebox: "https://hackthebox.com",
  twitter: "https://twitter.com",
  systemSpecs: {
    college: "JIS College Of Engineering, Kalyani",
    academicStatus: "2nd Year B.Tech CSE (2023 - 2027)",
    primaryDSA: "Java (Data Structures & Algorithms)",
    coreLanguages: "Java, Python, SQL, HTML",
    specialInterests: "Cyber Security & Ethical Hacking (In Course), AI & ML",
    proudestWork: "MaatiKatha & Coal Mine Smart Governance",
    hackathonExp: "Active Hackathon Participant & Problem Solver"
  }
};

export const stats = [
  { label: "College & Academic Year", value: "2nd Year CSE", icon: "Award", color: "text-cyan-400" },
  { label: "Flagship Innovations", value: "MaatiKatha+", icon: "ShieldCheck", color: "text-emerald-400" },
  { label: "DSA Focus Language", value: "Java", icon: "Code", color: "text-purple-400" },
  { label: "Hackathons & Events", value: "Multiple", icon: "Flag", color: "text-rose-400" },
];

export const skillCategories = [
  {
    name: "Languages & DSA",
    id: "languages",
    skills: [
      { 
        name: "DSA in Java", 
        level: 85, 
        tag: "Problem Solving", 
        desc: "Strengthening core Data Structures & Algorithms in Java - arrays, linked lists, trees, recursion, and algorithmic efficiency." 
      },
      { 
        name: "Java", 
        level: 88, 
        tag: "Core Language", 
        desc: "Object-oriented programming, classes, encapsulation, collections framework, and clean modular development." 
      },
      { 
        name: "Python", 
        level: 82, 
        tag: "Programming & Logic", 
        desc: "Scripting, algorithm implementations, backend data processing, and automation." 
      },
      { 
        name: "C", 
        level: 80, 
        tag: "System Foundations", 
        desc: "Low-level programming, pointers, memory addressing, procedural logic, and CS fundamentals." 
      },
      { 
        name: "C++", 
        level: 78, 
        tag: "OOP & Performance", 
        desc: "Standard Template Library (STL), memory management, object-oriented concepts, and performance computing." 
      },
      { 
        name: "SQL", 
        level: 82, 
        tag: "Database & Queries", 
        desc: "Relational database modeling, complex JOINs, table constraints, normalization, and data persistence." 
      }
    ]
  },
  {
    name: "Specializations & Learning Tracks",
    id: "tracks",
    skills: [
      { 
        name: "Cybersecurity & Ethical Hacking Learner", 
        level: 80, 
        tag: "Active Coursework", 
        desc: "Hands-on learning in network reconnaissance, Kali Linux, Nmap port scanning, Wireshark packet capture, and security defenses." 
      },
      { 
        name: "AI ML Learner", 
        level: 76, 
        tag: "Emerging Tech Track", 
        desc: "Actively studying Artificial Intelligence and Machine Learning foundations, data pipelines, predictive models, and future intelligent systems." 
      }
    ]
  },
  {
    name: "Engineering & Applied Strengths",
    id: "engineering",
    skills: [
      { 
        name: "Software Project Builder", 
        level: 90, 
        tag: "Practical Impact", 
        desc: "Proven track record of architecting and shipping real-world software like MaatiKatha (Artisan Heritage) and Coal Mine Governance systems." 
      },
      { 
        name: "Quick Learner", 
        level: 92, 
        tag: "Core Strength", 
        desc: "Rapidly mastering new technologies, programming languages, and industry workflows with curiosity and high self-discipline." 
      }
    ]
  }
];

export const projects = [
  {
    id: "maatikatha",
    image: "/projects/maatikatha.jpg",
    title: "MaatiKatha: Preserving Soil Traditions & Artisan Heritage",
    category: "Full-Stack",
    badge: "â­ Best Flagship Project",
    description: "Udit's proudest flagship project! A holistic digital storytelling and socioeconomic platform designed to celebrate indigenous soil craftsmanship, empower traditional pottery artisans, and bridge rural heritage with modern digital audiences.",
    longDescription: "MaatiKatha was created from the heart as Udit's best project. It serves as an interactive cultural and socioeconomic bridge for regional soil crafts and pottery artisans. The platform preserves the rich cultural narrative of 'Maati' (the soil), catalogs authentic handmade artisan creations, provides market visibility to traditional sculptors and potters, and delivers educational content on sustainable soil art forms.",
    tags: ["HTML5", "Modern CSS", "JavaScript", "SQL", "Artisan Heritage", "Responsive UI"],
    features: [
      "Artisan Storytelling Hub showcasing generations of soil craft techniques and cultural stories",
      "Interactive digital craft catalog connecting traditional potters directly with conscious buyers",
      "Structured SQL database managing artisan profiles, craft classifications, and regional heritage tags",
      "Responsive, culturally resonant design with seamless user experience across all devices",
      "Celebrated as Udit's best and most meaningful personal tech creation"
    ],
    github: "https://github.com/uditnarayan2672007",
    demo: "#contact",
    featured: true,
    accentColor: "emerald"
  },
  {
    id: "coal-mine-monitoring",
    image: "/projects/coal_mine.jpg",
    title: "Smart Governance Monitoring System for Coal Mines",
    category: "Tools & Scripts",
    badge: "Hackathon Innovation",
    description: "An advanced smart governance platform engineered to monitor hazardous environmental parameters (gas leaks, temperature), worker safety compliance, and operational transparency in coal mining sectors.",
    longDescription: "Conceptualized and built for competitive hackathons to address dangerous safety oversights in underground coal mines. The system tracks critical safety metrics including methane and toxic gas levels, temperature anomalies, and underground worker zone counts. It features an automated alert dispatcher, incident logs, and a centralized administrative dashboard for regulatory governance and safety audits.",
    tags: ["Java", "Python", "SQL", "Smart Governance", "Telemetry Monitoring", "Safety Compliance"],
    features: [
      "Real-time simulated telemetry for dangerous gas levels (methane, carbon monoxide) and heat",
      "Automated safety threshold alerts with instant incident escalation to supervisor dashboards",
      "Worker zone check-in and evacuation safety status monitoring",
      "Relational SQL storage for compliance logging, shift histories, and government audit trails",
      "Presented and recognized across hackathons for its practical social and industrial impact"
    ],
    github: "https://github.com/uditnarayan2672007",
    demo: "#contact",
    featured: true,
    accentColor: "cyan"
  },
  {
    id: "java-dsa-suite",
    image: "/projects/coding_dsa.jpg",
    title: "Java DSA Problem Solving & Algorithm Mastery",
    category: "Full-Stack",
    badge: "Active Coding Journey",
    description: "A comprehensive problem-solving repository documenting Udit's ongoing journey mastering Data Structures and Algorithms using Java - spanning Arrays, Linked Lists, Trees, Sorting, and Dynamic Programming.",
    longDescription: "Udit is actively strengthening his computer science fundamentals through rigorous Java DSA practice. This repository showcases optimized solutions to competitive programming challenges, algorithmic patterns (Two Pointers, Sliding Window, Recursion, DFS/BFS), and thorough time/space complexity documentation.",
    tags: ["Java", "DSA", "Algorithms", "Data Structures", "OOP", "Problem Solving"],
    features: [
      "Extensive Java implementations of fundamental data structures from scratch",
      "Algorithmic solutions categorized by technique (Searching, Sorting, Graph traversal)",
      "Detailed time and space complexity annotations for every algorithmic pattern",
      "Continuous daily practice building strong foundational problem-solving capability"
    ],
    github: "https://github.com/uditnarayan2672007",
    demo: "#skills",
    featured: false,
    accentColor: "purple"
  },
  {
    id: "cyber-security-lab",
    image: "/projects/cyber_defense.jpg",
    title: "Cyber Security & Ethical Hacking Practical Lab",
    category: "Cybersecurity",
    badge: "Coursework & Research",
    description: "Hands-on security testing toolkit, network reconnaissance scripts, and vulnerability assessment notes built while pursuing specialized Cyber Security and Ethical Hacking courses.",
    longDescription: "Developed as part of Udit's dedicated coursework in Ethical Hacking. Covers network packet sniffing, port enumeration with Nmap, Wireshark traffic inspection, OWASP Top 10 vulnerability remediation, and defense mechanisms against unauthorized access.",
    tags: ["Python", "Nmap", "Wireshark", "Kali Linux", "OWASP Top 10", "Network Security"],
    features: [
      "Automated Python reconnaissance and port inspection scripts",
      "Wireshark packet analysis workflows for HTTP, DNS, and TCP handshake inspection",
      "Documentation on mitigating common web flaws (SQL Injection, XSS, CSRF)",
      "Practical exercises in virtualized sandbox environments (Kali Linux)"
    ],
    github: "https://github.com/uditnarayan2672007",
    demo: "#security-lab",
    featured: true,
    accentColor: "rose"
  },
  {
    id: "ai-ml-exploratory",
    image: "/projects/ai_bi_dashboard.jpg",
    title: "AI & Machine Learning Exploratory Playground",
    category: "Tools & Scripts",
    badge: "Future Tech Journey",
    description: "An exploratory project suite diving into Artificial Intelligence and Machine Learning foundations - focusing on Python data analysis, predictive models, and future intelligent applications.",
    longDescription: "Demonstrates Udit's forward-looking tech journey into AI & ML. Contains data preprocessing scripts, exploratory data analysis on real-world datasets, and fundamental machine learning algorithms designed to power future smart governance and automated decision systems.",
    tags: ["Python", "AI / ML", "Data Analysis", "NumPy", "Future Tech", "Predictive Models"],
    features: [
      "Exploratory data analysis (EDA) pipelines using Python",
      "Implementation of foundational supervised learning and predictive workflows",
      "Integration concepts combining AI algorithms with smart governance systems",
      "Continual roadmap exploring deep learning and computer vision"
    ],
    github: "https://github.com/uditnarayan2672007",
    demo: "#about",
    featured: false,
    accentColor: "emerald"
  }
];

export const ctfWriteups = [
  {
    title: "Smart Governance for Coal Mines - Hackathon Build",
    platform: "Hackathon Showcase",
    difficulty: "Industry Impact",
    category: "Smart Governance & Safety",
    summary: "Built a multi-tier monitoring solution for coal mine hazards, worker safety compliance, and environmental telemetry.",
    tools: ["Java", "Python", "SQL", "Sensor Telemetry"],
    date: "2024"
  },
  {
    title: "MaatiKatha Platform Architecture & Development",
    platform: "Flagship Innovation",
    difficulty: "Socioeconomic Impact",
    category: "Heritage & Web Platform",
    summary: "Designed and developed MaatiKatha to bridge regional soil craftsmanship and artisan livelihood with digital storytelling.",
    tools: ["HTML5", "CSS3", "JavaScript", "SQL"],
    date: "2024"
  },
  {
    title: "Ethical Hacking Coursework - Network Reconnaissance & Audit",
    platform: "Cyber Security Course",
    difficulty: "Core Practical",
    category: "Network Defense",
    summary: "Hands-on network port scanning, vulnerability discovery, Wireshark packet capture, and security hardening experiments.",
    tools: ["Nmap", "Wireshark", "Kali Linux", "Bash"],
    date: "2024"
  },
  {
    title: "Java DSA Competitive Problem Solving Milestones",
    platform: "DSA Journey",
    difficulty: "Algorithmic Focus",
    category: "Data Structures",
    summary: "Solving core algorithmic patterns in Java, analyzing Big-O complexities, and implementing robust data structures.",
    tools: ["Java", "VS Code / IntelliJ", "Problem Solving"],
    date: "2023 - Present"
  }
];

export const certificationsAndEducation = [
  {
    title: "B.Tech in Computer Science & Engineering (2nd Year)",
    institution: "JIS College Of Engineering, Kalyani",
    period: "2023 - 2027 (Currently in 2nd Year)",
    type: "Degree & College",
    details: "Pursuing second year of Computer Science & Engineering. Strengthening core CS fundamentals, Data Structures & Algorithms via Java, Database Management (SQL), and Operating Systems.",
    highlight: "JIS College of Engineering, Kalyani | Active Tech Enthusiast & Innovator"
  },
  {
    title: "Cyber Security & Ethical Hacking Coursework",
    institution: "Professional Cybersecurity Learning Track",
    period: "2024 - Present (Currently Pursuing)",
    type: "Coursework / Specialization",
    details: "Currently pursuing dedicated training in Ethical Hacking, offensive/defensive methodologies, network vulnerability scanning, packet analysis, and OWASP web security practices.",
    highlight: "Hands-on practical training in Kali Linux & Security Auditing"
  },
  {
    title: "Multiple Hackathons & Tech Competitions",
    institution: "Inter-College & State Hackathons",
    period: "2023 - Present",
    type: "Hackathon Competitions",
    details: "Participated in several hackathons, collaborating in high-pressure team sprints to build innovative solutions like the 'Smart Governance Monitoring System for Coal Mines' and 'MaatiKatha'.",
    highlight: "Rich practical experience in rapid software architecture & teamwork"
  },
  {
    title: "AI & Machine Learning Future Tech Journey",
    institution: "Self-Driven Emerging Tech Track",
    period: "2024 - Present (Active Learning)",
    type: "Emerging Technology",
    details: "Actively studying foundational AI and Machine Learning principles in Python to integrate intelligent automation into future projects and smart governance applications.",
    highlight: "Expanding skill set toward intelligent software systems"
  }
];

