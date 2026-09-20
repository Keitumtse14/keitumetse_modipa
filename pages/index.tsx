import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      name: "Data Structures ",
      href: "https://dsa-app-tau.vercel.app/",
      src: "/data-structures.jpg",
      alt: "Thumbnail of Data Structures App",
    },
    {
      name: "Blackouts Tracker",
      href: "https://rolling-blackouts-app-git-demo-keitumtse14s-projects.vercel.app/",
      src: "/rolling-blackouts.jpg",
      alt: "Thumbnail of Rolling Blackouts App",
    },
    {
      name: "Weather App",
      href: "https://weather-app-black-seven-30.vercel.app/",
      src: "/weather-app.jpg",
      alt: "Thumbnail of Weather App",
    },
    {
      name: "Chat App",
      href: "https://nexus-chat-brown-iota.vercel.app/",
      src: "/nexus-chat.jpg",
      alt: "Thumbnail of chat App",
    }
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
            href="mailto:keitumetse.modipa.dev@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
          >
            keitumetse.modipa.dev@gmail.com
          </a>
          <div className="line"></div>
        </div>

        <div className="name-role">
          <label htmlFor="email-address" className="role">Front-End Web Developer</label>
          <h1>Keitumetse Modipa</h1>
        </div>

        {/* Smooth scroll button */}
        <a href="#projects" className="view-projects">
          View My Projects
        </a>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/keitumetse-modipa-ba11673bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={40}
              height={40}
              src="/linkedin-svgrepo-com 1.svg"
              alt="LinkedIn"
              className="svg-size"
            />
          </a>

          <a
            href="https://github.com/Keitumtse14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={40}
              height={40}
              src="/github-outline-fill-svgrepo-com 1.svg"
              alt="GitHub"
              className="svg-size"
            />
          </a>

          <div className="socials-line"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-container">
          <header className="projects-header">
            <h2>Projects</h2>
            <div className="projects-socials">
              <a
                href="https://www.linkedin.com/in/keitumetse-modipa-ba11673bb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"

              >
                <Image
                  width={40}
                  height={40}
                  src="/linkedin-svgrepo-com 1.svg"
                  alt="LinkedIn"
                  className="svg-size"
                />
              </a>
              <a
                href="https://github.com/Keitumtse14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={40}
                  height={40}
                  src="/github-outline-fill-svgrepo-com 1.svg"
                  alt="GitHub"
                  className="svg-size"
                />
              </a>

              <div className="projects-socials-line"></div>
            </div>
          </header>

          <div className="projects-list">
            {projects.map((project) => (
              <div key={project.name}>
                <p className="project-tooltip">{project.name}</p>
                {project.name === "Weather App (in progress)" ? (
                  <span style={{ cursor: "not-allowed", display: "inline-block" }}>
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={250}
                      height={250}
                    />
                  </span>
                ) : (
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
                )}
              </div>

            ))}
          </div>
          <div className="email-section-projects">
            <div className="line"></div>
            <a
              className="email-link-projects"
              href="mailto:keitumetse.modipa.dev@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
            >
              keitumetse.modipa.dev@gmail.com
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
