<script>
	import { stores } from '@sapper/app';
	const { session } = stores();
	import { fade } from 'svelte/transition';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;

		min-height: 100vh;

		/* leave room for header */
		padding-top: 4rem;
		/* leave room for footer */
		padding-bottom: 3rem;
		/* add some space on right-hand side */
		padding-right: 2rem;
		/* add some space on left-hand side */
		padding-left: 2rem;
	}

	main.homepage {
		max-width: 80rem;
	}

	.bg {
		background-size: auto, 0;
		background-repeat: auto, no-repeat;
	}

	@media screen and (min-width: 775px) {
		.bg {
			/* leave room for background image, plus visual spacing to match right side */
			padding-left: calc(75px + 2rem);

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

<div class="bg" style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 75px, rgba(255, 255, 255, 255) 75px, rgba(255, 255, 255, 255)), url('{$session.basepath}/blue-carbon.png');">
	<main class:homepage={true || !segment}>
		<slot></slot>
	</main>
</div>

<Footer />