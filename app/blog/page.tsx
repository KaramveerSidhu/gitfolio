import styles from "./Blog.module.scss";
import { BLOGS } from "@data";
import Link from "@components/shared/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      {BLOGS.map((blog) => {
        return (
          <div key={blog.title} className={styles.blog}>
            <div className={styles.title}>
              <h2>{blog.title}</h2>
              <Link url={blog.url} />
            </div>
            <div className={styles.description}> {blog.description} </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
