"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Java Times Cafe",
    description: "Ultimate destination for premium coffee, tea, chocolate, and bakery delights worldwide.",
    image: "/images/projects/javatimescaffe.png",
    tag: ["All", "Web"],
    gitUrl: "https://javatimescaffe.com/en",
    previewUrl: "https://javatimescaffe.com/en",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Admin Dashboard build with React and TypeScript. Helps the Admins to navigate all the stats.",
    image: "/images/projects/adminDashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arsalanlal414/admin-dashboard",
    previewUrl: "https://stats-dashboard.surge.sh/",
  },
  {
    id: 3,
    title: "Nexcent Landing Page",
    description: "Nexcent Landing Page build with React. I have created a responsive User Interface to help the user navigate easily",
    image: "/images/projects/nexcent_landing_page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arsalanlal414/Nexcent_LandingPage",
    previewUrl: "http://nexcentt.surge.sh/",
  },
  {
    id: 4,
    title: "Receipe Master",
    description: "A React-based app integrating Food API for effortless discovery of diverse, global recipes.",
    image: "/images/projects/recipeApp.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "https://github.com/arsalanlal414/recipe_master",
    previewUrl: "http://recipemasters.surge.sh",
  },
  {
    id: 5,
    title: "Chat App",
    description: "Desktop version of chat app created with react and firebase. also integrated the user authentication.",
    image: "/images/projects/smooty-chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arsalanlal414/Firebase-Chat-App",
    previewUrl: "http://smootychatapp.surge.sh/",
  },
  {
    id: 6,
    title: "React Tabs switch",
    description: "React Tabs Switch: A simple, customizable React component for smooth tabbed navigation.",
    image: "/images/projects/Tabs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arsalanlal414/chai-aur-react",
    previewUrl: "http://tabs-06.surge.sh",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
