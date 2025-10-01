<script lang="ts">
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

<header class="fixed w-full">
    <div
        class="container-width-limit h-(--height-main-header) flex items-center justify-between bg-white"
    >
        <a href="/">
            <img src={logo} alt="logo" class=" w-12 h-12 rounded-2xl" />
        </a>
        <div class="flex items-center">
            {#if mobileOrPC === "pc" || mobileOrPC === "unknown"}
                <nav class="hidden md:flex gap-8">
                    {#each navLinks as { title, href }}
                        <a {href}>{title}</a>
                    {/each}
                </nav>
            {/if}
            {#if mobileOrPC === "mobile" || mobileOrPC === "unknown"}
                <div class="block md:hidden">
                    <button>menu</button>
                </div>
            {/if}
        </div>
    </div>
</header>
