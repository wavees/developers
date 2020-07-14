<script>
  // import
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import Cookie from "cookie-universal";

  import { fade } from "svelte/transition";

  // Importing components
  import Spinner from "../../../../../components/Loading/Spinner.svelte";
  import WordAvatar from "../../../../../components/Avatar/WordAvatar.svelte";
  import UserDropdown from "../../../../../components/Header/UserDropdown.svelte";

  import TransparentButton from "../../../../../components/Buttons/TransparentButton.svelte";
  import RoundedButton from "../../../../../components/Buttons/RoundedButton.svelte";

  import Header from "../../../../../components/Layout/Headers/ProjectHeader.svelte";

  // Here we'll import some useful stores..
  import { current } from "../../../../../config/stores/projects.js";
  import { user } from "../../../../../config/stores/user.js";

  // Cookie manager
  const cookies = Cookie();

  let loaded = false;

  // OnMount event
  onMount(() => {
    setTimeout(() => {
      loaded = true;
    }, 150);
  });
</script>

{ #if !loaded }
  <div out:fade style="height: 100vh; z-index: 2;" class="absolute bg-white inset-x-0 top-0 w-full flex justify-center items-center">
  </div>
{ /if }

<div style="min-height: 100vh;" class="w-full relative bg-gray-200">
  <Header logotype={false} divider={false} returnURL="authentication/tutorial">
    <!-- Go home button -->
    <div on:click={(e) => {
      goto(`/panel`);
    }} style="cursor: pointer;" class="px-4 py-4 mx-1 hover:bg-gray-200 rounded-lg">
      <!-- Icon -->
      <img src="./icons/chevron-left.svg" alt="Home Icon">  
    </div>

    <!-- Home -->
    <div on:click={(e) => {
      goto(`/panel/project/${cookies.get('_current_appId')}/authentication`);
    }} style="cursor: pointer;" class="px-4 py-2 mx-2 hover:bg-gray-200 flex rounded-lg">
      <!-- Icon -->
      <img src="./icons/home.svg" alt="Homepage Icon">

      <!-- Text -->
      <div class="text-left ml-4">
        <h1 class="text-base text-semibold">Главная</h1>
        <p class="text-xs text-gray-700">Главная страница</p>
      </div>
    </div>

    <!-- Documentation -->
    <div style="cursor: pointer;" class="px-4 py-2 mx-2 hover:bg-gray-200 flex rounded-lg relative">
      <!-- Icon -->
      <img src="./icons/book-open.svg" alt="Authorization service Icon">

      <!-- Text -->
      <div class="text-left ml-4">
        <h1 class="text-base text-semibold">Документация</h1>
        <p class="text-xs text-gray-700">Про то, как использовать</p>
      </div>

      <div style="height: 2px; border-bottom: 2px solid #4299e1" class="absolute inset-x-0 bottom-0"></div>
    </div>

    <!-- Settings -->
    <div on:click={(e) => {
      goto(`/panel/project/${cookies.get('_current_appId')}/authentication/configuration`);
    }} style="cursor: pointer;" class="px-4 py-2 mx-2 hover:bg-gray-200 flex rounded-lg">
      <!-- Icon -->
      <img src="./icons/sliders.svg" alt="Authorization service Icon">

      <!-- Text -->
      <div class="text-left ml-4">
        <h1 class="text-base text-semibold">Конфигурация</h1>
        <p class="text-xs text-gray-700">Настройки и настройки</p>
      </div>
    </div>
  </Header>

  <!-- Projects list -->
  <div class="w-full h-full pt-20">
    <iframe style="width: 100%; min-height: 85vh;" title="Documentation" src="http://documentation.wavees.co.vu/#/ru/users/authorization" frameborder="0"></iframe>
  </div>
</div>