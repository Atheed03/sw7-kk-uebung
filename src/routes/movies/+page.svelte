<script>
	let { data } = $props();
</script>

<p class="credits"><i>Daten und Bilder generiert mit ChatGPT und DALL-E</i></p>

<!-- g) Button zur Erfassungsseite -->
<a class="btn btn-primary mb-3" href="/movies/create">Add New Movie</a>

<div class="row mt-3">
	{#each data.movies as movie}
		<div class="col-sm-6 col-md-4 col-lg-3 mb-3">
			<div class="movie">
				<img class="img-fluid" src={movie.poster} alt={movie.title} />
				<div class="details">
					<!-- f) Link zur Detailseite mit ID als Pfadparameter -->
					<a href={'/movies/' + movie._id}>{movie.title}</a>
					<p>Jahr: {movie.year}</p>
					<p>Dauer: {movie.length}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.movie {
		background-color: #444;
		color: white;
	}
	.details {
		padding: 0.5em;
	}
	.details a {
		color: white;
		font-weight: bold;
	}
	.details p {
		margin: 0;
	}
	.credits {
		color: orange;
	}
</style>
