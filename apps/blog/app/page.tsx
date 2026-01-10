import { BlogFooter } from "@/components/BlogFooter"
import { BlogHeader } from "@/components/BlogHeader"
import BlogLayout from "@/components/BlogLayout"
import { BlogPagination } from "@/components/BlogPagination"
import { BlogPostCard } from "@/components/BlogPostCard"
import { BlogSearch } from "@/components/BlogSearch"
import { Tags } from "@repo/ui"

export default function Home() {
  return (
    <BlogLayout>
      <div aria-hidden className="noise" />
      <div className="relative z-10 fade-up">

        <BlogHeader />

        <BlogSearch />

        <Tags
          tags={[
            "frontend",
            "architecture",
            "design",
            "performance",
            "career",
          ]}
          cls="mb-20 gap-x-4 gap-y-2 hover:cursor-pointer"
        />

        <section>
          <BlogPostCard
            date="Jan 2026"
            title="Designing frontend systems that age well"
            excerpt="Thoughts on why restraint, clarity, and strong foundations matter more than trends."
          />

          <BlogPostCard
            date="Dec 2025"
            title="Why I avoid overengineering early"
            excerpt="A practical look at complexity, trade-offs, and long-term maintainability."
          />
        </section>

        <BlogPagination hasPrevious={false} hasNext />

        <BlogFooter />
      </div>

    </BlogLayout>
  )
}