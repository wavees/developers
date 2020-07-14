<script>
  // Importing components
  import Spinner from "../Loading/Spinner.svelte";

  let colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-orange-500"
  ];

  // Export username, size and avatar variables
  export let username = "UN";
  
  export let size = 2.3
  export let avatar = null;
</script>

<div class="rounded-full flex justify-center items-center relative" style="width: {size}em; height: {size}em;">
  <Spinner style="z-index: 0;" size="25" />
  { #if avatar == null }
    <div class="absolute rounded-full flex justify-center items-center {colors[Math.floor(Math.random() * colors.length)]}" style="z-index: 1; width: {size}em; height: {size}em;">
      <span style="font-size: {size / 2}em;" class="font-semibold text-white">
        {username == null ? "UN" : username.split("")[0].toUpperCase()}
      </span>
    </div>
  { :else }
    <div class="absolute rounded-full" style="z-index:1; background-image: url({avatar}); background-size: cover; background-position: center center; width: {size}em; height: {size}em;"></div>
  { /if }
</div>