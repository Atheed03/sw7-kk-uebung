<script>
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ScreenStack</title>
</svelte:head>

<nav class="navbar navbar-dark bg-dark px-3">
	<a class="navbar-brand" href="/">ScreenStack</a>
	<a class="nav-link text-light me-auto" href="/movies">Movies</a>
</nav>

<div class="container mt-3">
	{@render children()}
</div>

<style>
	:global(body) {
		background-color: black;
		color: white;
	}
</style>
