import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // pngPath holds the static path returned by webpack/require for image files
  pngPath: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Me',
    pngPath: require('@site/static/img/about-me.png').default,
    description: (
      <>
        Learn more about my background, interests, and the projects I&apos;m
        passionate about.{' '}
        <Link to="/docs/about-me">Read more →</Link>
      </>
    ),
  },
  {
    title: 'Projects',
    pngPath: require('@site/static/img/projects.png').default,
    description: (
      <>
        Explore some of the apps, libraries, and open source work I&apos;ve
        built. <Link to="/docs/projects">See the list</Link>
      </>
    ),
  },
  {
    title: 'Blog',
    pngPath: require('@site/static/img/blog.png').default,
    description: (
      <>
        Read my thoughts on development, productivity, and the occasional
        ramble. <Link to="/blog">Go to blog</Link>
      </>
    ),
  },
  {
    title: 'Contact',
    pngPath: require('@site/static/img/contact.png').default,
    description: (
      <>
        Feel free to <a href="mailto:leah@example.com">send me an email</a> or
        connect on <a href="https://twitter.com/leah">Twitter</a>.
      </>
    ),
  },
];

function Feature({title, pngPath, description}: FeatureItem) {
  return (
    // use col--3 so the grid supports four items side-by-side
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img
          src={pngPath}
          alt={title}
          className={styles.featurePng}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading className={styles.featureTitle} as="h3">{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
