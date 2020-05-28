<script>
	// Let's import TailwindCss styles
	// for all our application.
	import Tailwindcss from '../styles/tailwind.svelte';

	// import
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import { user } from "../config/user.js";
	import Cookie from "cookie-universal";

	// Importing components
	import Spinner from "../components/Loading/Spinner.svelte";

	// Cookie manager
	const cookies = Cookie();

	let tokensSize = 0;
	user.subscribe((value) => {
		if (tokensSize != value.tokens.length) {
			tokensSize = value.tokens.length;

			user.loadProfiles(value.tokens);
		}
	});

	// onMount
	onMount(() => {
		let token = cookies.get('_account_token', 
			{ 
				domain: "account.wavees.co.vu" 
			});
		
		if (token != null) {
			user.setToken(token);
		} else {
			user.setLoaded(true);
		}
	});
</script>

<!-- 
	Page contents
 -->
<main>
	<slot></slot>
</main>