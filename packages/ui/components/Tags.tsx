type Props = {
  tags: string[]
  cls?: string
}

export function Tags({ tags, cls }: Props) {
    return (
        <div className={`flex flex-wrap ${cls}`}>
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
