import type { PageLoad } from './$types';
import _path from 'path';

export const load: PageLoad = async ({ params }) => {
    const slug = params.slug;
    const post = await import(`$src/my-blog-posts/posts/${slug}.md`);

    return {
        metadata: post.metadata,
        content: post.default
    }
};
