<script>
  // import
  import { headerItems } from "../../config/global.js";
  
  // Importing components
  import UserDropdown from "../Header/UserDropdown.svelte";

  // Let's export current page variable;
  export let page = "index";
</script>

<style>
  .underlined-solid {
    text-decoration: none; 
    color: #4299e1; 
    border-bottom: 1px solid #4299e1
  }
</style>

<!-- Container -->
<div style="font-family: Neris; font-weight: 300;" class="w-full absolute inset-x-0 top-0 flex justify-center py-4">

  <!-- Logotype & pages -->
  <div class="items-center flex">
    {#each $headerItems as item}
      <!-- 
        Let's check if this item is
        logotype or not 
      -->

      {#if item.id == "logotype"}
        <!-- It's a logotype! -->
        <h1 style="font-family: Junegull" class="mx-4 text-xl">
          WAVEES
        </h1>
      { :else }
        <!-- Just an ordinary header item -->
        <div on:click={(e) => {

        }} class="mx-4 text-sm { page == item.id ? "text-semibold underlined-solid" : "" }">
          {item.name}
        </div>
      {/if}
    {/each}
  </div>

  <!-- User controls -->
  <div class="absolute inset-y-0 right-0 px-4 py-4 max-w-xs w-full flex justify-center items-center">
    <UserDropdown />
  </div>
</div>