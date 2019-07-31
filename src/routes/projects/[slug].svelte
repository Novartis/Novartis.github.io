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
  export let project;
</script>

<style>
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
    font-weight: bold;
    line-height: 1.2;
  }

  .content :global(h2) {
    font-size: 1.4em;
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
    color: #0460A9;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    padding: 0 0.5em;
    border-bottom: 1px solid #0460A9;
  }
  .content :global(td) {
    text-align: left;
    padding: 0.25em 0.5em;
  }
</style>

<svelte:head>
  <title>{project.metadata.title}</title>
</svelte:head>

<h1>{project.metadata.title}</h1>

<div class="content">
  {@html project.html}
</div>
