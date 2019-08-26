<script context="module">
	export function preload() {
    this.fetch('manifest.json');
		return this.fetch(`./projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>
<script>
  import ProjectList from '../components/ProjectList.svelte';
  import Welcome from '../components/Welcome.svelte';
  import Callout from '../components/Callout.svelte';
  import Button from '../components/Button.svelte';

  export let projects;
</script>

<style>
  .page-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (min-width: 775px) {
    .page-content {
      padding-left: calc(75px + 1rem);
    }
  }

  .neg-margin > :global(*) {
    margin: 1rem -2rem 0;
  }
</style>

<svelte:head>
  <title>NIBR Open Source</title>
  <meta property="og:title" content="NIBR Open Source">
  <meta property="og:description" content="We believe in the power of open-sourced, global collaboration for the greater good.">
  <meta property="og:image" content="https://opensource.nibr.com/social-preview.png">
  <meta property="og:url" content="https://opensource.nibr.com/">
  <meta name="twitter:card" content="summary_large_image">
<meta property="og:site_name" content="NIBR Open Source">
</svelte:head>

<Welcome>
  The Novartis Institutes for BioMedical Research (NIBR) is pioneering new informatics tools for drug discovery. We believe in the power of open-sourced, global collaboration for the greater good. Join us to help patients worldwide.
</Welcome>

<div class="page-content">
  <h1>Projects</h1>
  <ProjectList {projects} />
</div>

<div class="neg-margin">
  <Callout />
</div>