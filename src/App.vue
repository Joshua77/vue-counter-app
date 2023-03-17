<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

template
<div class = "flex items-center justify-center gap-x-4">
    button class = "px-4 py-2 text-white bg-blue-600 focus:outline-none"
    click "increment"
    increment
    button
    {{ number }}

    button class = "px-4 py-2 text-white bg-red-600 focus:outline-none"
    click "decrement"
    Decrement
    button
    div

    template


    script
    import { ref } from 'vue';
    export default {
    setup(){
        const number = ref(0);

        function increment(){
        number.value++;
        }

        function decrement(){
        number.value--;
        }
     return { number, increment, decrement };
    },

    };
    script
