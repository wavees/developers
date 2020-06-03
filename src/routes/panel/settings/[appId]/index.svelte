<script>
  // import
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import Cookie from "cookie-universal";

  import { fade } from "svelte/transition";

  // Importing components
  import Spinner from "../../../../components/Loading/Spinner.svelte";
  import WordAvatar from "../../../../components/Avatar/WordAvatar.svelte";
  import UserDropdown from "../../../../components/Header/UserDropdown.svelte";
  import RoundedButton from "../../../../components/Buttons/RoundedButton.svelte";

  // Here we'll import some useful stores..
  import { list } from "../../../../config/projects.js";
  import { user } from "../../../../config/user.js";

  // Cookies manager
  const cookies = Cookie();

  let loaded = false;

  // OnMount event
  onMount(() => {
    setTimeout(() => {
      loaded = true;
    }, 150);
    // And now we need to get list of all
    // user projects.

    // Firstly, we need to check if user is logged
    // in.
    if ($user.current.token != null) {
      // And now we need to load project's list...
      list.loadProjects($user.current.token);
    };
  });

  // Function, that'll just create some
  // cookies and then redirect user to
  // specific place.
  function chooseApplication(appId) {
    cookies.set('_current_appId', appId);

    goto('/panel');
  };

</script>

{ #if !loaded }
  <div out:fade style="height: 100vh; z-index: 2;" class="absolute bg-white inset-x-0 top-0 w-full flex justify-center items-center">
  	<!-- Branding -->
		<!-- <div class="flex flex-col justify-center items-center">
			<div class="flex mb-6 items-center">
				<h1 style="font-family: Junegull" class="text-2xl text-bold">wavees</h1>
			</div>

			<Spinner size="25" />
		</div> -->
  </div>
{ /if }

<div style="height: 100vh;" class="w-full relative bg-gray-200">
  <!-- Header -->
  <div class="bg-white w-full absolute inset-x-0 top-0 flex justify-between items-center py-2">
    <!-- Services panel -->
    <div class="px-6 flex items-center">
      <!-- Authorization service -->
      <div style="cursor: pointer;" class="px-4 py-2 mx-2 hover:bg-gray-200 flex rounded-lg">
        <!-- Icon -->
        <img src="./icons/smile.svg" alt="Authorization service Icon">

        <!-- Text -->
        <div class="text-left ml-4">
          <h1 class="text-base text-semibold">Авторизация</h1>
          <p class="text-xs text-gray-700">Система авторизации</p>
        </div>
      </div>

      <!-- Database services -->
      <div style="cursor: pointer;" class="px-4 py-2 mx-2 hover:bg-gray-200 flex rounded-lg">
        <!-- Icon -->
        <img src="./icons/file.svg" alt="Datastore Icon">

        <!-- Text -->
        <div class="text-left ml-4">
          <h1 class="text-base text-semibold">Datastore</h1>
          <p class="text-xs text-gray-700">Хранение данных</p>
        </div>
      </div>
    </div>

    <!-- User dropdown panel -->
    <div class="flex items-center">
      <div class="flex mr-4">
        <!-- Choose other project -->
        <div on:click={(e) => {
          goto('/panel/projects');
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

  <!-- Projects list -->
  <div class="w-full h-full pt-24 pb-6 px-4 md:px-16 lg:px-32">
    <div class="relative w-full h-full flex justify-center items-center rounded-lg shadow-xl bg-white px-4 flex flex-wrap">

    </div>
  </div>
</div>