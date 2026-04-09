<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import profile from '$lib/data/profile.json';
	import MailIcon from '@lucide/svelte/icons/mail';
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';

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

<section id="contact" class="py-24">
	<div class="max-w-3xl mx-auto px-6">
		<SectionHeader number="09" title="Get in Touch" />

		<div class="flex flex-col md:flex-row gap-12 md:gap-20">
			<!-- Left: message + email -->
			<div class="flex-1">
				<p class="text-sm text-ink-muted leading-relaxed mb-8">
					Whether you have a research collaboration idea, a project proposal, or just want to say
					hello — my inbox is always open. I'll try to get back within a day or two.
				</p>

				<div class="flex flex-col sm:flex-row gap-3">
					<button
						onclick={copyEmail}
						class="inline-flex items-center justify-center gap-2.5 text-sm font-mono border border-border px-5 py-3 rounded-lg hover:border-ink text-ink-muted hover:text-ink transition-all duration-200"
					>
						{#if copied}
							<CheckIcon class="size-4 text-green-600" />
							<span class="text-green-600">Copied!</span>
						{:else}
							<CopyIcon class="size-4" />
							<span>{profile.email}</span>
						{/if}
					</button>

					<a
						href="mailto:{profile.email}"
						class="inline-flex items-center justify-center gap-2 text-sm border border-border px-5 py-3 rounded-lg text-ink-muted hover:border-ink hover:text-ink transition-colors duration-200"
					>
						<MailIcon class="size-4" />
						Send Email
					</a>
				</div>
			</div>

			<!-- Right: social links -->
			<div class="shrink-0">
				<p class="text-xs font-mono text-ink-subtle uppercase tracking-widest mb-5">Elsewhere</p>
				<SocialLinks layout="column" showLabels={true} />
			</div>
		</div>
	</div>
</section>
