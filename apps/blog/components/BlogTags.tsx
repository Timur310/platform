export function BlogTags({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-20">
            {tags.map(tag => (
                <span
                    key={tag}
                    className="
            text-xs
            text-gray-500
            hover:text-gray-300
            transition-colors
            cursor-pointer
          "
                >
                    #{tag}
                </span>
            ))}
        </div>
    )
}
