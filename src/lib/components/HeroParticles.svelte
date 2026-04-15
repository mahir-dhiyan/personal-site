<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	interface Particle {
		x: number;
		y: number;
		radius: number;
		vx: number;
		vy: number;
		opacity: number;
	}

	onMount(() => {
		const ctx = canvas.getContext('2d')!;
		let animationId: number;
		let particles: Particle[] = [];

		const PARTICLE_COUNT = 55;
		const CONNECTION_DISTANCE = 140;
		const SPEED = 0.7;

		function resize() {
			const rect = canvas.parentElement!.getBoundingClientRect();
			canvas.width = rect.width;
			canvas.height = rect.height;
		}

		function initParticles() {
			particles = [];
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					radius: Math.random() * 3.5 + 3,
					vx: (Math.random() - 0.5) * SPEED,
					vy: (Math.random() - 0.5) * SPEED,
					opacity: Math.random() * 0.2 + 0.15
				});
			}
		}

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw connections
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < CONNECTION_DISTANCE) {
						const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.12;
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = `rgba(156, 163, 175, ${alpha})`;
						ctx.lineWidth = 0.6;
						ctx.stroke();
					}
				}
			}

			// Draw particles
			for (const p of particles) {
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(156, 163, 175, ${p.opacity})`;
				ctx.fill();
			}
		}

		function update() {
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;

				// Wrap around edges smoothly
				if (p.x < -10) p.x = canvas.width + 10;
				if (p.x > canvas.width + 10) p.x = -10;
				if (p.y < -10) p.y = canvas.height + 10;
				if (p.y > canvas.height + 10) p.y = -10;
			}
		}

		function animate() {
			update();
			draw();
			animationId = requestAnimationFrame(animate);
		}

		resize();
		initParticles();
		animate();

		const resizeObserver = new ResizeObserver(() => {
			resize();
		});
		resizeObserver.observe(canvas.parentElement!);

		return () => {
			cancelAnimationFrame(animationId);
			resizeObserver.disconnect();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="absolute inset-0 w-full h-full pointer-events-none"
	aria-hidden="true"
></canvas>
