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

<header
    class="fixed w-full bg-white/10  backdrop-blur-lg z-30"
>
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
                            class="transition-colors duration-150 hover:text-primary px-2 py-0.5 rounded-lg decoration-dashed hover:underline underline-offset-4"
                            {href}>{title}</a
                        >
                    {/each}
                </nav>
            {/if}
            {#if mobileOrPC === "mobile" || mobileOrPC === "unknown"}
                <div class="block md:hidden">
                    <button
                        aria-label="menu"
                        class="select-none rounded-full border border-text w-6 h-6 flex items-center justify-center"
                    >
                        <span class="tabler--menu-2 !w-7 !h-7"></span>
                    </button>
                </div>
                <!-- <Drawer></Drawer> -->
            {/if}
        </div>
    </div>
</header>
