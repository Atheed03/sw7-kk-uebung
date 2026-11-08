<script>
	let { form } = $props();
</script>

<a href="/movies">Back</a>
<h1>Add a Movie</h1>

<form method="POST" action="?/create">
	<div class="mb-3">
		<label class="form-label" for="title">Name</label>
		<input class="form-control" id="title" name="title" type="text" required />
	</div>
	<div class="mb-3">
		<label class="form-label" for="year">Year</label>
		<input class="form-control" id="year" name="year" type="number" required />
	</div>
	<div class="mb-3">
		<label class="form-label" for="length">Length</label>
		<input class="form-control" id="length" name="length" type="text" placeholder="114 Minuten" />
	</div>
	<button class="btn btn-primary">Add Movie</button>
</form>

{#if form?.success}
	<p class="mt-3">Film gespeichert! <a href="/movies">Zur Übersicht</a></p>
{/if}
