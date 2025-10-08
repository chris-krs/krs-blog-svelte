export default function portal(node: HTMLElement, target: HTMLElement | string) {
    let wrapper: HTMLElement | null = null;

    if (typeof target === 'string') {
        wrapper = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
        wrapper = target;
    }

    if (!wrapper) {
        throw new Error("portal的目标不明确...")
    }

    $effect(() => {
        wrapper.appendChild(node);
        return () => {
            node.remove();
        }
    })
}