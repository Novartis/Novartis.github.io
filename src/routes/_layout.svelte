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
		max-width: 60rem;
		margin: 0 auto;
		box-sizing: border-box;

		/* leave room for header */
		padding-top: 4rem;
		/* leave room for footer */
		padding-bottom: 3rem;
		/* add some space on right-hand side */
		padding-right: 2rem;
		/* add some space on left-hand side */
		padding-left: 2rem;
	}

	.bg {
		background-size: 0;
		background-repeat: no-repeat;
	}

	@media screen and (min-width: 775px) {
		.bg {
			/* leave room for background image, plus visual spacing to match right side */
			padding-left: calc(160px + 2rem);

			background-position: left;
			background-attachment: fixed;
			background-repeat: repeat-y;
			background-size: 160px;
		}
	}
</style>

<svelte:head>
	<link rel="icon" type="image/png" href="{$session.basepath}/favicon.ico" />
</svelte:head>

<Nav {segment} />

<div class="bg" style="background-image: url('{$session.basepath}/blue-carbon.png');">
	<main>
		<slot></slot>
	</main>
</div>

<Footer />