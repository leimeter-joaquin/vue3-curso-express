<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// Creating a ref, it's similar to useState in React.
const someVariableString = ref('Default value')

setTimeout(() => {
  someVariableString.value = 'Changed Value'
}, 5000)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <!-- This is the message that we pass down to HelloWorld.vue, HelloWorld.vue renders it in an h1 tag -->
  <HelloWorld msg="Vite + Vue" />
  <!-- HEre I am rendering another component, another instance of this component, and passing down a variable prop, note the colon in msg, this is a shorthand for v-bind:msg="someVariableString", you'll see it change afteer 5 seconds. -->
  <HelloWorld :msg="someVariableString" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
