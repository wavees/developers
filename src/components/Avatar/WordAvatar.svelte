<script>
  // Importing components
  import Spinner from "../Loading/Spinner.svelte";

  let colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-teal-500",
    "bg-purple-500",
    "bg-pink-500"
  ];

  // Export username, size and avatar variables
  export let word = "UN";
  
  export let size = 2.3
</script>

<div class="rounded-full flex justify-center items-center relative" style="width: {size}em; height: {size}em;">
  <Spinner style="z-index: 0;" size="25" />
  <div class="absolute rounded-full flex justify-center items-center {colors[Math.floor(Math.random() * colors.length)]}" style="z-index: 1; width: {size}em; height: {size}em;">
    <span style="font-size: {size / 2}em;" class="font-semibold text-white">
      {word.split("")[0].toUpperCase()}
    </span>
  </div>
</div>