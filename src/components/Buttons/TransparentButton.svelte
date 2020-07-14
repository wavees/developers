<script>
  // Export some button configurations and variables
  export let classes = "";
</script>

<button on:keyup on:click class="{classes} px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:shadow-xl">
  <slot></slot>
</button>