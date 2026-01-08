export const Project = ({
  flip = false,
  projectTitle,
  projectDescription,
  counter = 1
}: {
  flip?: boolean,
  projectTitle?: string,
  projectDescription?: string,
  counter?: number
}) => {
  if (flip) {
    return (
      <div className="grid grid-cols-12 gap-6 items-center mb-20 md:mb-32">
        {/* Text */}
        <div className="col-span-12 md:col-span-5 md:col-start-2 px-4 sm:px-0">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 md:mb-3">
            {counter.toString().padStart(2, '0')}
          </p>
          <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
            {projectTitle || 'Project Name'}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4 md:mb-6">
            {projectDescription || 'Describe impact, constraints, and why this project matters. Avoid buzzwords. Be specific.'}
          </p>

          <a
            href="#"
            className="group relative inline-block text-sm text-gray-400 hover:text-white transition-colors duration-200 ease-out"
          >
            View project
            <span className="absolute left-0 -bottom-1 h-px w-full scale-x-0 origin-left bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </div>

        {/* Visual */}
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div
            className="aspect-video rounded-xl bg-gray-900 transition-transform duration-500 ease-out md:hover:scale-[1.01]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-6 items-center mb-20 md:mb-32">
      {/* Visual */}
      <div className="col-span-12 md:col-span-7">
        <div
          className="aspect-video rounded-xl bg-gray-900 transition-transform duration-500 ease-out md:hover:scale-[1.01]"
        />
      </div>

      {/* Text */}
      <div className="col-span-12 md:col-span-5 md:pl-8 px-4 sm:px-0">
        <p className="text-xs uppercase tracking-widest text-gray-600 mb-2 md:mb-3">
          {counter.toString().padStart(2, '0')}
        </p>
        <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
          {projectTitle || 'Project Name'}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4 md:mb-6">
          {projectDescription || 'A short description explaining the problem you solved, your role, and what makes this project technically or conceptually interesting.'}
        </p>

        <a
          href="#"
          className="group relative inline-block text-sm text-gray-400 hover:text-white transition-colors duration-200 ease-out"
        >
          View project
          <span className="absolute left-0 -bottom-1 h-px w-full scale-x-0 origin-left bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </a>
      </div>
    </div>
  );
};