export function BlogFooter() {
    return (
    <div className="mx-auto max-w-2xl">
      <footer className="relative z-10 mt-32 flex flex-col items-center text-center">
        {/* subtle divider */}
        <div className="my-4 w-full h-px bg-gray-800" />

        {/* quote */}
        <p className="max-w-xl text-gray-400 text-sm leading-relaxed italic transition-colors duration-200 ease-out hover:text-gray-300">
          I can build complex things, I just don’t need to show off poorly.
        </p>

        {/* subtle link below quote */}
        {/* <a
          href="https://yourblog.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-xs text-gray-500 hover:text-gray-300 hover:underline transition-colors duration-200 ease-out"
        >
          Explore my blog to read about my journey with technology and the projects I’ve built.
        </a> */}

        {/* optional small footer note */}
        <p className="mt-6 text-xs text-gray-600">
          © {new Date().getFullYear()} Yilmaz Ádám Timur
        </p>
      </footer>
    </div>
    )
}