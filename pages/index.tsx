import Head from "next/head";
import styles from "styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <p>Keitumetse Modipa</p>
        </div>
        <div>
          <h1> Software Engineer</h1>
        </div>
        <a className="button">VIEW MY PROJECTS</a>
      </main>
    </div>
  );
}
