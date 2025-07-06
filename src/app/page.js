import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">FlexoryxBlog</h1>
      <ul className="space-y-6">
        {allPostsData.map(({ slug, date, title, description }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="group">
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{description}</p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">{date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
