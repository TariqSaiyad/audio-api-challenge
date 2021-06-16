<script lang="ts">
  import { page } from "$app/stores";
  import logo from "./svelte-logo.svg";
</script>

<header>
  <div class="corner">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <h1>Web Audio Test</h1>
 

  <div class="corner">
    <p>Tariq</p>
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 3rem;
    height: 3rem;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  // nav {
  //   display: flex;
  //   justify-content: center;
  //   --background: hsla(0, 0%, 0%, 0.151);
  // }

  // ul {
  //   position: relative;
  //   padding: 0;
  //   margin: 0;
  //   height: 3em;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   list-style: none;
  //   background: var(--background);
  //   background-size: contain;
  // }

  // li {
  //   position: relative;
  //   height: 100%;
  // }

  // li.active::before {
  //   --size: 6px;
  //   content: "";
  //   width: 0;
  //   height: 0;
  //   position: absolute;
  //   top: 0;
  //   left: calc(50% - var(--size));
  //   border: var(--size) solid transparent;
  //   border-top: var(--size) solid var(--accent-color);
  // }

  // nav a {
  //   display: flex;
  //   height: 100%;
  //   align-items: center;
  //   padding: 0 1em;
  //   color: #d4cfbf;
  //   font-weight: 700;
  //   font-size: 0.8rem;
  //   text-transform: uppercase;
  //   letter-spacing: 10%;
  //   text-decoration: none;
  //   transition: color 0.2s linear;
  // }

  // a:hover {
  //   color: var(--accent-color);
  // }
</style>
