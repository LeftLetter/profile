<template>
  <div class="app-card">
    <AppCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppCard from '@/components/molecules/AppCard.vue'

export default Vue.extend({
  components: {
    AppCard,
  },
})
</script>

<style scoped>
.app-card {
  display: grid;
  padding-top: 10px;
  /* place-items: center; */
}
</style>
