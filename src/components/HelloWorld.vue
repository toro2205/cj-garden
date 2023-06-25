<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" class="bg-slate-600 p-3 rounded-2xl text-white" @click="count++">count is {{ count }}</button>
  </div>
  <img class="h-10" src="@/assets/3day.svg" alt="">
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
