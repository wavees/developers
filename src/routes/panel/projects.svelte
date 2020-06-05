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

  import Header from "../../components/Layout/Headers/PanelHeader.svelte";

  // Here we'll import some useful stores..
  import { stores } from "@sapper/app";
  import { list } from "../../config/projects.js";
  import { user } from "../../config/user.js";

  // Page store
  const { page } = stores();

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

    // Let's check if we need to return user to
    // some specific url or not
    let returnURL = $page.query.return;
    if (returnURL == null) {
      goto(`/panel/project/${appId}`);
    } else {
      goto(`/panel/project/${appId}/${returnURL}`);
    }
  };

</script>

{ #if !loaded }
  <div out:fade style="height: 100vh; z-index: 2;" class="absolute bg-white inset-x-0 top-0 w-full flex justify-center items-center">
  </div>
{ /if }

<div style="height: 100vh;" class="w-full relative bg-gray-200">
  <Header page="projects" />

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