import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Narendra</h1>
        <p className={styles.description}>
          I'm a fresher. Currently pursuing full-stack development using React
          and NodeJS. Reach out if you'd like to learn more!
        </p>
        <a
          href="https://drive.google.com/file/d/1m4Q_-zdFdCjLeN8XmEJFUw2Ix06-gXdl/view?usp=sharing"
          target="_blank"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
