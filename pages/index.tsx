import Head from "next/head";
import styles from "/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <>
          <p>Keitumetse Modipa</p>
        </>
        <>
          <h1> Software Engineer</h1>
        </>
        <a className="button">VIEW MY PROJECTS</a>

        <div className="projects">
          <h2>PROJECTS</h2>
          <div>Projects div</div>
        </div>
      </section>
    </div>
  );
}
