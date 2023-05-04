<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import { ref } from 'vue';

const html= ref('');
const icon=ref('')


fetch('http://localhost:3000/getPage', {credentials: 'include'})
  .then(response => {
    // handle response
    console.log(response)
    html.value=response.html
    
  })
  .catch(error => {
    // handle error

  });

</script>

<template>
<Navbar />
<Home />
{{ html }}
</template>

<style scoped>
</style>
