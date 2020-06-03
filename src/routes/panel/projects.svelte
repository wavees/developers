<script>
  // import
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import Cookie from "cookie-universal";

  import { fade } from "svelte/transition";

  // Importing components
  import Spinner from "../../components/Loading/Spinner.svelte";
  import WordAvatar from "../../components/Avatar/WordAvatar.svelte";
  import UserDropdown from "../../components/Header/UserDropdown.svelte";
  import RoundedButton from "../../components/Buttons/RoundedButton.svelte";

  // Here we'll import some useful stores..
  import { list } from "../../config/projects.js";
  import { user } from "../../config/user.js";

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
    } else {
      // We don't have any current user token,
      // so let's check if there is any user in
      // current session. 
      if ($user.tokens.length > 1) {
        // Okay, so now we need to redirect user to
        // Account Chooser page
        goto('/chooser?return=panel/projects');
      } else {
        // There are any users in current session,
        // so we need to redirect user to landing page
        goto('/');
      }
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
  </div>
{ /if }

<div style="height: 100vh;" class="w-full relative bg-gray-200">
  <!-- Header -->
  <div class="bg-white w-full absolute inset-x-0 top-0 flex justify-between items-center py-2">
    <!-- Services panel -->
    <div class="px-6">
      <div style="cursor: pointer;" class="px-4 py-2 hover:bg-gray-200 flex rounded-lg relative">
        <!-- Icon -->
        <img src="./icons/layers.svg" alt="Projects List Icon">

        <!-- Text -->
        <div class="text-left ml-4">
          <h1 class="text-base text-semibold">Приложения</h1>
          <p class="text-xs text-gray-700">Список всех приложений</p>
        </div>

        <div style="height: 2px; border-bottom: 2px solid #4299e1" class="absolute inset-x-0 bottom-0"></div>
      </div>
    </div>

    <!-- User dropdown panel -->
    <div class="">
      <UserDropdown />
    </div>
  </div>

  <!-- Projects list -->
  <div class="w-full h-full pt-24 pb-6 px-4 md:px-16 lg:px-32">
    <div class="relative w-full h-full flex justify-center items-center rounded-lg shadow-xl bg-white px-4 flex flex-wrap">
      <!-- And here goes some kind of a "header" -->
      <div class="absolute inset-x-0 top-0 w-full pt-6 flex justify-center items-center">
        <!-- Center -->
        <h1 class="text-xl text-bold">Выберите приложение</h1>
        <p class="mx-6">или</p>
        <RoundedButton classes="text-base">
          Создайте новое
        </RoundedButton>
      </div>

      { #if $list.loaded }
        <!-- And here goes the list itself... -->
        {#each $list.list as project}
          <div on:click={(e) => {
            chooseApplication(project._id);
          }} style="cursor: pointer;" class="mx-4 my-2">
            <!-- Logotype -->
            <div class="w-32 h-32 rounded-lg bg-gray-200 flex justify-center items-center">
              <WordAvatar size="3.5" word={project.name} />
            </div>
            <!-- Application name -->
            <p class="text-gray-700 w-full text-center mt-2">{project.name.slice(0, 13)}{project.name.split('').length > 13 ? "..." : ""}</p>
          </div>
        {/each}
      { :else }
        <Spinner />
      { /if }
    </div>
  </div>
</div>