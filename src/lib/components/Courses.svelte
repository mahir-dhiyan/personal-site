<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import courses from '$lib/data/courses.json';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import AwardIcon from '@lucide/svelte/icons/award';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="courses" class="py-24 bg-white">
	<div class="max-w-3xl mx-auto px-6">
		<div use:reveal>
			<SectionHeader number="02" title="Courses & Certifications" />
		</div>

		<div class="grid sm:grid-cols-2 gap-4">
			{#each courses as course, i}
				<article class="course-card border border-border rounded-lg p-5 flex flex-col gap-3" use:reveal={{ delay: i * 80 }}>
					<div class="flex items-start gap-3">
						<AwardIcon class="course-icon size-4 text-ink-subtle mt-0.5 shrink-0" />
						<div class="flex-1 min-w-0">
							<h3 class="text-sm font-semibold text-ink leading-snug">{course.title}</h3>
							<p class="text-xs text-ink-muted mt-0.5">{course.issuer}</p>
						</div>
						<a
							href={course.credential_url}
							target="_blank"
							rel="noopener noreferrer"
							class="course-link shrink-0 text-ink-subtle hover:text-ink transition-colors"
							aria-label="View credential for {course.title}"
						>
							<ExternalLinkIcon class="size-3.5" />
						</a>
					</div>

					<div class="flex items-center justify-between mt-auto pt-1">
						<div class="flex flex-wrap gap-1.5">
							{#each course.tags as tag}
								<span class="course-tag text-xs bg-border/50 px-2 py-0.5 rounded text-ink-muted">{tag}</span>
							{/each}
						</div>
						<span class="course-date font-mono text-xs text-ink-subtle shrink-0 ml-2">{course.date}</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.course-card {
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
	.course-card::after {
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

	.course-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 6px 20px -4px rgba(17, 17, 17, 0.06),
			0 3px 8px -2px rgba(17, 17, 17, 0.04);
		border-color: #d4d4d8;
		background-color: #fefefe;
	}

	.course-card:hover::after {
		transform: scaleX(1);
	}

	/* Award icon highlight */
	.course-card :global(.course-icon) {
		transition:
			color 0.3s ease,
			transform 0.3s ease;
	}

	.course-card:hover :global(.course-icon) {
		color: #111111;
		transform: scale(1.15);
	}

	/* External link nudge */
	.course-card :global(.course-link) {
		transition:
			color 0.3s ease,
			transform 0.3s ease;
	}

	.course-card:hover :global(.course-link) {
		color: #111111;
		transform: translateX(2px) translateY(-1px);
	}

	/* Tags subtle shift */
	.course-card :global(.course-tag) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}

	.course-card:hover :global(.course-tag) {
		background-color: rgba(17, 17, 17, 0.08);
		color: #374151;
	}

	/* Date becomes bolder */
	.course-card :global(.course-date) {
		transition: color 0.3s ease;
	}

	.course-card:hover :global(.course-date) {
		color: #6b7280;
	}
</style>
