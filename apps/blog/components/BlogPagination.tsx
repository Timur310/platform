export function BlogPagination({
    hasPrevious = false,
    hasNext = true,
}: {
    hasPrevious?: boolean
    hasNext?: boolean
}) {
    return (
        <nav className="mt-24 flex items-center justify-between text-sm text-gray-500">
            {hasPrevious ? (
                <a href="#" className="hover:text-gray-300 transition-colors">
                    ← Newer posts
                </a>
            ) : (
                <span />
            )}

            {hasNext && (
                <a href="#" className="hover:text-gray-300 transition-colors">
                    Older posts →
                </a>
            )}
        </nav>
    )
}
