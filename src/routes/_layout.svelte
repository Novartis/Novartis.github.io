<script>
	import { stores } from '@sapper/app';
	const { session } = stores();
	import { fade } from 'svelte/transition';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;

	$: homepage = !segment;
	$: contentPage = !homepage;
</script>

<style>
	main {
		position: relative;
		box-sizing: border-box;

		min-height: 100vh;
		width: 100%;

		/* leave room for header */
		padding-top: 3.5rem;
		/* leave room for footer */
		padding-bottom: 2.75rem;
	}

	main.homepage {
		/* add some space on right-hand side */
		padding-right: 2rem;
		/* add some space on left-hand side */
		padding-left: 2rem;
	}

  .bg.contentPage {
		padding-left: 1rem;
		padding-right: 1rem;
  }

  @media screen and (min-width: 775px) {
    .bg.contentPage {
			padding-left: calc(75px + 1rem);
			padding-right: 4rem;
    }
	}
	
	.bg {
		background-size: auto, 0;
		background-repeat: auto, no-repeat;
	}

	@media screen and (min-width: 775px) {
		.bg {
			background-position: right, left;
			background-attachment: fixed, fixed;
			background-repeat: auto, repeat-y;
			background-size: cover, 120px;
		}
	}

	:global(a) {
		font-weight: bold;
	}
</style>

<svelte:head>
	<link rel="icon" type="image/ico" href="{$session.basepath}/favicon.ico" />
	<link rel="manifest" href="{$session.basepath}/manifest.json" />
</svelte:head>

<Nav {segment} />

<div class="bg" class:contentPage style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 75px, rgba(255, 255, 255, 255) 75px, rgba(255, 255, 255, 255)), url('{$session.basepath}/blue-carbon.png');">
	<main class:homepage class:contentPage>
		<slot></slot>
	</main>
</div>

<Footer />