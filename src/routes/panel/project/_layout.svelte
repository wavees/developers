<script>
  // import
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import { user } from "../../../config/stores/user.js";
  import { current } from "../../../config/stores/projects.js";

  import Cookie from "cookie-universal";

  // Cookies manager
  const cookies = Cookie();

  // onMount event
  onMount(() => {
    // Here we'll check if we have any users
    // logged in.
    if ($user.current.token == null) {
      // Now we must check if there are any
      // user accounts in current session.
      if ($user.current.tokens > 1) {
        // Redirect user to account chooser page
        goto('/chooser?return=settings');
        return;
      } else {
        // Redirect user to landing page.
        goto('/');
        return;
      };
    }

    // And now we need to check if there are any
    // appId cookies.
    let appId = cookies.get('_current_appId');

    if (appId == null) {
      // We need to redirect user to project
      // chooser page.
      goto('/panel/projects');
    } else {
      // And now, by the way, we need to load initial
      // project information.
      current.loadProject(appId);
    }
  });
</script>

<slot>
</slot>