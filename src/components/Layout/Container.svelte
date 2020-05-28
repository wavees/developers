<script>
  // Let's export new style object.
  export let style = "";
</script>

<div class="w-full h-full {style == null ? "" : style}">
  <slot></slot>
</div>