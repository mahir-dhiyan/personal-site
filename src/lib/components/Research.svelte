<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import research from '$lib/data/research.json';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="research" class="py-24 bg-white relative">
	<div class="max-w-3xl mx-auto px-6 relative z-10">
		<div use:reveal>
			<SectionHeader number="06" title="Research" />
		</div>

		<div class="grid gap-5 mt-8">
			{#each research as paper, i}
				<article
					class="research-card border border-border rounded-lg p-5 flex flex-col items-start gap-3"
					use:reveal={{ delay: i * 80 }}
				>
					<span
						class="research-badge inline-block px-3 py-1 text-xs font-medium border border-border rounded-full text-ink-muted"
					>
						{paper.status}
					</span>
					
					<div class="w-full relative">
						<h3 class="text-base font-semibold text-ink sm:text-lg pr-12">
							{paper.title}
						</h3>
						
						<div class="absolute right-0 top-0 flex items-center gap-2">
							{#if paper.pdf_url}
								<a
									href={paper.pdf_url}
									target="_blank"
									rel="noopener noreferrer"
									class="research-link text-ink-subtle hover:text-ink transition-colors"
									aria-label="PDF for {paper.title}"
								>
									<FileTextIcon class="size-4" />
								</a>
							{/if}
							{#if paper.doi_url}
								<a
									href={paper.doi_url}
									target="_blank"
									rel="noopener noreferrer"
									class="research-link text-ink-subtle hover:text-ink transition-colors"
									aria-label="DOI for {paper.title}"
								>
									<ExternalLinkIcon class="size-4" />
								</a>
							{/if}
						</div>
						
						<p class="text-xs text-ink-subtle mt-1.5 font-medium italic">{paper.venue} &middot; {paper.year}</p>
					</div>

					<p class="text-sm leading-relaxed text-ink-muted">
						{paper.abstract}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.research-card {
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
	.research-card::after {
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

	.research-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 6px 20px -4px rgba(17, 17, 17, 0.06),
			0 3px 8px -2px rgba(17, 17, 17, 0.04);
		border-color: #d4d4d8;
		background-color: #fefefe;
	}

	.research-card:hover::after {
		transform: scaleX(1);
	}

	/* Badge subtle shift */
	.research-card :global(.research-badge) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.research-card:hover :global(.research-badge) {
		background-color: rgba(17, 17, 17, 0.08); /* bg-ink-muted equivalent roughly, or light ink */
		color: #374151; /* text-ink-muted darker */
	}

	/* External link nudge */
	.research-card :global(.research-link) {
		transition:
			color 0.3s ease,
			transform 0.3s ease;
	}

	.research-card:hover :global(.research-link) {
		color: #111111;
		transform: translateX(2px) translateY(-1px);
	}
</style>
