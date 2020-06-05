<script>
  // import
  import { goto } from "@sapper/app";
  import Cookie from "cookie-universal";

  // Importing components
  import WordAvatar from "../../Avatar/WordAvatar.svelte";
  import UserDropdown from "../../Header/UserDropdown.svelte";

  // Importing stores...
  import { current } from "../../../config/projects.js";

  // Cookie manager
  const cookies = Cookie();

  export let logotype = true;
  export let divider = true;
  export let returnURL = null;
</script>

<!-- Header -->
<div class="bg-white w-full absolute inset-x-0 top-0 flex justify-between items-center py-2">
  <!-- Services panel -->
  <div class="px-6 flex items-center">
    { #if $current.loaded && logotype }
      <div class="px-4 py-2 mx-2 hover:bg-gray-200 flex rounded-lg items-center">
        <!-- Icon -->
        <WordAvatar word={$current.branding.name} />

        <!-- Text -->
        <div class="text-left ml-3">
          <h1 class="text-base font-semibold">{$current.branding.name.slice(0, 10)}{$current.branding.name.split('').length > 10 ? "..." : ""}</h1>
          <p class="text-xs text-gray-700">Текущий проект</p>
        </div>
      </div>
    { /if }

    <!-- Divider -->
    { #if divider }
      <div class="rounded-full" style="width: 2px; height: 2.4em; background-color: #000;"></div>
    { /if }

    <slot></slot>
  </div>

  <!-- User dropdown panel -->
  <div class="flex items-center">
    <div class="flex mr-4">
      <!-- Choose other project -->
      <div on:click={(e) => {
        if (returnURL == null) {
          goto('/panel/projects');
        } else {
          goto(`/panel/projects?return=${returnURL}`);
        };
      }} style="cursor: pointer;" class="px-4 py-4 mx-1 hover:bg-gray-200 rounded-lg">
        <!-- Icon -->
        <img src="./icons/layers.svg" alt="Project Chooser Icon">
      </div>

      <!-- Project settings -->
      <div style="cursor: pointer;" class="px-4 py-4 mx-1 hover:bg-gray-200 rounded-lg">
        <!-- Icon -->
        <img src="./icons/settings.svg" alt="Project Settings Icon">
      </div>
    </div>

    <!-- User dropdown -->
    <UserDropdown />
  </div>
</div>