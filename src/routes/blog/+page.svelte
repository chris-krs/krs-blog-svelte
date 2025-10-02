<script lang="ts">
    const { data } = $props();
</script>

<div>
    {#each data.posts as { metadata, slug }}
        <a href={`/blog/${slug}`}>{metadata.title}</a>
        <div>{metadata.pubDate}</div>
    {/each}
</div>
