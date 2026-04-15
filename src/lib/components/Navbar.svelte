<script lang="ts">
	import { onMount } from 'svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const links = [
		{ label: 'Education', href: '/#education' },
		{ label: 'Projects', href: '/#projects' },
		{ label: 'Research', href: '/#research' },
		{ label: 'Experience', href: '/#experience' },
		{ label: 'Contact', href: '/#contact' }
	];

	onMount(() => {
		const handler = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', handler, { passive: true });
		return () => window.removeEventListener('scroll', handler);
	});
</script>

<nav
	class="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-border {scrolled
		? 'bg-surface/95 backdrop-blur-sm border-opacity-100'
		: 'border-opacity-0'}"
>
	<div class="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
		<a href="/#hero" class="font-mono text-sm text-ink font-semibold tracking-tight">MDC</a>

		<!-- Desktop links -->
		<ul class="hidden md:flex items-center gap-7">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile toggle -->
		<button
			class="md:hidden p-1 text-ink-muted hover:text-ink transition-colors"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle navigation menu"
			aria-expanded={mobileOpen}
		>
			{#if mobileOpen}
				<XIcon class="size-5" />
			{:else}
				<MenuIcon class="size-5" />
			{/if}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden bg-surface border-b border-border">
			<ul class="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-1">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="block text-sm text-ink-muted hover:text-ink transition-colors py-2"
							onclick={() => (mobileOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
