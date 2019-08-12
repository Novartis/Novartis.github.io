<script>
import ProjectSection from './ProjectSection.svelte';
import { fade } from 'svelte/transition';
export let projects;

</script>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
    grid-column-gap: 1rem;
  }
</style>

<div class="wrapper" in:fade={{delay: 1}}>
  {#each projects as project, index}
    <ProjectSection title={project.metadata.title} slug={project.slug} icon={project.metadata.icon} index={index}>
      {project.metadata.summary}
    </ProjectSection>
  {/each}
</div>