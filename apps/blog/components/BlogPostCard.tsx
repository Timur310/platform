export function BlogPostCard({
    title,
    excerpt,
    date,
}: {
    title: string
    excerpt: string
    date: string
}) {
    return (
        <article className="mb-20">
            <p className="text-xs text-gray-500 mb-2">
                {date}
            </p>

            <h2 className="text-xl font-medium mb-3 leading-snug">
                {title}
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-4">
                {excerpt}
            </p>

            <a
                href="#"
                className="group relative inline-block text-sm text-gray-400 hover:text-white transition-colors"
            >
                Read more
                <span
                    className="
            absolute
            left-0
            -bottom-1
            h-px
            w-full
            scale-x-0
            origin-left
            bg-white
            transition-transform
            duration-300
            ease-out
            group-hover:scale-x-100
          "
                />
            </a>
        </article>
    )
}
