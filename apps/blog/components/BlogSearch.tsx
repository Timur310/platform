export function BlogSearch() {
    return (
        <div className="relative mt-12 mb-4">
            <input
                type="text"
                placeholder="Search posts"
                className="
          w-full
          bg-transparent
          border-b border-gray-800
          pb-3
          text-sm
          text-gray-300
          placeholder-gray-600
          focus:outline-none
          focus:border-gray-500
          transition-colors
        "
            />
        </div>
    )
}
