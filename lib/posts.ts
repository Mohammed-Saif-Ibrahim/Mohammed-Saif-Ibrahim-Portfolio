export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readingTime: string;
}

// No posts yet — drop entries in here when you're ready to publish.
// The /blog index and /blog/[slug] routes already render from this array,
// so adding a post here is all that's needed to make it live.
export const posts: Post[] = [];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
