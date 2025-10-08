import dayjs from "dayjs";
import _path from "path";

export type PostMetaData = {
    title: string;
    pubDate: string;
    tags?: string[];
    [k: string]: any;
}
export type Posts = { metadata: PostMetaData; slug: string }[]

export const getAllPosts = () => {
    const paths = import.meta.glob<{ metadata: PostMetaData }>("$src/my-blog-posts/posts/*.md", { eager: true });
    const posts: { metadata: PostMetaData; slug: string }[] = [];
    for (const path in paths) {
        const slug = _path.parse(path).name;
        const post = {
            metadata: paths[path].metadata,
            slug
        }
        posts.push(post)
    }
    return posts.sort((a, b) => {
        return dayjs(b.metadata.pubDate).valueOf() - dayjs(a.metadata.pubDate).valueOf();
    });
}

export const getLatestPosts = (days: number = 7) => {
    return getAllPosts().slice(0, days);
}


export const getAllTags = () => {
    const tags: string[] = [];
    getAllPosts().forEach((post) => {
        if (post.metadata.tags && post.metadata.tags.length > 0) {
            post.metadata.tags.forEach((tag) => {
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            })
        }
    })
    return tags;
}

export const getAllCategories = () => {
    const categories: string[] = [];
    getAllPosts().forEach((post) => {
        if (post.metadata.category) {
            categories.push(post.metadata.category);
        }
    })
    return categories;
}