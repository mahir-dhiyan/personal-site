<script lang="ts">
	import FileDownIcon from '@lucide/svelte/icons/file-down';
</script>

<section id="cv" class="py-24 bg-white">
	<div class="max-w-3xl mx-auto px-6">
		<div class="border border-border rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
			<div class="flex-1 text-center md:text-left">
				<p class="font-mono text-xs text-ink-subtle uppercase tracking-widest mb-2">
					08 · Download
				</p>
				<h2 class="text-2xl font-semibold text-ink tracking-tight mb-3">Curriculum Vitae</h2>
				<p class="text-sm text-ink-muted leading-relaxed max-w-sm">
					A comprehensive overview of my academic background, professional experience, research, and
					skills. Last updated April 2026.
				</p>
			</div>
			<a
				href="/cv.pdf"
				download
				class="inline-flex items-center gap-2.5 bg-ink text-surface text-sm px-6 py-3 rounded-md hover:bg-ink/80 transition-colors duration-200 shrink-0 font-medium"
			>
				<FileDownIcon class="size-4" />
				Download PDF
			</a>
		</div>
	</div>
</section>
