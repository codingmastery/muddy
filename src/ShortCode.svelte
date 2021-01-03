<script>
    export let shortCodeClass ;
</script>

<span class={`sc ${shortCodeClass}`}>
    <slot></slot>
</span>

<style>
    span {
        font-weight: bold;
    }
    span.place {
        color: rgb(255, 198, 12)
    }
    span.unknown {
        color: #c3c3c3;
    }
    span.foe {
        color: red;
    }
</style>