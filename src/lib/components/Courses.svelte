<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import courses from '$lib/data/courses.json';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import AwardIcon from '@lucide/svelte/icons/award';
</script>

<section id="courses" class="py-24 bg-white">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="02" title="Courses & Certifications" />

		<div class="grid sm:grid-cols-2 gap-4">
			{#each courses as course}
				<article class="border border-border rounded-lg p-5 flex flex-col gap-3">
					<div class="flex items-start gap-3">
						<AwardIcon class="size-4 text-ink-subtle mt-0.5 shrink-0" />
						<div class="flex-1 min-w-0">
							<h3 class="text-sm font-semibold text-ink leading-snug">{course.title}</h3>
							<p class="text-xs text-ink-muted mt-0.5">{course.issuer}</p>
						</div>
						<a
							href={course.credential_url}
							target="_blank"
							rel="noopener noreferrer"
							class="shrink-0 text-ink-subtle hover:text-ink transition-colors"
							aria-label="View credential for {course.title}"
						>
							<ExternalLinkIcon class="size-3.5" />
						</a>
					</div>

					<div class="flex items-center justify-between mt-auto pt-1">
						<div class="flex flex-wrap gap-1.5">
							{#each course.tags as tag}
								<span class="text-xs bg-border/50 px-2 py-0.5 rounded text-ink-muted">{tag}</span>
							{/each}
						</div>
						<span class="font-mono text-xs text-ink-subtle shrink-0 ml-2">{course.date}</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
