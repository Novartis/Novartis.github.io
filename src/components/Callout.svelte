<style>
.callout {
  background-color: #0460A9;
  color: white;
  padding: 2rem 1rem;
}

@media screen and (min-width: 775px) {
  .callout {
    padding-left: calc(75px + 3rem);
  }
}

.callout-content {
  max-width: 50rem;
}
</style>

<script>
import Button from './Button';
</script>

<div class="callout">
  <div class="callout-content">
    <slot>
      <h2>Interested in NIBR Engineering?</h2>
      <p>At NIBR, you'll be at the forefront of technology &mdash; helping to shape it, develop it, and make it impactful. Partnering with scientists, our engineers create cutting-edge, state-of-the-art solutions that accelerate drug discovery and ultimately improve patients’ lives.</p>
      <Button variant="primary" href="https://www.novartis.com/careers/careers-research" target="_blank" rel="nofollow noopener">Learn more</Button>
    </slot>
  </div>
</div>