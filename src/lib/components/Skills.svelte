<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import skills from '$lib/data/skills.json';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="skills" class="py-24 bg-white">
	<div class="max-w-3xl mx-auto px-6">
		<div use:reveal>
			<SectionHeader number="08" title="Skills" />
		</div>

		<div class="space-y-7">
			{#each Object.entries(skills) as [category, items], i}
				<div use:reveal={{ delay: i * 80 }}>
					<h3 class="text-xs font-mono text-ink-subtle uppercase tracking-widest mb-3">
						{category}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each items as skill}
							<span
								class="text-sm border border-border px-3 py-1.5 rounded-md text-ink-muted hover:border-ink hover:text-ink transition-colors duration-200 cursor-default"
								>{skill}</span
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
