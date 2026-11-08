<script>
	let { data } = $props();
	let movie = data.movie;
</script>

<a href="/movies">Back</a>

{#if movie}
	<h1>{movie.title}</h1>
	<div class="row mt-3">
		<div class="col-sm-4">
			<img class="img-fluid" src={movie.poster} alt={movie.title} />
		</div>
		<div class="col-sm-8">
			<p>Jahr: {movie.year}</p>
			<p>Dauer: {movie.length}</p>
			<p>Cast:</p>
			<ul>
				{#each movie.actors as actor}
					<li>{actor}</li>
				{/each}
			</ul>

			<!-- h) Löschen via Form Action -->
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={movie._id} />
				<button class="btn btn-danger">Delete Movie</button>
			</form>
		</div>
	</div>
{:else}
	<p>Film nicht gefunden.</p>
{/if}
