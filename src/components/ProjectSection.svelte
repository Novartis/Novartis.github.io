<script>
import { stores } from '@sapper/app';
import { fly } from 'svelte/transition';

const { session } = stores();

export let title;
export let slug;
export let icon;
export let index;

$: href = `${$session.basepath}/projects/${slug}`;
</script>

<style>
  .project {
    border-top: 3px solid black;
    padding: 1rem 0;
    margin-bottom: 2rem;
  }
  .project-title {
    margin-top: 0;
  }
  .project-title a {
    color: black;
    text-decoration: none;
  }
  .cta {
    font-weight: bold;
    white-space: nowrap;
    text-decoration: none;
    text-decoration-skip: none;
  }
  .cta:hover {
    text-decoration: underline;
  }
  .cta::after {
    content: ' →';
  }
  .ico-wrap {
    margin: 0 1em;
    text-decoration: none;
  }
  .icon-display {
    padding-top: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    box-shadow: inset 0 0 5px white;
  }
  .ico-wrap:hover .icon-display {
    transform: scale(1.05);
  }
</style>

<div class="project" in:fly={{y: 10, delay: 1 + 100 * index}}>
  {#if false && icon}
    <a {href} {title} class="ico-wrap">
      <div class="icon-display" style="background-image: url('{$session.basepath}{icon}');" />
    </a>
  {/if}
  <h2 class="project-title">
    <a {href} {title}>{title}</a>
  </h2>
  <p><slot></slot></p>
  <a class="cta" {href} title='View {title} project page'>Read more</a>
</div>
