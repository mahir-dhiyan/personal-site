<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import education from '$lib/data/education.json';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="education" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<div use:reveal>
			<SectionHeader number="01" title="Education" />
		</div>

		<div class="space-y-5">
			{#each education as edu, i}
				<article class="edu-card border border-border rounded-lg p-6" use:reveal={{ delay: i * 100 }}>
					<div class="flex items-start justify-between gap-4 flex-wrap">
						<div>
							<h3 class="edu-title font-semibold text-ink text-base leading-snug">{edu.institution}</h3>
							<p class="text-sm text-ink-muted mt-1">{edu.degree}</p>
						</div>
						{#if edu.gpa}
							<span
								class="edu-gpa font-mono text-xs text-ink-subtle border border-border px-2.5 py-1 rounded shrink-0"
								>GPA {edu.gpa}</span
							>
						{/if}
					</div>

					<div class="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-ink-subtle">
						<span class="flex items-center gap-1.5">
							<CalendarIcon class="size-3.5" />
							{edu.year}
						</span>
						<span class="flex items-center gap-1.5">
							<MapPinIcon class="size-3.5" />
							{edu.location}
						</span>
					</div>

					{#if edu.relevant_courses && edu.relevant_courses.length > 0}
						<div class="mt-4 flex flex-wrap gap-1.5">
							{#each edu.relevant_courses as course}
								<span class="edu-tag text-xs bg-border/50 px-2.5 py-1 rounded text-ink-muted">{course}</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.edu-card {
		position: relative;
		cursor: default;
		transition:
			transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			border-color 0.3s ease;
		overflow: hidden;
	}

	/* Accent bar that slides in from the left */
	.edu-card::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: #111111;
		transform: scaleY(0);
		transform-origin: center;
		transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		border-radius: 0 2px 2px 0;
	}

	.edu-card:hover {
		transform: translateY(-3px);
		box-shadow:
			0 8px 25px -5px rgba(17, 17, 17, 0.06),
			0 4px 10px -3px rgba(17, 17, 17, 0.04);
		border-color: #d4d4d8;
	}

	.edu-card:hover::before {
		transform: scaleY(1);
	}

	/* GPA badge inverts on hover */
	.edu-card :global(.edu-gpa) {
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease,
			color 0.3s ease;
	}

	.edu-card:hover :global(.edu-gpa) {
		background-color: #111111;
		border-color: #111111;
		color: #f8f7f4;
	}

	/* Course tags darken subtly */
	.edu-card :global(.edu-tag) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.edu-card:hover :global(.edu-tag) {
		background-color: rgba(17, 17, 17, 0.08);
		color: #374151;
	}
</style>
