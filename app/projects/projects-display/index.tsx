import Image from "next/image";
import styles from "./ProjectsDisplay.module.scss";
import { marked } from "marked";
import parseHTML from "html-react-parser";
import Icon from "@/app/components/ui/Icon";
import Link from "next/link";

type projectType = {
  id: string;
  title: string;
  description?: string;
  content?: string;
  sourceCodeURL?: string;
  appURL?: string;
  imgURL: string;
  skills?: Array<string>;
};

type propTypes = {
  projects: Array<projectType>;
};

const ProjectsDisplay = (props: propTypes) => {
  const { projects } = props;

  return (
    <div>
      {projects?.map((project) => {
        const projectContent = project.content
          ? parseHTML(marked.parse(project.content))
          : "";

        return (
          <div key={project.id} className={styles.project}>
            <div className={styles.projectDetailsContainer}>
              <div className={styles.projectHeader}>
                <h2>{project.title}</h2>
                <div className={styles.urls}>
                  {project.sourceCodeURL && (
                    <Link
                      href={project.sourceCodeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon url="pr-github" title="Source Code" />
                    </Link>
                  )}
                  {project.appURL && (
                    <Link
                      href={project.appURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon url="external" title="Hosted App" />
                    </Link>
                  )}
                </div>
              </div>

              <div className={styles.projectContent}>
                <div>{project.description}</div>

                <div className={styles.projectContentList}>
                  {projectContent}
                </div>
              </div>
            </div>
            <div className={styles.projectImg}>
              <Image src={project.imgURL} fill alt={project.imgURL} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsDisplay;
