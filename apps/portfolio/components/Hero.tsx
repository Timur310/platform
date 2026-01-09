export default function Hero() {
  const links = [
    { label: "GitHub", href: "https://github.com/Timur310" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ádám-timur-y-7885ba119/" },
    { label: "Email", href: "mailto:yilmaz.adamt@gmail.com" },
  ];

  return (
    <div className="mx-auto max-w-2xl pt-32">
      <header className="space-y-6">
        <div className="w-24 h-24 rounded-full bg-gray-800 transition-transform duration-300 ease-out hover:scale-[1.02]" />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight leading-[1.1]">
            Yilmaz Ádám Timur
          </h1>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Software Engineer
          </p>
        </div>

        <p className="max-w-xl text-gray-400 leading-[1.7]">
          I build thoughtful, scalable web applications with a focus on
          clarity, performance, and user experience.
        </p>
      </header>

      <section className="mb-20">
        <nav className="mt-12 flex gap-8 text-sm">
          {links.map((link) => (
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative text-gray-400 hover:text-white transition-colors duration-200 ease-out"
              key={link.label}
            >
              {link.label}
              <span
                className="pointer-events-none absolute left-0 -bottom-1 h-px w-full scale-x-0 origin-left bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>
      </section>
    </div>
  );
}