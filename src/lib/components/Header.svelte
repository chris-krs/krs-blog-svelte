<script lang="ts">
    import hoverSpringEffect from "$lib/actions/hover-spring-effect.svelte";
    import pressSpringEffect from "$lib/actions/press-spring-effect.svelte";
    import logo from "$lib/assets/avatar.png";
    import { navLinks } from "$lib/consts";

    let mobileOrPC = $state<"unknown" | "mobile" | "pc">("unknown");
    $effect(() => {
        const check = () => {
            const match = window.matchMedia("(max-width: 768px)").matches;
            mobileOrPC = match ? "mobile" : "pc";
        };
        check();
        window.addEventListener("resize", check);
        return () => {
            window.removeEventListener("resize", check);
        };
    });
</script>

<header class="fixed w-full backdrop-blur-lg border-b border-gray-200">
    <div
        class="container-width-limit h-(--height-main-header) flex items-center justify-between"
    >
        <a href="/">
            <img src={logo} alt="logo" class=" w-12 h-12 rounded-2xl" />
        </a>
        <div class="flex items-center">
            {#if mobileOrPC === "pc" || mobileOrPC === "unknown"}
                <nav class="hidden md:flex gap-8">
                    {#each navLinks as { title, href }}
                        <a
                            class=" transition-colors duration-150 hover:bg-gray-100 px-2 rounded-lg"
                            {href}
                            use:hoverSpringEffect
                            use:pressSpringEffect>{title}</a
                        >
                    {/each}
                </nav>
            {/if}
            {#if mobileOrPC === "mobile" || mobileOrPC === "unknown"}
                <div class="block md:hidden">
                    <button
                        aria-label="menu"
                        class="select-none"
                        use:pressSpringEffect
                    >
                        <span class="tabler--menu-2"></span></button
                    >
                </div>
            {/if}
        </div>
    </div>
</header>
