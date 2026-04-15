import { error } from '@sveltejs/kit';
import projects from '$lib/data/projects.json';

export function load({ params }: { params: { slug: string } }) {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project
	};
}
