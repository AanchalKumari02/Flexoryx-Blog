export const metadata = {
  title: "About | Flexoryx Blog",
  description: "About the Flexoryx Blog.",
};

export default function AboutPage() {
  return (
    <article className="prose dark:prose-invert lg:prose-xl">
      <h1>About This Blog</h1>
      <p>
        This is a sample blog application built with Next.js and Tailwind CSS.
        The content is written in Markdown and rendered statically.
      </p>
    </article>
  );
}