import { Project } from "./Project";

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="mt-40">
        <h2 className="mb-6 text-xs uppercase tracking-widest text-gray-600">
          Selected Work
        </h2>
        <div className="mx-auto max-w-6xl px-6">
          <Project />
          <Project flip />
        </div>
      </section>
    </div>
  );
}