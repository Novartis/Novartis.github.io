<script>
	import { stores } from '@sapper/app';
	const { session } = stores();
  export let segment;
  let scrollY;
</script>
<style>
  nav {
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    font-weight: 300;
    padding: 0 1em 1px;
    transition: box-shadow 200ms;

    display: flex;
    flex-flow: row nowrap;
  }
  nav.elevated {
    box-shadow:
      0px 0px 0.5rem rgba(0, 0, 0, 0.3),
      0px 1px #eee;
  }
  .brand-logo {
    height: 1em;
    transform: scale(1) translateX(0em);
    transition: transform 600ms ease-in-out;
  }
  ul {
    margin: 0;
    padding: 0;
    flex-shrink: 0;
  }
  ul:first-child {
    flex-grow: 1;
  }
  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }
  li {
    display: block;
    float: left;
  }
  .selected {
    position: relative;
    display: inline-block;
    font-weight: bold;
  }
  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: #0460A9;
    display: block;
    bottom: -1px;
  }
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<svelte:window bind:scrollY={scrollY} />

<nav class:elevated={scrollY > 30} class:accent={!segment}>
  <ul>
    <li>
      <a
        class:selected={!segment}
        href={$session.basepath}
        >NIBR Open Source</a
      >
    </li>
  </ul>
  <ul>
    <li>
      <a href="https://www.novartis.com" target="_blank" rel="nofollow noreferrer">
        <img src="{$session.basepath}/novartis-logo.png" class="brand-logo" alt="Novartis logo" />
      </a>
    </li>
  </ul>
</nav>