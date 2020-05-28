<script>
  // import
  import { onMount } from "svelte";
  import { user } from "../config/user.js";
  import { stores } from "@sapper/app";

  // Importing components
  import Layout from "../components/Layout/Container.svelte";

  import Header from "../components/Layout/Header.svelte";
  import Footer from "../components/Layout/Footer.svelte";

  import ProjectsCard from "../components/Cards/ProjectsCard.svelte";
  import ImportantCard from "../components/Cards/ImportantPost.svelte";  
  import NormalCard from "../components/Cards/NormalPost.svelte";
  import AddBlogPostCard from "../components/Cards/Specific/AddBlogPost.svelte";

  // Icons
  import GridIcon from "../icons/Grid.svelte";

  // Let's get page store
  const { page } = stores();

  let posts = [
    {
      author: "Wavees Ideas Division",

      title: "Ваши идеи - превыше всего!",
      subtitle: "Мы всегда прислушиваемся к нашим пользователям, и это хорошо! Вы можете прислать нам свою идею - и мы обязательно её воплотим в реальность!",

      link: "https://ideas.wavees.co.vu/wv_services",
      theme: "black",

      background: "./background/ideasBack.png",
    }
  ];
</script>

<svelte:head>
  <title>🚀 Space</title>

  <link rel="stylesheet" href="./fonts/Intro/intro.css">
  <link rel="stylesheet" href="./fonts/Neris/neris.css">
  <link rel="stylesheet" href="./fonts/Junegull/junegull.css">
</svelte:head>

<!-- 
  Layout
  This page's container.
  It contains a lot of shit 
 -->
<div style="overflow: hidden; height: 100vh;" class="w-full bg-gray-100 relative flex justify-center items-center">
  <Header page="index" />

  <div style="max-height: 75vh;" id="grid" class="w-full px-4 md:px-8 lg:px-16">
    <!-- style="min-width: 150vw;" -->
    <div class="flex">
      <!-- The most important post -->
      <ProjectsCard focused={$page.query.focus == "projects" ? true : false} />

      <ImportantCard />
      
      <!--  -->
      <div class="w-full flex flex-wrap">
        {#each posts as post}
          <NormalCard post={post} />
        {/each}

        <AddBlogPostCard />
      </div>
    </div>
  </div>
</div>