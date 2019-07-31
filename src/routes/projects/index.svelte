<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		}).catch((err) => {
			console.error('***BAM***')
			console.error(err);
		});
	}
</script>

<script>
	import ProjectList from '../../components/ProjectList.svelte';
	import { fly } from 'svelte/transition';
	export let projects;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>NIBR Open Source | Projects</title>
</svelte:head>

<h1>Recent projects</h1>

<ProjectList {projects} />