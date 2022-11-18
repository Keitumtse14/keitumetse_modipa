import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <p>Keitumetse Modipa</p>
        <h1> Software Engineer</h1>
        <a className="button">VIEW MY PROJECTS</a>
      </section>

      <section className="projects">
        <h2>PROJECTS</h2>
        <div className="projects-container">Projects div</div>
      </section>
    </div>
  );
}
