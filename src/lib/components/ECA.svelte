<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import eca from '$lib/data/eca.json';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
</script>

<section id="eca" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="03" title="Extra-Curricular Activities" />

		<div class="space-y-0">
			{#each eca as item, i}
				<article class="flex gap-6 {i < eca.length - 1 ? 'mb-0' : ''}">
					<!-- Timeline line -->
					<div class="flex flex-col items-center shrink-0 pt-1">
						<div class="w-2 h-2 rounded-full border-2 border-ink-subtle bg-surface shrink-0"></div>
						{#if i < eca.length - 1}
							<div class="w-px flex-1 bg-border mt-2"></div>
						{/if}
					</div>

					<!-- Content -->
					<div class="pb-8 flex-1 min-w-0">
						<div class="flex items-start justify-between gap-4 flex-wrap mb-1">
							<div>
								<span
									class="inline-block text-xs border border-border px-2.5 py-0.5 rounded-full text-ink-muted mb-1.5"
									>{item.role}</span
								>
								<h3 class="font-semibold text-ink text-sm">{item.organization}</h3>
							</div>
							<span class="flex items-center gap-1.5 text-xs text-ink-subtle font-mono shrink-0">
								<CalendarIcon class="size-3.5" />
								{item.period}
							</span>
						</div>
						<p class="text-sm text-ink-muted leading-relaxed">{item.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
