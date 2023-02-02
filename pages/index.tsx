import Head from "next/head";
import Image from "next/image";
import DSA_App from "public/Data-structures-App-Image.png";
import Eskom_App from "public/Eskom-App-Image.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="">
        <h1>Keitumetse Modipa</h1>
      </section>

      <section className="projects">
        <h2 >PROJECTS</h2>
        <div className="projects-container">
          <a href="https://dsa-app-tau.vercel.app/" target="_blank" rel="noreferrer noopener"><Image src={DSA_App} alt="" width="250" height="250" /></a>
          <a><Image src={Eskom_App} alt="" width="250" height="250" /></a>
        </div>
      </section>
    </div>
  );
}
