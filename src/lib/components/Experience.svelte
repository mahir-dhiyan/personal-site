<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import experience from '$lib/data/experience.json';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import { reveal } from '$lib/actions/reveal';

	// Fetch standard image URLS for company logos using Vite import.meta.glob
	const logosGlob = import.meta.glob('/src/lib/assets/Companies/*.{png,jpg,jpeg,svg}', { query: '?url', import: 'default', eager: true });

	function getLogoUrl(fileName: string) {
		return logosGlob['/src/lib/assets/Companies/' + fileName] || '';
	}
</script>

<section id="experience" class="py-24 relative">
	<div class="max-w-3xl mx-auto px-6 relative z-10">
		<div use:reveal>
			<SectionHeader number="07" title="Professional Experience" />
		</div>

		<div class="space-y-6 mt-8">
			{#each experience as job, i}
				<article class="experience-card border border-border rounded-lg p-6 flex flex-col" use:reveal={{ delay: i * 80 }}>
					<div class="flex items-start justify-between gap-4 flex-wrap mb-1">
						<div class="flex items-center gap-4">
							{#if job.logo}
								<div class="w-10 h-10 shrink-0 rounded border border-border overflow-hidden bg-white shadow-sm flex items-center justify-center p-1">
									<img
										src={getLogoUrl(job.logo)}
										alt="{job.company} logo"
										class="w-full h-full object-contain"
										loading="lazy"
									/>
								</div>
							{/if}
							<div>
								<h3 class="font-semibold text-ink text-base">{job.role}</h3>
								<p class="text-sm text-ink-muted mt-0.5">{job.company}</p>
							</div>
						</div>
						<span
							class="experience-badge text-xs border border-border px-2.5 py-1 rounded-full text-ink-subtle font-mono shrink-0 mt-1 md:mt-0"
							>{job.type}</span
						>
					</div>

					<div class="flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-subtle mb-5 mt-3">
						<span class="flex items-center gap-1.5">
							<CalendarIcon class="size-3.5" />
							{job.period}
						</span>
						<span class="flex items-center gap-1.5">
							<MapPinIcon class="size-3.5" />
							{job.location}
						</span>
					</div>

					<ul class="space-y-2 mt-2">
						{#each job.bullets as bullet}
							<li class="flex items-start gap-2.5 text-sm text-ink-muted leading-relaxed">
								<span class="mt-2 w-1 h-1 rounded-full bg-ink-subtle shrink-0"></span>
								{bullet}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.experience-card {
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
	.experience-card::after {
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

	.experience-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 6px 20px -4px rgba(17, 17, 17, 0.06),
			0 3px 8px -2px rgba(17, 17, 17, 0.04);
		border-color: #d4d4d8;
		background-color: #fefefe;
	}

	.experience-card:hover::after {
		transform: scaleX(1);
	}

	/* Badge subtle shift */
	.experience-card :global(.experience-badge) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.experience-card:hover :global(.experience-badge) {
		background-color: rgba(17, 17, 17, 0.08); /* bg-ink-muted equivalent roughly, or light ink */
		color: #374151; /* text-ink-muted darker */
	}
</style>
