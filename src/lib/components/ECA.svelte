<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import eca from '$lib/data/eca.json';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="eca" class="py-24 relative bg-white">
	<div class="max-w-3xl mx-auto px-6 relative z-10">
		<div use:reveal>
			<SectionHeader number="04" title="Extra-Curricular Activities" />
		</div>

		<div class="grid gap-5 mt-8">
			{#each eca as item, i}
				<article
					class="eca-card border border-border rounded-lg p-5 flex flex-col items-start gap-3"
					use:reveal={{ delay: i * 80 }}
				>
					<span
						class="eca-badge inline-block px-3 py-1 text-xs font-medium border border-border rounded-full text-ink-muted"
					>
						{item.role}
					</span>
					
					<div class="w-full">
						<h3 class="text-base font-semibold text-ink sm:text-lg">
							{item.organization}
						</h3>
						
						{#if item.period}
							<p class="text-xs text-ink-subtle mt-1 font-mono">{item.period}</p>
						{/if}
					</div>

					<p class="text-sm leading-relaxed text-ink-muted">
						{item.description}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.eca-card {
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
	.eca-card::after {
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

	.eca-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 6px 20px -4px rgba(17, 17, 17, 0.06),
			0 3px 8px -2px rgba(17, 17, 17, 0.04);
		border-color: #d4d4d8;
		background-color: #fefefe;
	}

	.eca-card:hover::after {
		transform: scaleX(1);
	}

	/* Badge subtle shift */
	.eca-card :global(.eca-badge) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.eca-card:hover :global(.eca-badge) {
		background-color: rgba(17, 17, 17, 0.08); /* bg-ink-muted equivalent roughly, or light ink */
		color: #374151; /* text-ink-muted darker */
	}
</style>
