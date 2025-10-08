<script lang="ts">
    import TextPlugin from "gsap/TextPlugin";
    import gsap from "gsap";
    import fuz from "$lib/assets/fuz.png";
    import hoverSpringEffect from "../actions/hover-spring-effect.svelte";
    import pressSpringEffect from "../actions/press-spring-effect.svelte";
    import { foreignLinks } from "../consts";
    const text = "「すべてはシュタインズ・ゲートの選択である」";

    let targetElement: HTMLParagraphElement;
    $effect(() => {
        if (!targetElement) return;
        gsap.registerPlugin(TextPlugin);

        const anim = gsap.to(targetElement, {
            text: {
                value: text,
                speed: 0.3,
            },
            duration: text.length * 0.1,
            onComplete: () => {
                gsap.delayedCall(2, () => {
                    if (!targetElement) return;
                    gsap.to(targetElement, {
                        text: { value: "", speed: 0.3, rtl: true },
                        duration: text.length * 0.1,
                        onComplete: () => {
                            anim.restart();
                        },
                    });
                });
            },
        });

        return () => {
            anim.kill(targetElement);
        };
    });
</script>

<div
    class="h-[calc(100svh-var(--height-main-header))] pt-[calc(((100svh-var(--height-main-header))-16rem)/2-var(--height-main-header))] flex flex-col justify-between"
>
    <div
        class="h-[16rem] flex flex-col md:flex-row justify-center md:justify-between items-center"
    >
        <div class="max-w-[28rem]">
            <h1 class="text-4xl">
                Hi, I'm <span
                    class="inline-block bg-primary text-white rounded-lg p-1"
                    >Chris</span
                >👋
            </h1>
            <p class="mt-5">
                Welcome to my blog, which is about full-stack develop, game,
                anime and guitar.
            </p>
            <p class="mt-2">Hope you can find something you like.</p>
            <p
                bind:this={targetElement}
                class="mt-2 text-xs typewriter-text w-fit h-5 text-gray-400"
            ></p>
            <div class="flex gap-4 items-center mt-6">
                {#each foreignLinks as link}
                    <a
                        use:hoverSpringEffect
                        use:pressSpringEffect
                        target="_blank"
                        href={link.href}
                        aria-label={link.name}
                        class={"flex items-center w-fit text-white rounded-md p-1 " + link.class}
                    >
                        <span class={link.icon}></span>
                    </a>
                {/each}
            </div>
        </div>
        <div class="relative">
            <img src={fuz} alt="fuz" class="rounded-full w-64 z-20" />
        </div>
    </div>
    <div class="mb-6 text-xs flex justify-center text-gray-400">
        <div class="flex flex-col gap-2 items-center">
            ok, let's move.<span
                class="tabler--caret-down-filled animate-bounce"
            ></span>
        </div>
    </div>
</div>
