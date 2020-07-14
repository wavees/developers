<script>
  // import
  import { fade, slide } from "svelte/transition";

  // Importing components
  import GridIcon from "../../icons/Grid.svelte";
  import Background from "../Background.svelte";

  import Spinner from "../Loading/Spinner.svelte";

  // Hovering variable.
  let hovering = false;
</script>

<!-- Layout -->
<div on:mouseenter={() => {hovering = true;}} on:mouseleave={(e) => {hovering = false;}} style="font-family: Neris; height: 75vh; min-height: 20rem;" class="grid-element w-full max-w-md px-4 py-4">
  <!-- 
    Post's background 
    It's a little complicated right here.
    So, here we'll define what background
    we need to show
  -->
  <div style="cursor: pointer;" class="w-full h-full bg-white rounded-lg shadow relative flex justify-start items-center">
    
    <!-- Loading indicator -->
    <div class="{ hovering == true ? "hidden" : "flex" } absolute w-full h-full justify-center items-center">
      <Spinner size="25" />
    </div>

    <!-- Hovering background -->
    { #if hovering }
      <div transition:fade style="z-index: 1;" class="absolute w-full h-full bg-blue-600 rounded-lg"></div>
    { :else }
      <div style="z-index: 1; background-image: url('image.jpg'); background-size: cover; background-position: center center;" class="absolute w-full h-full rounded-lg"></div>
    { /if }

    <!-- Post's header -->
    <div style="z-index: 2;" class="absolute inset-x-0 top-0 py-2 w-full flex justify-between px-4">
      <div class="flex text-white items-center">
        <p class="text-xs">posted by <span class="text-sm" style="font-weight: 600;">Wavees Group</span></p>
      </div>

      <button>
        <GridIcon color="#fff" />
      </button>
    </div>

    <!-- Post's content -->
    <div style="z-index: 2;" class="max-w-xs text-white px-6">
      <p class="text-3xl" style="font-family: Intro;">Кто мы такие и что мы будем делать.</p>
      <p class="text-base">Поговорим про наши планы, про нашу команду ну и о подобном.</p>
    </div>

    <!-- Post's footer -->
    <!-- <div class="">
    
    </div> -->
  </div>
</div>