<script>
  // import events module
  import { createEventDispatcher } from 'svelte';

  // Create dispatcher
	const dispatch = createEventDispatcher();

  // 

  // Export some button configurations and variables
  // export let backgroundColor;

  export let classes = "";
  export let id = null;
</script>

<button id={ id == null ? "" : id } on:click class="{classes} px-6 py-2 rounded-full bg-blue-600 text-white shadow-xl hover:bg-transparent hover:text-black hover:shadow-none">
  <slot></slot>
</button>