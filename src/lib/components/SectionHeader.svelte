<script lang="ts">
	const { number, title }: { number: string; title: string } = $props();
</script>

<div class="mb-10">
	<p class="font-mono text-xs text-ink-subtle mb-2 tracking-widest uppercase">{number}</p>
	<h2 class="text-2xl font-semibold text-ink tracking-tight">{title}</h2>
	<div class="mt-4 h-px bg-border"></div>
</div>
