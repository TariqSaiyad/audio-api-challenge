<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Code from "$lib/Code/index.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <Code />
  <!-- <Counter /> -->
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
</style>
