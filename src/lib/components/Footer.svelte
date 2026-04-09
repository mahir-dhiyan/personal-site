<script lang="ts">
	import SocialLinks from './SocialLinks.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="py-10 border-t border-border">
	<div
		class="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
	>
		<p class="text-xs text-ink-subtle order-2 sm:order-1">
			© {year} Mahir Dhiyan Chowdhury. Built with SvelteKit.
		</p>
		<div class="order-1 sm:order-2">
			<SocialLinks layout="row" showLabels={false} />
		</div>
		<a
			href="#hero"
			class="text-xs text-ink-subtle hover:text-ink transition-colors order-3"
			aria-label="Back to top"
		>
			Back to top ↑
		</a>
	</div>
</footer>
