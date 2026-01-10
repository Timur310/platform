import { Project } from "./Project";

type GitProject = {
  name: string;
  description: string;
  url: string;
  topics: string[];
  image: string;
};

export default function Projects() {

  const gitProjects: GitProject[] = [{
    name: "SoftJS",
    description: "A TypeScript-based 3D software rendering engine built from scratch, featuring a custom OBJ file loader, wireframe rendering, triangle rasterization, and low-level line-drawing algorithms. The project explores the fundamentals of 3D graphics and rendering pipelines directly in the browser without external graphics libraries.",
    url: "https://github.com/Timur310/SoftJS",
    topics: [
      "TypeScript",
      "3D Graphics",
      "Software Renderer",
      "OBJ Loader",
      "Computer Graphics",
      "Rendering Engine"
    ],
    image: "/softjs.png"
  },
  {
    name: "SteamyQuizz",
    description: "A multiplayer quiz game that uses the Steam API to fetch real Steam app data and lets players compete in real time. Built with React, Socket.IO, and a Bun-based backend with Docker for easy local development and live gameplay.",
    url: "https://github.com/Timur310/SteamyQuizz",
    topics: [
      "React",
      "TypeScript",
      "WebSockets",
      "Socket.IO",
      "Steam API",
      "Multiplayer",
      "Quiz Game"
    ],
    image: "/steamyquiz.png"
  }]

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="mt-40">
        <h2 className="mb-6 text-xs uppercase tracking-widest text-gray-600">
          Selected Work
        </h2>
        <div className="mx-auto max-w-6xl px-6">
          {gitProjects.map((p, index) => {
            const odd = index % 2 === 1;
            return <Project
              key={p.name}
              flip={odd}
              projectTitle={p.name}
              projectDescription={p.description}
              projectUrl={p.url}
              projectTopics={p.topics}
              projectImage={p.image}
              counter={index + 1}
            />
          })}
        </div>
      </section>
    </div>
  );
}