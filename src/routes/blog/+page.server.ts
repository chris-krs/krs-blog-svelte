import type { PageServerLoad } from './$types';
import _path from 'path';

export const load: PageServerLoad = () => {
    const paths = import.meta.glob<{
        metadata: any;
        default: any;
    }>("$src/my-blog-posts/posts/*.md", { eager: true });
    const posts: { metadata: any; slug: string }[] = [];
    for (const path in paths) {
        const slug = _path.parse(path).name;
        const post = {
            metadata: paths[path].metadata,
            slug
        }
        posts.push(post)
    }
    console.log(posts)
    return {
        posts
    };
};