<script lang="ts">
	import FileDownIcon from '@lucide/svelte/icons/file-down';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="cv" class="py-24 relative">
	<div class="max-w-3xl mx-auto px-6 relative z-10">
		<div class="interactive-card border border-border rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16" use:reveal>
			<div class="flex-1 text-center md:text-left">
				<p class="font-mono text-xs text-ink-subtle uppercase tracking-widest mb-2">
					09 · Download
				</p>
				<h2 class="text-2xl font-semibold text-ink tracking-tight mb-3">Curriculum Vitae</h2>
				<p class="text-sm text-ink-muted leading-relaxed max-w-sm">
					A comprehensive overview of my academic background, professional experience, research, and
					skills.
				</p>
			</div>
			<a
				href="/cv.pdf"
				download
				class="inline-flex items-center gap-2.5 bg-ink text-surface text-sm px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 shrink-0 font-medium"
			>
				<FileDownIcon class="size-4" />
				Download PDF
			</a>
		</div>
	</div>
</section>

<style>
	.interactive-card {
		position: relative;
		cursor: default;
		transition:
			transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
			border-color 0.3s ease,
			background-color 0.3s ease;
		overflow: hidden;
	}

	.interactive-card::after {
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

	.interactive-card:hover {
		transform: translateY(-2px);
		box-shadow:
			0 10px 25px -5px rgba(17, 17, 17, 0.05),
			0 8px 10px -6px rgba(17, 17, 17, 0.01);
		border-color: #d4d4d8;
		background-color: #fefefe;
	}

	.interactive-card:hover::after {
		transform: scaleX(1);
	}
</style>
