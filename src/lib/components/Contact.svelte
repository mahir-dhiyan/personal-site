<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import profile from '$lib/data/profile.json';
	import MailIcon from '@lucide/svelte/icons/mail';
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import { reveal } from '$lib/actions/reveal';

	let copied = $state(false);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(profile.email);
			copied = true;
			setTimeout(() => (copied = false), 2000);
		} catch {
			window.location.href = `mailto:${profile.email}`;
		}
	}
</script>

<section id="contact" class="py-24 relative">
	<div class="max-w-3xl mx-auto px-6 relative z-10">
		<div use:reveal>
			<SectionHeader number="10" title="Get in Touch" />
		</div>

		<div class="interactive-card border border-border rounded-lg p-8 md:p-12 mt-8 flex flex-col md:flex-row gap-12 md:gap-20" use:reveal={{ delay: 100 }}>
			<!-- Left: message + email -->
			<div class="flex-1">
				<p class="text-sm text-ink-muted leading-relaxed mb-8">
					Whether you have a research collaboration idea, a project proposal, or just want to say
					hello — my inbox is always open. I'll try to get back within a day or two.
				</p>

				<div class="flex flex-col sm:flex-row gap-4">
					<button
						onclick={copyEmail}
						class="inline-flex items-center justify-center gap-2.5 text-sm font-mono border border-border px-5 py-3 rounded-lg bg-surface hover:bg-surface/50 hover:shadow-sm transition-all duration-200"
					>
						{#if copied}
							<CheckIcon class="size-4 text-green-600" />
							<span class="text-green-600">Copied!</span>
						{:else}
							<CopyIcon class="size-4" />
							<span class="text-ink">{profile.email}</span>
						{/if}
					</button>

					<a
						href="mailto:{profile.email}"
						class="inline-flex items-center justify-center gap-2 text-sm bg-ink text-surface px-6 py-3 rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 font-medium whitespace-nowrap"
					>
						<MailIcon class="size-4" />
						Send Email
					</a>
				</div>
			</div>

			<!-- Right: social links -->
			<div class="shrink-0 flex flex-col justify-center">
				<p class="text-xs font-mono text-ink-subtle uppercase tracking-widest mb-5">Elsewhere</p>
				<SocialLinks layout="column" showLabels={true} gap="gap-3" />
			</div>
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
