<script setup lang="ts">
// You might want to activate word wrap for this, cmd + shift + p -> toggle word wrap.
// In the script we write the javascript/typescript of the component, we can take in props, create variables, emit methods, import libraries, etc.
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <!-- In the template, we write the JSX code that will end up being rendered in the DOM. We can use logic, listen for events, render conditionally and so on... In this component we are taking the variable (or ref) msg and redering it inside an h1 tag. the fact that it is a ref means that when it's value changes the component will re-render and show the new value of msg in the template. In the button we have what is called a "vue directive", @click is a shorthand for v-on:click, there are many more @mousedown, @mouseup, @focus, etc. -->
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style scoped>
/* The style script is where we write the CSS of the component. Note the keyword "scoped", it means taht the css classes will be available only in the template of this component. When built, the class will have an identifier, a class names container here will be different form a class named container in App.vue or any other component. */
.read-the-docs {
  color: #888;
}
</style>
