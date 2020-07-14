<!-- Empty file, yeah -->
<script>
  // import
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  import Cookie from "cookie-universal";

  // Cookie manager
  const cookies = Cookie();

  // OnMount event
  onMount(() => {
    // Here we'll check if we need to redirect
    // user to specific project page or not.
    let appId = cookies.get('_current_appId');

    if (appId != null) {
      goto(`/panel/project/${appId}`);
    };
  });
</script>