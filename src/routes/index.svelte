<script context="module" lang="ts">
  export const prerender = true;

</script>

<script lang="ts">
  import Counter from "$lib/Counter/index.svelte";

</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>Web Audio Test</h1>

  <Counter />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }



</style>
