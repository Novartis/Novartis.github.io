<style>
  @keyframes fadein-lg {
    from {
      transform: translate(-9rem);
      opacity: 0;
    }
    to {
      transform: translate(-10rem);
      opacity: 1;
    }
  }
  @keyframes fadein-md {
    from {
      transform: translate(-4rem);
      opacity: 0;
    }
    to {
      transform: translate(-5rem);
      opacity: 1;
    }
  }
  @keyframes fadein-sm {
    from {
      transform: translate(1rem);
      opacity: 0;
    }
    to {
      transform: translate(0rem);
      opacity: 1;
    }
  }

  .wrapper {
    display: grid;
    grid-template-rows: 2rem 1fr 2rem;
    grid-template-columns: minmax(0, 20rem) 1fr;
  }

  .callout {
    background-color: #0460A9;
    color: white;

    z-index: 10;
    padding: 1rem;
    max-width: 100%;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    animation: fadein-sm 400ms;
  }

  .bg {
    z-index: 1;
    grid-row: 1 / 4;
    grid-column: 1 / 3;
    background-size: cover;
  }

  a {
    font-weight: bold;
    white-space: nowrap;
    text-decoration: none;
    text-decoration-skip: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a::after {
    content: ' →';
  }

  h2 {
    margin-top: 0;
  }

  @media screen and (min-width: 775px) {
    .callout {
      transform: translate(-5rem);
      animation: fadein-md 400ms;
    }
  }

  @media screen and (min-width: 1200px) {
    .callout {
      transform: translate(-10rem);
      animation: fadein-lg 400ms;
    }
  }
</style>

<script>
import { stores } from '@sapper/app';
const { session } = stores();
</script>

<div class="wrapper">
  <div class="callout">
    <h2>NIBR Open Source</h2>
    <p><slot></slot></p>
    <a href="https://novartis.com/" target="_blank" rel="nofollow noreferrer">
      Read about our work
    </a>
  </div>
  <div class="bg" style="background-image: url('{$session.basepath}/opensource-bg.jpeg');" />
</div>