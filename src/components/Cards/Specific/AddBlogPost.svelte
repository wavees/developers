<script>
  // import
  import { fade, slide } from "svelte/transition";

  // Importing components
  import GridIcon from "../../../icons/Grid.svelte";
  import Spinner from "../../Loading/Spinner.svelte";

  // Hovering variable.
  let hovering = false;
</script>

<!-- Layout -->
<div on:mouseenter={() => {hovering = true;}} on:mouseleave={(e) => {hovering = false;}} style="font-family: Neris; height: 37.5vh; min-height: 15rem;" class="grid-element w-full max-w-md px-4 py-4">
  <!-- 
    Post's background 
    It's a little complicated right here.
    So, here we'll define what background
    we need to show
  -->
  <div style="cursor: pointer;" class="w-full h-full { hovering == true ? "text-gray-800" : "text-white" } bg-white rounded-lg shadow relative flex justify-start items-center">
    { #if hovering }
      <div transition:fade style="z-index: 1;" class="absolute w-full h-full bg-white rounded-lg"></div>
    { :else }
      <div transition:fade style="z-index: 1;" class="absolute w-full h-full bg-blue-600 rounded-lg"></div>
    { /if }

    <!-- #Post's header
    <div style="z-index: 2;" class="{ hovering == true ? "hidden" : "flex" } absolute inset-x-0 top-0 py-2 w-full justify-between px-4">
      <div class="flex text-white items-center">
        <p class="text-xs">posted by <span class="text-sm" style="font-weight: 600;">{post.author}</span></p>
      </div>

      <button>
        <GridIcon color="#fff" />
      </button>
    </div> -->

    <!-- Post's content -->
    <div style="z-index: 2;" class="max-w-sm text-white px-6">
      <p class="text-2xl" style="font-family: Intro;">hello there</p>


    </div>
  </div>
</div>