import { ExperienceItem } from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl">
      <section className="mt-16">
        <h2 className="mb-6 text-xs uppercase tracking-widest text-gray-600">
          Experience
        </h2>
      </section>

      <section>
        <ExperienceItem
          role="Software Engineer"
          company="Saltmine"
          period="2021 — Present"
          description="Rebuilt the platform UI with a modern, responsive design, improving usability and branding. Developed interactive 2D/3D features for a browser-based interior design app, enhancing architectural visualization. Expanded user design tools and improved real-time 3D rendering with ambient occlusion and custom GLSL shaders. Optimized GPU-accelerated effects using Three.js and WebGL. Contributed to DevOps with Docker, Jenkins, and AWS, streamlining CI/CD pipelines and scalable deployments."
        />
        <div className="my-20 h-px bg-gray-800" />
        <ExperienceItem
          role="Motion Graphic Artist"
          company="TEDxSzeged"
          period="Jul 2019 - Oct 2019"
          description="Created cohesive motion graphics for TEDx event videos, delivering high-quality animations under tight deadlines for public and online distribution."
        />
      </section>
    </div>
  );
}