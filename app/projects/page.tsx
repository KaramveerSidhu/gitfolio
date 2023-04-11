"use client";

import Tabs from "./tabs";
import styles from "./Projects.module.scss";
import { useState } from "react";
import { PROJECTS_CONTRIBUTED, PROJECTS_PERSONAL } from "@data";
import ProjectsDisplay from "./projects-display";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("contributed");
  const isPersonalActive = activeTab === "personal";

  return (
    <div className={styles.projects}>
      <Tabs activeTab={activeTab} onChange={setActiveTab} />
      <ProjectsDisplay
        projects={isPersonalActive ? PROJECTS_PERSONAL : PROJECTS_CONTRIBUTED}
      />
    </div>
  );
};

export default Projects;
