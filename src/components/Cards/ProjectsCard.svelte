<script>
  // import
  import { fade, slide } from "svelte/transition";
  import axios from "axios";

  import { onMount } from "svelte";
  import { projects, general } from "../../config/global.js";

  // Importing components
  import GridIcon from "../../icons/Grid.svelte";
  import ChevronIcon from "../../icons/Chevron.svelte";
  import Background from "../Background.svelte";

  // Let's update projects list.
  projects.updateProjects("all");

  function getRandomColor() {
    let colors = [
      "bg-blue-600",
      "bg-yellow-600",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Let's export focused variable.
  // If set to true, it'll make this card uncollapsed
  // and make this card attractive to user's eyes.
  export let focused = false;

  // Do we need to collapse this card?
  let collapsed = focused == true ? false : true;
  let error = null;

  // Hovering variable.
  let hovering = false;
</script>

<style>
  #container::-webkit-scrollbar {
    display: none;
  }

  #container {
    overflow: -moz-scrollbars-none; 
  }

  #container { 
    -ms-overflow-style: none; 
  }
</style>

<!-- Layout -->
<div on:mouseenter={(e) => {
  if (focused == true) {
    focused = false;
  };
}} id="container" style="font-family: Neris; height: 75vh; overflow-y: auto;" class="w-full flex justify-start items-start relative py-4 { collapsed == true ? "max-w-extra-xs" : "max-w-md" }">
  <!-- Projects list -->
  <div class="relative w-full h-full bg-white rounded-lg shadow mx-4 { focused == true ? "border-2 border-blue-600 border-solid" : "border-2 border-white border-solid" }">
    <div class="flex flex-col justify-center">
      <!-- Collapse button & Header -->
      { #if collapsed == true }
        <div class="w-full flex justify-center items-center my-4">
          <button on:click={(e) => {
            collapsed = false;
          }}>
            <ChevronIcon size="1.5" direction="right" />
          </button>
        </div>
      { :else }
        <div class="w-full flex justify-center relative py-4 mb-4">
          <h1 class="text-bold text-xl">Список проектов</h1>

          <button on:click={(e) => {
            collapsed = true;
          }} class="absolute inset-y-0 right-0 p-2 mx-4">
            <ChevronIcon size="1.5" direction="left" />
          </button>
        </div>
      { /if }

      <!-- Projects list -->
      <div class="flex flex-wrap justify-center { collapsed == false ? "px-6" : "" }">
        {#each $projects as project}
          { #if project.type != "promotion" }

            { #if collapsed == true }
              <div on:click={(e) => {
                if (project.url.split('').includes("@")) {
                  window.location.href = `https://${project.url.split('@')[1]}.${$general.url}`;
                } else {
                  if (project.url.split(':').includes('http')) {
                    window.location.href = project.url;
                  } else {
                    window.location.href = `http://${project.url}`;
                  }
                }
              }} style="cursor: pointer;" class="p-2 my-2 hover:bg-gray-100 hover:shadow-2xl rounded-lg">
                <img style="width: 1.5em; height: 1.5em;" src="{project.icon}" alt="{project.icon} logo">
              </div>
            { :else }
              <div on:click={(e) => {
                if (project.url.split('').includes("@")) {
                  window.location.href = `https://${project.url.split('@')[1]}.${$general.url}`;
                } else {
                  if (project.url.split(':').includes('http')) {
                    window.location.href = project.url;
                  } else {
                    window.location.href = `http://${project.url}`;
                  }
                }
              }} style="cursor: pointer;" class="dropdown relative flex flex-col justify-center items-center p-4 my-2 w-24 h-24 rounded-lg hover:bg-gray-100">            
                <img style="width: 2.1em; height: 2.1em;" src="{project.icon}" alt="{project.icon} logo">
                
                <!-- If project name contains "@" - that we need to
                  get the translation for this title in lozalization files. -->
                <!-- { #if project.name.split('').includes("@") }
                  <p class="text-sm">{$_(project.name.replace("@", ""), { default: "Unknown application" })}</p>
                { :else } -->
                <p class="text-sm">{project.name}</p>
                <!-- { /if } -->
              </div>
            { /if }

          { /if }
        {/each}

        <!-- 
          Account settings button
        -->
        <div class="{ collapsed == true ? "" : "hidden"} absolute inset-x-0 bottom-0">
          <div on:click={(e) => {
            window.location.href = "https://account.wavees.co.vu/settings?return=@wavees.co.vu";
          }} style="cursor: pointer;" class="p-2 my-2 hover:bg-gray-100 hover:shadow-2xl rounded-lg">
            <img style="width: 1.5em; height: 1.5em;" src="./icons/settings.svg" class="p-1" alt="Settings logo">
          </div>
        </div>

        <!-- 
          Exra buttons
          Only available in uncollapsed view
        -->

        { #if collapsed == false }
          <!-- 
            Developer panel
          -->
          <div style="cursor: pointer;" class="dropdown relative flex flex-col justify-center items-center p-4 my-2 w-24 h-24 rounded-lg hover:bg-gray-100">            
            <img style="width: 2.1em; height: 2.1em;" src="./icons/cpu.svg" class="p-1" alt="Developer logo">

            <p class="text-sm">Developers</p>
          </div>

          <!-- 
            Suggest idea button 
            -->
          <div style="cursor: pointer;" class="dropdown relative flex flex-col justify-center items-center p-4 my-2 w-24 h-24 rounded-lg hover:bg-gray-100">            
            <img style="width: 2.1em; height: 2.1em;" src="./icons/feather.svg" class="p-1" alt="Suggest idea logo">

            <p class="text-sm">Предложить</p>
          </div>

          <!-- 
            Account settings button
          -->
          <div on:click={(e) => {
            window.location.href = "https://account.wavees.co.vu/settings?return=@wavees.co.vu";
          }} style="cursor: pointer;" class="dropdown relative flex flex-col justify-center items-center p-4 my-2 w-24 h-24 rounded-lg hover:bg-gray-100">            
            <img style="width: 2.1em; height: 2.1em;" src="./icons/settings.svg" class="p-1" alt="Settings logo">

            <p class="text-sm">Настройки</p>
          </div>
        { /if }

      </div>
    </div>
  </div>
</div>