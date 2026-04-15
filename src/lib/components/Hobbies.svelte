<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import hobbies from '$lib/data/hobbies.json';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="hobbies" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<div use:reveal>
			<SectionHeader number="11" title="Beyond the Screen" />
		</div>

		<p class="text-sm text-ink-muted leading-relaxed mb-10 max-w-xl" use:reveal={{ delay: 50 }}>
			{hobbies.intro}
		</p>

		<div class="grid sm:grid-cols-2 gap-4">
			{#each hobbies.items as hobby, i}
				<div class="interactive-card flex items-start gap-4 p-5 border border-border bg-white rounded-lg" use:reveal={{ delay: i * 80 }}>
					<span class="text-2xl leading-none mt-0.5" aria-hidden="true">{hobby.emoji}</span>
					<div>
						<h3 class="font-medium text-ink text-sm mb-1">{hobby.name}</h3>
						<p class="text-xs text-ink-muted leading-relaxed">{hobby.description}</p>
					</div>
				</div>
			{/each}
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
