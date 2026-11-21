import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Strict TypeScript Contracts",
    description: (
      <>
        Every public API is documented with validated TSDoc, explicit release
        tags, and type-checked runnable examples.
      </>
    ),
  },
  {
    title: "Modular Monorepo",
    description: (
      <>
        Built with Rush, pnpm, and Heft rigs for deterministic builds, isolated
        testing, and zero-overhead tree-shakeable packages.
      </>
    ),
  },
  {
    title: "Custom API Documenter Plugin",
    description: (
      <>
        Powered by <code>@positron/api-documenter</code> to transform API
        Extractor models directly into Docusaurus-ready Markdown pages.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem): ReactNode {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
