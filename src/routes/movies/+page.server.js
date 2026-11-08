import db from '#lib/db.js';

// e) Filme aus der MongoDB laden
export async function load() {
	return {
		movies: await db.getMovies()
	};
}
