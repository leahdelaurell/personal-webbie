import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  // we could still pick up siteConfig for dynamic data, but writing a
  // hardcoded greeting makes it clear this is your personal site.
  // const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hi, I&apos;m Leah!
        </Heading>
        <p className="hero__subtitle">
          I'm a software engineer with a huge love for learning and exploring new technologies.
          I have experience building web applications, libraries, and open source projects.
          When I&apos;m not coding, you can find me writing about development, productivity, 
          and the occasional ramble on my blog when I get myself to actual write it down 😉.
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

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
