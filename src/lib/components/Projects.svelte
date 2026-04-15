<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import projects from '$lib/data/projects.json';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="projects" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<div use:reveal>
			<SectionHeader number="05" title="Projects" />
		</div>

		<div class="space-y-4">
			<!-- Featured projects -->
			{#each projects.filter((p) => p.featured) as project, i}
				<article class="project-card border border-border rounded-lg p-6" use:reveal={{ delay: i * 100 }}>
					<div class="flex items-start justify-between gap-4 mb-2">
						<h3 class="font-semibold text-ink text-base">{project.title}</h3>
						<div class="flex items-center gap-2.5 shrink-0">
							{#if project.github_url}
								<a
									href={project.github_url}
									target="_blank"
									rel="noopener noreferrer"
									class="project-link text-ink-subtle hover:text-ink transition-colors"
									aria-label="GitHub repository for {project.title}"
								>
									<svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
								</a>
							{/if}
							{#if project.live_url}
								<a
									href={project.live_url}
									target="_blank"
									rel="noopener noreferrer"
									class="project-link text-ink-subtle hover:text-ink transition-colors"
									aria-label="Live demo for {project.title}"
								>
									<ExternalLinkIcon class="size-4" />
								</a>
							{/if}
						</div>
					</div>
					<p class="text-sm text-ink-muted leading-relaxed">{project.description}</p>
					<div class="mt-4 flex flex-wrap gap-1.5">
						{#each project.tags as tag}
							<span class="project-tag font-mono text-xs bg-border/50 px-2.5 py-1 rounded text-ink-muted"
								>{tag}</span
							>
						{/each}
					</div>
					<div class="mt-8">
						<a 
							href="/project/{project.slug}" 
							class="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-ink bg-surface border border-border rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30 transition-all duration-300 group/link"
						>
							View Project
							<svg class="size-4 transform transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
						</a>
					</div>
				</article>
			{/each}

			<!-- Other projects in 2-col grid -->
			<div class="grid sm:grid-cols-2 gap-4 pt-1">
				{#each projects.filter((p) => !p.featured) as project, i}
					<article class="project-card border border-border rounded-lg p-5" use:reveal={{ delay: i * 80 }}>
						<div class="flex items-start justify-between gap-3 mb-2">
							<h3 class="font-medium text-ink text-sm">{project.title}</h3>
							<div class="flex items-center gap-2 shrink-0">
								{#if project.github_url}
									<a
										href={project.github_url}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link text-ink-subtle hover:text-ink transition-colors"
										aria-label="GitHub repository for {project.title}"
									>
										<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
									</a>
								{/if}
								{#if project.live_url}
									<a
										href={project.live_url}
										target="_blank"
										rel="noopener noreferrer"
										class="project-link text-ink-subtle hover:text-ink transition-colors"
										aria-label="Live demo for {project.title}"
									>
										<ExternalLinkIcon class="size-3.5" />
									</a>
								{/if}
							</div>
						</div>
						<p class="text-xs text-ink-muted leading-relaxed">{project.description}</p>
						<div class="mt-3 flex flex-wrap gap-1">
							{#each project.tags as tag}
								<span class="project-tag font-mono text-xs bg-border/50 px-2 py-0.5 rounded text-ink-muted"
									>{tag}</span
								>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.project-card {
		position: relative;
		cursor: default;
		transition:
			transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			border-color 0.3s ease,
			background-color 0.3s ease;
		overflow: hidden;
	}

	/* Top accent line that slides in */
	.project-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: #111111;
		transform: scaleX(0);
		transform-origin: left center;
		transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.project-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 6px 20px -4px rgba(17, 17, 17, 0.06),
			0 3px 8px -2px rgba(17, 17, 17, 0.04);
		border-color: #d4d4d8;
		background-color: #fefefe;
	}

	.project-card:hover::after {
		transform: scaleX(1);
	}

	/* Tag subtle shift */
	.project-card :global(.project-tag) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.project-card:hover :global(.project-tag) {
		background-color: rgba(17, 17, 17, 0.08); /* bg-ink-muted equivalent roughly, or light ink */
		color: #374151; /* text-ink-muted darker */
	}

	/* External link nudge */
	.project-card :global(.project-link) {
		transition:
			color 0.3s ease,
			transform 0.3s ease;
	}

	.project-card:hover :global(.project-link) {
		color: #111111;
		transform: translateX(2px) translateY(-1px);
	}
</style>
