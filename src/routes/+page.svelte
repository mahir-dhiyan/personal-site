<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Education from '$lib/components/Education.svelte';
	import Courses from '$lib/components/Courses.svelte';
	import ECA from '$lib/components/ECA.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Research from '$lib/components/Research.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import CV from '$lib/components/CV.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hobbies from '$lib/components/Hobbies.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Mahir Dhiyan Chowdhury — CS Student & Researcher</title>
	<meta
		name="description"
		content="Personal website of Mahir Dhiyan Chowdhury — Computer Science student, researcher, and developer based in Dhaka, Bangladesh."
	/>
	<meta property="og:title" content="Mahir Dhiyan Chowdhury" />
	<meta
		property="og:description"
		content="CS student and researcher at BUET. Interested in NLP, distributed systems, and open source."
	/>
</svelte:head>

<Navbar />

<main>
	<Hero />
	<Education />
	<Courses />
	<ECA />
	<Projects />
	<Research />
	<Experience />
	<Skills />
	<CV />
	<Contact />
	<Hobbies />
</main>

<Footer />
