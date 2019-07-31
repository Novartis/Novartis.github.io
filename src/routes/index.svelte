<script context="module">
	export function preload() {
		return this.fetch(`./projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>
<script>
  import ProjectList from '../components/ProjectList.svelte';
  import Welcome from '../components/Welcome.svelte';
  export let projects;
</script>

<svelte:head>
  <title>NIBR Open Source</title>
</svelte:head>

<Welcome>
  The Novartis Institutes for BioMedical Research (NIBR) is pioneering new informatics tools for drug discovery. We believe in the power of open-sourced, global collaboration for the greater good. Join us to help patients worldwide.
</Welcome>

<h1>Projects</h1>
<ProjectList {projects} />