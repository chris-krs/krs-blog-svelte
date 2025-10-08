<script>
    import portal from "../actions/portal.svelte";
    $effect(() => {
        document.documentElement.classList.add('forbid-scroll')
    })
</script>

<div class="overlay" use:portal={"body"}>
    <div class="drawer">
        <div class="drag-bar">

        </div>
        <div class="drawer-wrapper"></div>
    </div>
    <div class="mask"></div>
</div>

