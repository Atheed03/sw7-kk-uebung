import db from '#lib/db.js';
// g) neuen Film aus dem Formular speichern
export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		let movie = {
			title: data.get('title'),
			year: Number(data.get('year')),
			length: data.get('length')
		};
		await db.createMovie(movie);
		return { success: true };
	}
};
