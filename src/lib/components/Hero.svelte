<script lang="ts">
	import profile from '$lib/data/profile.json';
	import SocialLinks from './SocialLinks.svelte';
	import HeroParticles from './HeroParticles.svelte';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import MapPinIcon from '@lucide/svelte/icons/map-pin';
</script>

<section id="hero" class="relative min-h-svh flex items-center pt-14 overflow-hidden">
	<HeroParticles />
	<div class="relative z-10 max-w-3xl mx-auto px-6 py-24 w-full">
		<div class="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16">
			<!-- Text content -->
			<div class="flex-1 text-center md:text-left">
				<p class="font-mono text-xs text-ink-subtle tracking-widest uppercase mb-4">
					Hello, I'm
				</p>
				<h1 class="text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight mb-3">
					{profile.name}
				</h1>
				<p class="text-lg text-ink-muted font-medium mb-6">{profile.role}</p>
				<p class="text-sm text-ink-muted leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
					{profile.bio}
				</p>

				<!-- Location -->
				<div
					class="flex items-center justify-center md:justify-start gap-1.5 text-xs text-ink-subtle mb-6"
				>
					<MapPinIcon class="size-3.5" />
					<span>{profile.location}</span>
				</div>

				<!-- Open to badges -->
				<div class="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
					{#each profile.openTo as item}
						<span class="text-xs border border-border px-3 py-1 rounded-full text-ink-muted"
							>{item}</span
						>
					{/each}
				</div>

				<!-- CTA buttons -->
				<div class="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
					<a
						href="/cv.pdf"
						download
						class="inline-flex items-center gap-2 bg-ink text-surface text-sm px-5 py-2.5 rounded-md hover:bg-ink/80 transition-colors duration-200 font-medium"
					>
						<FileTextIcon class="size-4" />
						Download CV
					</a>
					<a
						href="#contact"
						class="inline-flex items-center gap-2 border border-border text-ink-muted text-sm px-5 py-2.5 rounded-md hover:border-ink hover:text-ink transition-colors duration-200"
					>
						Get in Touch
					</a>
				</div>

				<!-- Social icons -->
				<SocialLinks layout="row" showLabels={false} iconSize="size-6" gap="gap-6" />
			</div>

			<!-- Avatar -->
			<div class="shrink-0">
				<div
					class="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-border bg-border/40"
				>
					<img
						src={profile.avatar}
						alt="Portrait of {profile.name}"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
