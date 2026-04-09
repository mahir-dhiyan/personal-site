<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import experience from '$lib/data/experience.json';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
</script>

<section id="experience" class="py-24 bg-white">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="06" title="Professional Experience" />

		<div class="space-y-5">
			{#each experience as job}
				<article class="border border-border rounded-lg p-6">
					<div class="flex items-start justify-between gap-4 flex-wrap mb-1">
						<div>
							<h3 class="font-semibold text-ink text-base">{job.role}</h3>
							<p class="text-sm text-ink-muted mt-0.5">{job.company}</p>
						</div>
						<span
							class="text-xs border border-border px-2.5 py-1 rounded-full text-ink-subtle font-mono shrink-0"
							>{job.type}</span
						>
					</div>

					<div class="flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-subtle mb-5">
						<span class="flex items-center gap-1.5">
							<CalendarIcon class="size-3.5" />
							{job.period}
						</span>
						<span class="flex items-center gap-1.5">
							<MapPinIcon class="size-3.5" />
							{job.location}
						</span>
					</div>

					<ul class="space-y-2">
						{#each job.bullets as bullet}
							<li class="flex items-start gap-2.5 text-sm text-ink-muted">
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
