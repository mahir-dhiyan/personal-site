<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import hobbies from '$lib/data/hobbies.json';
</script>

<section id="hobbies" class="py-24 bg-white">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="10" title="Beyond the Screen" />

		<p class="text-sm text-ink-muted leading-relaxed mb-10 max-w-xl">
			{hobbies.intro}
		</p>

		<div class="grid sm:grid-cols-2 gap-4">
			{#each hobbies.items as hobby}
				<div class="flex items-start gap-4 p-5 border border-border rounded-lg">
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
