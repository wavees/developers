<script>
  export let size;

  if (!size) {
    size = 50;
  } 
</script>

<div style="width: {size}px; height: {size}px" class="spinner">
</div>

<style>
  .spinner {
    display: inline-block;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #424242;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
</style>