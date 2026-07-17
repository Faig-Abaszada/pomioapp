<script setup lang="ts">
    useSeoMeta({
        title: 'POMIO — Master your focus',
        description: 'Focus you can measure. Progress you can see. A simple focus timer with real stats.',
    })


    // const {data: quote} = await useAsyncData('custom_keyyyyyy', () => 
    //   $fetch('https://dummyjson.com/quotes/random')
    // );
    const quote = await $fetch('https://dummyjson.com/quotes/random')
    
</script>
<template>
  <main>
    <h1>Master your focus.</h1>
    <p>Focus you can measure. Progress you can see.</p>
    <p v-if="quote">"{{ quote.quote }}" — {{ quote.author }}</p>
  </main>
</template>