import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

function HomepageHeader(): ReactNode {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hi, I&apos;m Leah!
        </Heading>
        <p className="hero__subtitle">
          I'm a software engineer with a huge love for learning and exploring new technologies.
          I have experience building web applications, libraries, and open source projects.
          I have worked with and created micro‑frontend systems, event‑driven architectures, and love making 
          developer experience better and more enjoyable. When I&apos;m not designing systems,
          I write about engineering, tooling, and practical ways to build better software.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about-me">
            About Me
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/blog">
            Read My Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;