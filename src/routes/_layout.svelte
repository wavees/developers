<script>
	// Let's import TailwindCss styles
	// for all our application.
	import Tailwindcss from '../styles/tailwind.svelte';

	// import
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import { user } from "../config/stores/user.js";
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
		let token = cookies.get('_account_token');
		
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

<svelte:head>
	<link rel="stylesheet" href="./fonts/Junegull/junegull.css">
</svelte:head>

{ #if $user.loaded } 
	<main>
		<slot></slot>
	</main>
{ :else }
	<div style="height: 100vh;" class="w-full flex justify-center items-center">
		<!-- Branding -->
		<div class="flex flex-col justify-center items-center">
			<div class="flex mb-6 items-center">
				<h1 style="font-family: Junegull" class="text-2xl text-bold">wavees</h1>
			</div>

			<Spinner size="25" />
		</div>
	</div>
{ /if }