<script>
	// import
	import { goto } from "@sapper/app";

	// Importing components
	import RoundedButton from "../components/Buttons/RoundedButton.svelte";
	import TransparentButton from "../components/Buttons/TransparentButton.svelte";

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Error - {status}</title>
</svelte:head>

<div style="width: 100%; height: 100vh; z-index: 2" class="bg-gray-100 flex justify-center items-center absolute">
	<div class="flex flex-col justify-center text-center bg-white rounded-lg px-4 py-6 shadow-xl">
		<h1 class="text-2xl text-semibold">Error occured</h1>
		<p>We've had problems that we can't solve yet. Try again.</p>

		<div class="w-full text-center my-6 bg-gray-200 rounded-lg py-4">
			<p>{error.error}</p>
		</div>

		<div class="flex w-full justify-center">
			<RoundedButton classes="mx-2" on:click={(e) => { goto('/') }}>
				😥 Go home
			</RoundedButton>

			<TransparentButton classes="mx-2" on:click={(e) => { location.reload() }}>
				Retry
			</TransparentButton>
		</div>
	</div>
</div>