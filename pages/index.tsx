import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      name: "Data Structures App",
      href: "https://dsa-app-tau.vercel.app/",
      src: "/Data-structures-App-Image.png",
      alt: "Thumbnail of Data Structures App",
    },
    {
      name: "Rolling Blackouts App",
      href: "https://github.com/Keitumtse14/proxy",
      src: "/Eskom-App-Image.png",
      alt: "Thumbnail of Rolling Blackouts App",
    },
    {
      name: "Weather App (in progress)",
      href: "#",
      src: "/Weather-App.png",
      alt: "Thumbnail of Weather App",
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>Keitumetse Modipa</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="email-section">
          <a
            className="email-link"
            href="mailto:modipakeitumetse14@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
          >
            modipakeitumetse14@gmail.com
          </a>
          <div className="line"></div>
        </div>

        <div className="name-role">
          <label className="role">Front-End Web Developer</label>
          <h1>Keitumetse Modipa</h1>
        </div>

        {/* Smooth scroll button */}
        <a href="#projects" className="view-projects">
          View My Projects
        </a>

        <div className="socials">
          <Image
            width={40}
            height={40}
            src="/linkedin-svgrepo-com 1.svg"
            alt="LinkedIn"
            className="svg-size"
          />
          <Image
            width={40}
            height={40}
            src="/github-outline-fill-svgrepo-com 1.svg"
            alt="GitHub"
            className="svg-size"
          />
          <Image
            width={40}
            height={40}
            src="/facebook.svg"
            alt="Facebook"
            className="svg-size"
          />
          <div className="socials-line"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <header className="projects-header"><h2>Projects</h2><div className="projects-socials">
            <Image
              width={40}
              height={40}
              src="/linkedin-svgrepo-com 1.svg"
              alt="LinkedIn"
              className="svg-size"
            />
            <Image
              width={40}
              height={40}
              src="/github-outline-fill-svgrepo-com 1.svg"
              alt="GitHub"
              className="svg-size"
            />
            <Image
              width={40}
              height={40}
              src="/facebook.svg"
              alt="Facebook"
              className="svg-size"
            />
            <div className="projects-socials-line"></div>
          </div></header>

          <div className="projects-list">
            {projects.map((project) => (
              <div key={project.name}>
                <p className="project-tooltip">{project.name}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={250}
                    height={250}
                  />
                </a>
              </div>

            ))}
            <div className="email-section-projects">
              <div className="line"></div>
              <a
                className="email-link-projects"
                href="mailto:modipakeitumetse14@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
              >
                modipakeitumetse14@gmail.com
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
