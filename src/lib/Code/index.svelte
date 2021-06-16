<script  context="module" lang="ts">
  	export const ssr = false;

// import  {CodeJar}  from "codejar";
// const highlight = (editor: HTMLElement) => {
//   const code = editor.textContent
//   editor.innerHTML = code
// }

// let jar = CodeJar(document.querySelector('.editor'), highlight)
</script>

<div class="code" >
  <div class="editor"/>

</div>

<style>
  .code {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  .editor {
    border-radius: 6px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    font-weight: 400;
    height: 100%;
    width:100%;
    letter-spacing: normal;
    line-height: 20px;
    padding: 10px;
    tab-size: 4;
    background-color: wheat;
}
</style>
