"use client";

import Tabs from "./tabs";
import styles from "./Projects.module.scss";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("contributed");
  return (
    <div className={styles.projects}>
      <Tabs activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default Projects;
