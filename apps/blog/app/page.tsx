import { BlogFooter } from "@/components/BlogFooter"
import { BlogHeader } from "@/components/BlogHeader"
import BlogLayout from "@/components/BlogLayout"
import { BlogPagination } from "@/components/BlogPagination"
import { BlogPostCard } from "@/components/BlogPostCard"
import { BlogSearch } from "@/components/BlogSearch"
import { BlogTags } from "@/components/BlogTags"

export default function Home() {
  return (
    <BlogLayout>
      <div aria-hidden className="noise" />
      <div className="relative z-10 fade-up">

        <BlogHeader />

        <BlogSearch />

        <BlogTags
          tags={[
            "frontend",
            "architecture",
            "design",
            "performance",
            "career",
          ]}
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