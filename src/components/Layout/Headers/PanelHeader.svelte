<script>
  // import
  
  // Importing components
  import UserDropdown from "../../Header/UserDropdown.svelte";

  // And now we need to create pages variable.
  // It'll help us dynamically add pages and
  // so on

  // @dislaimer We'll move this variable to
  // config file soon.
  let pages = [
    { 
      // Page id
      id: "projects",

      // Page name and description
      name: "Приложения",
      description: "Список всех приложений",
    
      // Page logotype
      icon: "./icons/layers.svg"
    }
  ];

  // Let's export current page variable;
  export let page = "projects";
</script>

<!-- Header -->
<div class="bg-white w-full absolute inset-x-0 top-0 flex justify-between items-center py-2">
  <!-- Services panel -->
  <div class="px-6">
    {#each pages as p}
      <div style="cursor: pointer;" class="px-4 py-2 hover:bg-gray-200 flex rounded-lg relative">
        <!-- Icon -->
        <img src="{p.icon}" alt="{p.id} icon">

        <!-- Text -->
        <div class="text-left ml-4">
          <h1 class="text-base text-semibold">{p.name}</h1>
          <p class="text-xs text-gray-700">{p.description}</p>
        </div>

        { #if p.id == page }
          <div style="height: 2px; border-bottom: 2px solid #4299e1" class="absolute inset-x-0 bottom-0"></div>
        { /if }
      </div>
    {/each}
  </div>

  <!-- User dropdown panel -->
  <div class="">
    <UserDropdown />
  </div>
</div>