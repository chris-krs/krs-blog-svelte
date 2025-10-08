<script lang="ts">
    import dayjs from "dayjs";
    import type { Posts } from "../utils/post";
    const { posts }: { posts: Posts } = $props();

    const day = (date: string) => {
        const week = ["一", "二", "三", "四", "五", "六", "日"];
        return (
            dayjs(date).format(`YYYY 年 MM 月 DD 日 `) +
            `星期${week[dayjs(date).day() - 1]}`
        );
    };
</script>

<div class="flex flex-col gap-5">
    {#each posts as post}
        <a
            class="flex flex-col gap-4 hover:bg-primary-50 p-4 rounded-lg transition-colors duration-300"
            href={`/blog/${post.slug}`}
        >
            <span class="text-xl font-bold">{post.metadata.title}</span>
            <div class="text-xs text-gray-400 flex gap-4">
                <span class="inline-flex items-center gap-1">
                    <span class="tabler--calendar-event !w-4 !h-4"></span>
                    {day(post.metadata.pubDate)}
                </span>
                {#if post.metadata.tags}
                    <span class="inline-flex items-center gap-1">
                        <span class="tabler--tags !w-4 !h-4"></span>
                        {#each post.metadata.tags as tag}
                            <span>{tag}</span>
                        {/each}
                    </span>
                {/if}
            </div>
        </a>
    {/each}
</div>
