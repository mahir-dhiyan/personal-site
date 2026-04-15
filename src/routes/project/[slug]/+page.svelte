<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data }: { data: any } = $props();
	let project = $derived(data.project);

	// Fetch standard image URLS using Vite import.meta.glob
	const imagesGlob = import.meta.glob('/src/lib/assets/*.{jpg,jpeg,png,svg}', { query: '?url', import: 'default', eager: true });

	function getImageUrl(fileName: string) {
		return imagesGlob['/src/lib/assets/' + fileName] || '';
	}
</script>

<svelte:head>
	<title>{project.title} — Mahir Dhiyan Chowdhury</title>
</svelte:head>

<Navbar />

<main class="min-h-screen bg-surface pt-32 pb-24">
	<div class="max-w-4xl mx-auto px-6">
		<article>
			<!-- Header Area: Left aligned text for perfect readability -->
			<header class="mb-14">
				<h1 class="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-5">
					{project.title}
				</h1>
				<div class="flex flex-wrap gap-2 mb-8">
					{#each project.tags as tag}
						<span class="font-mono text-xs bg-surface border border-border px-3 py-1.5 rounded-full text-ink-muted">
							{tag}
						</span>
					{/each}
				</div>
				<p class="text-base md:text-lg text-ink-muted leading-relaxed max-w-4xl">
					{project.long_description}
				</p>
			</header>

			<!-- Images Area: flex column, max widths significantly constrained, height responsive perfectly showing entire uncropped photo -->
			<div class="flex flex-col gap-12 w-full md:max-w-2xl lg:max-w-3xl mx-auto items-center mt-12">
				{#each project.images as imgName}
					<img
						src={getImageUrl(imgName)}
						alt="{project.title} detailed snapshot"
						class="w-auto h-auto max-w-full max-h-[50vh] md:max-h-[500px] rounded-2xl shadow-xl border border-border object-contain"
						loading="lazy"
					/>
				{/each}
			</div>
		</article>
	</div>
</main>

<Footer />
