import React from "react";
import "./Expertise.css";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
  title: "Backend & Database",
  skills: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Mongoose",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Cloudinary",
      icon: "https://cdn.simpleicons.org/cloudinary",
    },
    {
      name: "REST APIs",
      icon: "https://cdn.simpleicons.org/fastapi",
    },
  ],
},
  {
    title: "Design & UI/UX",
    skills: [
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Photoshop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
      },
    ],
  },
  {
  title: "AI & Integrations",
  skills: [
    {
      name: "Google Gemini",
      icon: "https://cdn.simpleicons.org/googlegemini",
    },
    {
  name: "OpenRouter API",
  icon: "https://openrouter.ai/favicon.ico",
},
    {
      name: "LLM Integration",
      icon: "https://cdn.simpleicons.org/googlegemini",
    },
  ],
},
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original-wordmark.svg",
      },
    ],
  },
  {
  title: "Development Practices",
  skills: [
    {
      name: "Agile Workflow",
      icon: "https://cdn.simpleicons.org/jira",
    },
    {
      name: "Responsive Design",
      icon: "https://cdn.simpleicons.org/tailwindcss",
    },
  ],
  },
];

const Expertise = () => {
  return (
    <section className="sobre-mi" id="servicios">
      <h2 className="heading">Skills</h2>

      <div className="container">
        {skillCategories.map((category, index) => (
          <div
            className="exp-block"
            key={category.title}
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
          >
            <h3 className="category-title">{category.title}</h3>

            <div className="exp-card-grid">
              {category.skills.map((skill) => (
                <div className="exp-skill-card" key={skill.name}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="exp-card-img"
                  />
                  <h4 className="exp-card-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Expertise);