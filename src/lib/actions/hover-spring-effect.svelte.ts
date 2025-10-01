import gsap from "gsap";

export default function hoverSpringEffect(node: HTMLElement) {
    $effect(() => {
        const handleMouseenter = () => {
            gsap.to(node, {
                scale: 1.1,
                duration: 2,
                ease: "elastic.out(1.2, 0.2)",
            });
        }
        const handleMouseleave = () => {
            gsap.to(node, {
                scale: 1,
                duration: 2.5,
                ease: "elastic.out(1.2, 0.2)",
            });
        }
        node.addEventListener("mouseenter", handleMouseenter);
        node.addEventListener("mouseleave", handleMouseleave);
        return () => {
            node.removeEventListener("mouseenter", handleMouseenter);
            node.removeEventListener("mouseleave", handleMouseleave);
        }
    })
}