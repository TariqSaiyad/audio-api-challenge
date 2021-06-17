<script lang="ts">
  import { onMount } from "svelte";
  let jar;

  onMount(async () => {
    const highlight = (editor: HTMLElement) => {
      const code = editor.textContent;
      editor.innerHTML = code;
    };

    const obj = await import("codejar");
    jar = obj.CodeJar(document.querySelector(".editor"), highlight);
  });
</script>

<div class="code">
  <div class="editor" />
</div>

<style>
  .code {
    display: grid; 
  width:100%;
  height:30rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  .editor {
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    font-family: "Source Code Pro", monospace;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 20px;
    padding: 10px;
    tab-size: 4;
    background-color: wheat;
  }
</style>
