<script>
  // Importing components
  import RoundedButton from "../components/Buttons/RoundedButton.svelte";
  import TransparentButton from "../components/Buttons/TransparentButton.svelte";
</script>

<svelte:head>
  <title>Wavees для Разработчиков</title>
  <link rel="stylesheet" href="./fonts/Junegull/junegull.css">
</svelte:head>

<div style="min-height: 100vh;" class="w-full h-full flex justify-center items-center relative">
  <!-- Header -->
  <div class="absolute inset-x-0 top-0 w-full flex justify-center items-center py-4">
    <h1 style="font-family: Junegull" class="text-xl text-bold">wavees</h1>
  </div>

  <!-- Body -->
  <div class="flex justify-between items-center">
    <div class="max-w-xl text-center mx-12">
      <h1 class="text-xl">Покоряйте новые вершины <span class="font-bold">быстро</span> и <span class="font-bold">просто</span></h1>
      <p class="text-gray-700 text-sm mt-2">Сервисы Wavees для Разработчиков сделанны специально так, что бы их можно было использовать максимально просто и максимально быстро. Мы стремимся к максимальной простоте и к самому минимальному порогу вхождения новых разработчиков. Про другие особенности нашей компании вы сможете узнать ниже, а так же вы сможете узнать про возможности, которые вам даёт Wavees для Разработчиков</p>
    
      <div class="flex w-full justify-center mt-6">
        <TransparentButton on:click={(e) => {
          window.location.href = "https://company.wavees.co.vu/";
        }} classes="mx-4">
          Узнать про компанию
        </TransparentButton>
        
        <RoundedButton classes="mx-4">
          ⛔ В разработке
        </RoundedButton>
      </div>
    </div>

    <img style="width: 45vw;" src="./illustrations/hiking_monochromatic.svg" alt="hiking illustration">
  </div>
</div>