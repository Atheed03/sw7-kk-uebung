import db from '#lib/db.js';
import { redirect } from '@sveltejs/kit';

// f) einzelnen Film per ID laden
export async function load({ params }) {
	return {
		movie: await db.getMovie(params.movie_id)
	};
}

// h) Film löschen und zurück zur Übersicht
export const actions = {
	delete: async ({ request }) => {
		const data = await request.formData();
		await db.deleteMovie(data.get('id'));
		redirect(303, '/movies');
	}
};
