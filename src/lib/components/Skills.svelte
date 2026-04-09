<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import skills from '$lib/data/skills.json';
</script>

<section id="skills" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="07" title="Skills" />

		<div class="space-y-7">
			{#each Object.entries(skills) as [category, items]}
				<div>
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
