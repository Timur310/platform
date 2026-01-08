export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen bg-[#0b0b0b] text-white antialiased px-6">
            <div className="mx-auto max-w-2xl py-32">
                {children}
            </div>
        </main>
    )
}