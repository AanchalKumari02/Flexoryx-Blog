import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }) {
  try {
    const postData = await getPostData(params.slug);
    return {
      title: `${postData.title} | Flexoryx Blog`,
      description: postData.description,
    };
  } catch (error) {
    return {
      title: "Post not found",
    };
  }
}

export default async function Post({ params }) {
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert lg:prose-xl">
      <h1>{postData.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-base">{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}