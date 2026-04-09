<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import education from '$lib/data/education.json';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
</script>

<section id="education" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="01" title="Education" />

		<div class="space-y-5">
			{#each education as edu}
				<article class="border border-border rounded-lg p-6">
					<div class="flex items-start justify-between gap-4 flex-wrap">
						<div>
							<h3 class="font-semibold text-ink text-base leading-snug">{edu.institution}</h3>
							<p class="text-sm text-ink-muted mt-1">{edu.degree}</p>
						</div>
						{#if edu.gpa}
							<span
								class="font-mono text-xs text-ink-subtle border border-border px-2.5 py-1 rounded shrink-0"
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
								<span class="text-xs bg-border/50 px-2.5 py-1 rounded text-ink-muted">{course}</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>
