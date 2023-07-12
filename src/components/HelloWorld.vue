<script setup lang="ts">

defineProps<{ msg: string }>()


console.log('test husky');

</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
