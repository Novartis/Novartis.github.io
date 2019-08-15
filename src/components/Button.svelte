<style>
.btn {
  border: 1px solid black;
  background-color: white;
  color: black;
  transition: color 200ms, background-color 200ms;
  font-weight: bold;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.25em 0.75em;

  white-space: nowrap;
}
.btn:hover {
  background-color: black;
  color: white;
}
.btn.primary {
  border-color: white;
  background-color: #0460A9;
  color: white;
}
.btn.primary:hover {
  background-color: white;
  color: #0460A9;
}
</style>

<script>
  export let variant;

  $: primary = (variant === 'primary');
</script>

<a class:btn={true} class:primary {...$$props}>
  <slot></slot>
</a>