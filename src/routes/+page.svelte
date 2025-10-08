<script lang="ts">
    import hoverSpringEffect from "$src/lib/actions/hover-spring-effect.svelte";
    import pressSpringEffect from "$src/lib/actions/press-spring-effect.svelte";
    import PostList from "$src/lib/components/PostList.svelte";
    import HeroPage from "$src/lib/components/HeroPage.svelte";

    const { data } = $props();
</script>

<div>
    <HeroPage />
    <div class="flex gap-10 justify-between scale-100">
        <div class="flex-1">
            <h2 class="text-primary">Latest</h2>
            <div class="mt-5">
                <PostList posts={data.latestPosts} />
            </div>
            <div
                class="flex items-center justify-center mt-5 text-xs text-gray-400"
            >
                <a
                    href="/blog"
                    class="hover:text-primary transition-colors duration-300 flex items-center  gap-2"
                >
                    <span>view more..</span>
                    <span class="tabler--arrow-right !w-4 !h-4"></span>
                </a>
            </div>
        </div>
        <div>
            <div class="sticky min-w-3xs top-(--height-main-header)">
                <div>
                    <h2 class="text-primary">Category</h2>
                    <div class="p-4 flex flex-col gap-3">
                        {#each data.allCategories as category}
                            <a
                                use:hoverSpringEffect
                                use:pressSpringEffect
                                class="px-2 py-1 bg-primary-100 text-text text-sm rounded-lg hover:bg-primary-300 transition-colors duration-300 flex items-center gap-2"
                                href="/blog/category"
                            >
                                <span class="tabler--book-2 !w-4 !h-4"></span>
                                <span>{category}</span>
                            </a>
                        {/each}
                    </div>
                </div>
                <div class="mt-10">
                    <h2 class="text-primary">Tags</h2>
                    <div class="p-4 flex gap-3 flex-wrap">
                        {#each data.allTags as tag}
                            <a
                                use:hoverSpringEffect
                                use:pressSpringEffect
                                class="inline-block bg-primary-100 text-text px-2 py-1 rounded-lg text-sm hover:bg-primary-300 transition-colors duration-300"
                                href={`/blog/tags/${tag}`}
                            >
                                {tag}
                            </a>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
