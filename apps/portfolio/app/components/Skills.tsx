export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Three.js",
    "React",
    "Tailwind CSS",
    "WebGL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <section>
        <h2 className="mb-6 text-xs uppercase tracking-widest text-gray-600">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-gray-500 hover:text-gray-200 transition-colors duration-200 ease-out cursor-default"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}