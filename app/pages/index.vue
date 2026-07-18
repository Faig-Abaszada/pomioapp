<script setup lang="ts">
    useSeoMeta({
        title: 'POMIO — Master your focus',
        description: 'Focus you can measure. Progress you can see. A simple focus timer with real stats.',
    })


    // useFetch = SSR-aware: serverdə bir dəfə çəkir → nəticəni payload-a key ilə yazır
    // → brauzer hydration-da təzədən çəkmir (ikiqat sorğu + mismatch yox).
    // (Çılpaq $fetch setup-da bunu etmir → boşluq #9-da 4 simptom canlı görüldü.)
    const { data: quote } = await useFetch('https://dummyjson.com/quotes/random')
    
</script>
<template>
  <main>
    <h1>Master your focus.</h1>
    <p>Focus you can measure. Progress you can see.</p>
    <p v-if="quote">"{{ quote.quote }}" — {{ quote.author }}</p>
  </main>
</template>