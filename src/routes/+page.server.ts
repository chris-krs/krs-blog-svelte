import { getAllCategories, getAllTags, getLatestPosts } from '$src/lib/utils/post';
import type { PageServerLoad } from './$types';
import _path from 'path';

export const load: PageServerLoad = () => {
    const latestPosts = getLatestPosts();
    const allTags = getAllTags();
    const allCategories = getAllCategories();
    return {
        latestPosts,
        allTags,
        allCategories
    };
};