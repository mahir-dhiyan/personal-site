<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import education from '$lib/data/education.json';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import AwardIcon from '@lucide/svelte/icons/award';
	import { reveal } from '$lib/actions/reveal';

	import cuetLogo from '$lib/assets/Education_logos/CUET_Logo.png';
	import mohsinLogo from '$lib/assets/Education_logos/Mohsin_Logo.png';
	import ipscLogo from '$lib/assets/Education_logos/IPSC_Logo.png';

	const logoMap: Record<string, string> = {
		'CUET_Logo.png': cuetLogo,
		'Mohsin_Logo.png': mohsinLogo,
		'IPSC_Logo.png': ipscLogo
	};
</script>

<section id="education" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<div use:reveal>
			<SectionHeader number="01" title="Education" />
		</div>

		<div class="space-y-5">
			{#each education as edu, i}
				<article class="edu-card border border-border rounded-xl p-6" use:reveal={{ delay: i * 100 }}>
					<div class="edu-card-inner">
						<!-- Logo -->
						<div class="edu-logo-wrapper">
							<img
								src={logoMap[edu.logo]}
								alt="{edu.institution} logo"
								class="edu-logo"
							/>
						</div>

						<!-- Content -->
						<div class="edu-content">
							<div>
								<h3 class="edu-title font-semibold text-ink text-base leading-snug">{edu.institution}</h3>
								<p class="text-sm text-ink-muted mt-1">{edu.degree}</p>
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
								{#if edu.gpa}
									<span class="edu-gpa flex items-center gap-1.5 font-mono">
										<AwardIcon class="size-3.5" />
										GPA {edu.gpa}
									</span>
								{/if}
							</div>

							{#if edu.relevant_courses && edu.relevant_courses.length > 0}
								<div class="mt-4 flex flex-wrap gap-1.5">
									{#each edu.relevant_courses as course}
										<span class="edu-tag text-xs bg-border/50 px-2.5 py-1 rounded text-ink-muted">{course}</span>
									{/each}
								</div>
							{/if}
						</div>
					</div>
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

	.edu-card-inner {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
	}

	/* Logo container */
	.edu-logo-wrapper {
		flex-shrink: 0;
		width: 56px;
		height: 56px;
		border-radius: 12px;
		background: #f8f7f4;
		border: 1px solid rgba(0, 0, 0, 0.06);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		transition:
			transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.edu-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.edu-content {
		flex: 1;
		min-width: 0;
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

	.edu-card:hover .edu-logo-wrapper {
		transform: scale(1.05);
		box-shadow: 0 2px 8px rgba(17, 17, 17, 0.08);
		border-color: rgba(0, 0, 0, 0.1);
	}

	/* GPA highlight on hover */
	.edu-gpa {
		transition: color 0.3s ease;
	}

	.edu-card:hover .edu-gpa {
		color: #111111;
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

	/* Responsive: stack on very small screens */
	@media (max-width: 480px) {
		.edu-card-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.edu-logo-wrapper {
			width: 48px;
			height: 48px;
		}
	}
</style>
