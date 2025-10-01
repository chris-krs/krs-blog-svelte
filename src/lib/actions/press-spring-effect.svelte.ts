import gsap from "gsap";

export default function pressSpringEffect(node: HTMLElement) {
    $effect(() => {
        const handlePointerdown = () => {
            gsap.to(node, {
                scale: 0.9,
                duration: 2,
                ease: "elastic.out(1.2, 0.2)",
            });
        }
        const handlePointerup = () => {
            gsap.to(node, {
                scale: 1.1,
                duration: 2.5,
                ease: "elastic.out(1.2, 0.2)",
            });
        }
        node.addEventListener("pointerdown", handlePointerdown);
        node.addEventListener("pointerup", handlePointerup);
        return () => {
            node.removeEventListener("pointerdown", handlePointerdown);
            node.removeEventListener("pointerup", handlePointerup);
        }
    })
}