import Head from "next/head";
import Image from "next/image";
import DSA_App from "public/Data-structures-App-Image.png";
import Eskom_App from "public/Eskom-App-Image.png";
import Weather_App from "public/Weather_App.png";

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
          <div>
            <div className="Data-structures-tooltip">Data structures app</div>
            <a href="https://dsa-app-tau.vercel.app/" target="_blank" rel="noreferrer noopener"> <Image src={DSA_App} alt="Thumbnail of DSA-App" width="250" height="250" /></a>
          </div>
          <div>
            <div className="Rolling-blackouts-tooltip ">Rolling blackouts app</div>
            <a href="https://github.com/Keitumtse14/proxy" target="_blank" rel="noreferrer noopener"> <Image src={Eskom_App} alt="Thumbnail of Rolling blackouts app" width="250" height="250" /></a>
          </div>
          <div>
            <div className=" ">Weather app (in progress) </div>
            <a href="#" target="_blank" rel="noreferrer noopener"> <Image src={Weather_App} alt="Thumbnail of Weather App" width="250" height="250" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
