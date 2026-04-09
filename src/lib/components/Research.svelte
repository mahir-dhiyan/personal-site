<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import research from '$lib/data/research.json';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
</script>

<section id="research" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="05" title="Research" />

		<div class="space-y-8">
			{#each research as paper}
				<article class="border-l-2 border-border pl-6">
					<div class="flex items-start justify-between gap-4 flex-wrap mb-2">
						<div class="flex items-center gap-2 flex-wrap">
							<span
								class="font-mono text-xs px-2 py-0.5 rounded-full border border-border text-ink-subtle"
							>
								{paper.status}
							</span>
							<span class="font-mono text-xs text-ink-subtle">{paper.year}</span>
						</div>
						<div class="flex items-center gap-2 shrink-0">
							{#if paper.pdf_url}
								<a
									href={paper.pdf_url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-ink-subtle hover:text-ink transition-colors"
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
									class="text-ink-subtle hover:text-ink transition-colors"
									aria-label="DOI for {paper.title}"
								>
									<ExternalLinkIcon class="size-4" />
								</a>
							{/if}
						</div>
					</div>

					<h3 class="font-semibold text-ink text-sm leading-snug mb-1">{paper.title}</h3>
					<p class="text-xs text-ink-subtle italic mb-1">{paper.venue}</p>
					<p class="text-xs text-ink-muted mb-3">{paper.authors.join(', ')}</p>
					<p class="text-sm text-ink-muted leading-relaxed">{paper.abstract}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
