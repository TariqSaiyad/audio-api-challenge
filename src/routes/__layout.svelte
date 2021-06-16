<script lang="ts">
  import Header from "$lib/Header/index.svelte";
  import "../app.scss";

</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <p>by <a href="https://kit.svelte.dev">Tariq Saiyad</a></p>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 2rem 0;
    }
  }

</style>
