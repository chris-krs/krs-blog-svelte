<script lang="ts">
	import "$lib/styles/app.css";
	import favicon from "$lib/assets/avatar.png";

	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Chris-Krs' Blog</title>
</svelte:head>

<Header />
<main class="container-width-limit pt-(--height-main-header) min-h-screen">
	{@render children?.()}
</main>
<footer class="py-10 mt-10 border-t border-gray-300">
	<div class="container-width-limit text-sm flex flex-col items-center">
		<div class="text-gray-400">&copy;All rights reserved by Chris</div>
		<div class="text-gray-400 mt-2">
			Powered by <span class="text-[#f96743]">SvelteKit</span>
		</div>
	</div>
</footer>
