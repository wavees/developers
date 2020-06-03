<script>
  // import
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import Cookie from "cookie-universal";

  // Cookies manager
  const cookies = Cookie();

  // OnMount event
  onMount(() => {
    // Let's check if we have current AppId
    // token.
    let appId = cookies.get('_current_appId');

    if (appId == null) {
      // We don't have any current AppId, so we
      // need to send user to project chooser page.
      goto('/panel/projects');
    } else {
      // Here we'll redirect user to application's settings panel
      goto(`/panel/settings/${appId}`);
    }
  });
</script>