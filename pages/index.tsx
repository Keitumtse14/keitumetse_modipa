import Head from "next/head";
import Image from "next/image";
import eskomApp from "public/derrick-brooks-eUTEPwq81C4-unsplash.jpg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <p>Keitumetse Modipa</p>
        <h1> Software Engineer</h1>
        <a className="button">VIEW MY PROJECTS</a>
      </section>

      <section className="projects">
        <h2>PROJECTS</h2>
        <div className="projects-container">
          <Image src={eskomApp} alt="" width="250" height="250" />
          <Image src={eskomApp} alt="" width="250" height="250" />
          <Image src={eskomApp} alt="" width="250" height="250" />
          <Image src={eskomApp} alt="" width="250" height="250" />
        </div>
      </section>
    </div>
  );
}
