import Head from "next/head";
import styles from "../styles/global.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="styles">
        <h1>Testing</h1>
      </main>
    </div>
  );
}
