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
</style>

<a class:btn={true} {...$$props}>
  <slot></slot>
</a>