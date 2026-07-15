import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { profile } from "@/config/profile.js";

export async function GET(context) {
  const posts = await getCollection("post", ({ data }) => !data.draft);
  return rss({
    title: profile.title,
    description: profile.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.id}`,
    })),
  });
}
