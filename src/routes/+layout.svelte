<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/avatar.png";
	import "@fontsource-variable/atkinson-hyperlegible-next";
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Chris-Krs' Blog</title>
</svelte:head>

<Header />
<main class="container-width-limit pt-(--height-main-header)">
	{@render children?.()}
</main>
