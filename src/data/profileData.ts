export const profileData = {
  name: "Miska Mynttinen",
  title: "Full Stack Web Software Engineer",
  bio: "Full Stack Web Software Engineer with an interest in systems, integrations, and innovation.",
  email: "miska.myntt@gmail.com",
  phone: "+358442726957",
  location: "Helsinki, Finland",
  github: "https://github.com/Miska-Mynttinen",
  linkedin: "https://www.linkedin.com/in/miska-mynttinen",

  education: [
    {
      institution: "Aalto University",
      location: "Espoo, Finland",
      degree: "Master of Science in Computer Science",
      focus: "Security and Cloud Computing"
    },
    {
      institution: "Aalto University",
      location: "Espoo, Finland",
      degree: "Bachelor of Electrical Engineering",
      focus: "Automation and Control Systems"
    }
  ],
  
  introduction: {
    headline: "Full Stack Web Software Engineer",
    subheadline: "Systems, integrations, and whatever seems interesting",
    description: "Expanding knowledge on software system design, architecture, and development through work and hobby projects.",
  },
  
  workExperience: [
    {
      id: 1,
      company: "ABB via Academic Work",
      position: "Software Engineer",
      duration: "April 2026 -> Present",
      description: "Developing web software and integrations for a Manufacturing Execution System (MES).",
      highlights: [
        "Designing, planning, and iterating modern web solutions to expand and improve the existing product family.",
        "Developing and integrating frontend and backend software for ABB's MES, including integrations with legacy systems.",
        "Utilizing AI tools in the development process and prototyping a AI/LLM integration with existing products."
      ],
      technologies: ["JavaScript", "TypeScript", "React", "LIT library", "Node.js", "REST APIs", "WebSockets", "Docker", "Podman"]
    },
    {
      id: 2,
      company: "ABB",
      position: "Web Development Trainee / Master's Thesis Worker",
      duration: "June 2023 -> March 2026",
      description: "Developed web applications, frameworks, and infrastructure for ABB's Manufacturing Execution System and did a master's thesis project.",
      highlights: [
        "Researched context-aware Large Language Model assistance in industrial systems using the Model Context Protocol (MCP).",
        "Developed web framework and system functionality in R&D with TypeScript/JavaScript, Node.js, and the Lit library.",
        "Contributed to underlying web frameworks and infrastructure as part of the R&D web development process."
      ],
      technologies: ["JavaScript", "TypeScript", "LIT library", "Node.js", "Podman", "Docker", "Oracle", "MCP"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "MCP LLM Database Context Integration Platform",
      category: "AI/LLM Integration",
      description: "A platform for integrating Large Language Models with databases through the Model Context Protocol (MCP).",
      longDescription: "An expansion of the master's thesis project, exploring context-aware LLM assistance and database access through custom MCP integrations.",
      technologies: ["MCP", "LLM integration", "TypeScript", "React", "Node.js", "Docker", "Podman", "SQL"],
      features: ["Custom MCP client and server", "Database context integration", "LLM-assisted SQL generation"],
      image: "",
      link: "",
      github: "https://github.com/Miska-Mynttinen/mcp-llm-database-context-integration"
    },
    /* {
      id: 2,
      title: "WebAssembly Game",
      category: "Web and Game Development",
      description: "A C++ game compiled to WebAssembly, playable in the browser or locally if compiled for desktop.",
      longDescription: "",
      technologies: ["WebAssembly", "C++", "JavaScript"],
      features: ["Game on your browser with WebAssembly", "Compile for multiple platforms"],
      image: "/images/game.jpg",
      link: "",
      github: "https://github.com/Miska-Mynttinen"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      category: "Dashboard",
      description: "Data visualization dashboard for data analysis and reporting.",
      longDescription: "Created an interactive dashboard for visualizing metrics and KPIs. Features extensive data visualization, real-time data updates, customizable filters, and exporting views",
      technologies: ["React", "ECharts", "Node.js", "PostgreSQL"],
      features: ["Data Visualization", "Real-time Analytics", "Custom Filters", "Export Reports"],
      image: "/images/analytics.jpg",
      link: "",
      github: "https://github.com/Miska-Mynttinen"
    },
    {
      id: 4,
      title: "Dashboard Generator with LLM suggestions",
      category: "Dashboard Generator",
      description: "A dashboard generator that uses LLM suggestions to create dashboards based on user input and data context.",
      longDescription: "",
      technologies: ["React", "ECharts", "Node.js", "PostgreSQL"],
      features: ["Dashboard Generation", "LLM Integration", "LLM Suggestions"],
      image: "/images/analytics.jpg",
      link: "",
      github: "https://github.com/Miska-Mynttinen"
    },
    {
      id: 5,
      title: "Tassukanta",
      category: "Pet health database",
      description: "A pet health database for tracking and managing pet health records, appointments, and medications.",
      longDescription: "A comprehensive pet health management system that allows pet owners to track their pets' health records, schedule appointments, and manage medications. The platform provides a user-friendly interface for pet owners and veterinarians to collaborate on pet health care.",
      technologies: [],
      features: ["Pet health record management", "Medication tracking", "Appointment scheduling", "Local Veterinarian finding", "Veterinarian collaboration"],
      image: "/images/analytics.jpg",
      link: ""
    } */
  ],

  skills: {
    languages: ["TypeScript/JavaScript", "Python", "HTML", "CSS", "SQL"],
    technologies: ["Node.js", "Docker", "React", "REST APIs", "AI/LLM integration", "Model Context Protocol (MCP)", "WebSockets", "Oracle database", "Podman", "Linux command line", "LIT library"]
  }
};

export type ProfileData = typeof profileData;
