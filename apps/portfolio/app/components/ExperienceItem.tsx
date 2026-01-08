export function ExperienceItem({
    role,
    company,
    period,
    description,
}: {
    role: string
    company: string
    period: string
    description: string
}) {
    return (
        <div className="grid grid-cols-12 gap-6 mb-20">
            {/* Meta */}
            <div className="col-span-12 md:col-span-4">
                <p className="text-sm text-gray-500">{period}</p>
                <h3 className="mt-2 text-lg font-medium">
                    {role}
                </h3>
                <p className="text-gray-400">
                    {company}
                </p>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-8">
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
        </div>
    )
}