/**
 * Scroll-reveal animation using IntersectionObserver.
 * Lightweight, performant, and respects prefers-reduced-motion.
 *
 * Usage in Svelte:
 *   <div use:reveal>               — default fade-up
 *   <div use:reveal={{ delay: 100 }}>  — with 100ms delay
 *   <div use:reveal={{ from: 'left' }}> — slide from left
 */

type RevealDirection = 'up' | 'left' | 'right';

interface RevealOptions {
	/** Delay in ms before animation starts */
	delay?: number;
	/** Direction to animate from */
	from?: RevealDirection;
	/** Distance to translate in px */
	distance?: number;
	/** Duration of animation in ms */
	duration?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { delay = 0, from = 'up', distance = 24, duration = 600 } = options;

	// Respect prefers-reduced-motion
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;

	// Compute initial transform
	const transforms: Record<RevealDirection, string> = {
		up: `translateY(${distance}px)`,
		left: `translateX(-${distance}px)`,
		right: `translateX(${distance}px)`
	};

	// Set initial state
	node.style.opacity = '0';
	node.style.transform = transforms[from];
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translate(0, 0)';
					observer.unobserve(node);

					// Clean up will-change after animation
					setTimeout(() => {
						node.style.willChange = '';
					}, duration + delay + 50);
				}
			}
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -40px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
