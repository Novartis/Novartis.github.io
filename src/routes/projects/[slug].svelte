<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`projects/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import {onMount, onDestroy} from 'svelte';
  import Button from '../../components/Button';
  import Callout from '../../components/Callout';
  export let project;

  let trackedElements = [];

  async function elementLoad(el) {
    return new Promise((resolve, reject) => {
      el.onload = () => {
        trackedElements.push(el);
        resolve();
      };
      el.onerror = el.onabort = (error) => reject(error);
      document.head.appendChild(el);
    })
  }

  async function loadScript(src) {
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('type', 'text/javascript');
    scriptEl.src = src;
    await elementLoad(scriptEl);
  }

  async function loadAllScripts(scripts) {
    for (let i = 0; i < scripts.length; i++) {
      await loadScript(scripts[i]);
    }
  }

  async function loadStyle(src) {
    const styleEl = document.createElement('link');
    styleEl.setAttribute('rel', 'stylesheet');
    styleEl.href = src;
    await elementLoad(styleEl);
  }

  async function loadScriptsAndStyles(metadata) {
    const promises = [];

    if (Array.isArray(metadata.scripts)) {
      promises.push(loadAllScripts(metadata.scripts));
    }
    metadata.styles.forEach((style) => {
      promises.push(loadStyle(style));
    });
    
    if (!promises.length) return;
    await Promise.all(promises);

    if (typeof metadata.onMount === 'string') {
      try {
        new Function(metadata.onMount)();
      } catch (err) {
        console.error(err);
      }
    }
  }

  onMount(() => {
    loadScriptsAndStyles(project.metadata);
  });

  onDestroy(() => {
    if (typeof project.metadata.onDestroy === 'string') {
      try {
        new Function(project.metadata.onDestroy)();
      } catch (err) {
        console.error(err);
      }
    }
    trackedElements.forEach((el) => document.head.removeChild(el));
    trackedElements = [];
  });
</script>

<style>
  .summary {
    margin: 0 0 1em;
    padding: 1em;
    border-top: 3px solid black;
    transition: transform 200ms;
    background-color: white;
    box-shadow: -1em 0 white;
  }


	@media screen and (min-width: 775px) {
    .summary {
      float: right;
      width: 20rem;
      transform: translateX(1rem);
    }
  }

	@media screen and (min-width: 1200px) {
    .summary {
      float: right;
      width: 20rem;
      transform: translateX(3rem);
    }
  }

  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{project.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
  */
  .content :global(h1, h2, h3, h4, h5, h6) {
    margin: 0 0 0.5em 0;
    line-height: 1.2;
  }

  h1, .content :global(h1) {
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .content :global(h2) {
    font-size: 2rem;
    font-weight: 400;
  }

  .content :global(:not(h1)) + :global(h2) {
    border-top: 1px solid black;
    padding-top: 1em;
    margin-top: 1em;
  }

  .content :global(h3) {
    color: #0460A9;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .content :global(img) {
    max-width: 100%;
  }

  .content :global(table) {
    margin: 1em 2em;
    border-collapse: collapse;
  }

  .content :global(th) {
    text-align: left;
    padding: 0 0.5em;
  }

  .content :global(thead th) {
    color: #0460A9;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid #0460A9;
  }

  .content :global(td) {
    text-align: left;
    padding: 0.25em 0.5em;
  }

  .callout-wrapper > :global(div) {
    margin-top: 4rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media screen and (min-width: 775px) {
    .callout-wrapper > :global(div) {
      margin-left: calc(-75px - 3rem);
      margin-right: -4rem;
    }
  }
</style>

<svelte:head>
  <title>{project.metadata.title}</title>
</svelte:head>

<h1>{project.metadata.title}</h1>

<div class="summary">
  <h2>Project details</h2>
  <p>Released {new Date(project.metadata.launched).toLocaleDateString()}</p>
  <p>{@html project.metadata.description}</p>
  <Button component="a" href="https://github.com/novartis/{project.metadata.projectName}" target="_blank" rel="nofollow noreferrer">GitHub repo</Button>
</div>

<div class="content">
  {@html project.html}
</div>

<div class="callout-wrapper">
  <Callout />
</div>