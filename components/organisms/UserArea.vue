<template>
  <div class="user-card">
    <UserCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserCard from '@/components/molecules/UserCard.vue'

export default Vue.extend({
  components: {
    UserCard,
  },
})
</script>

<style scoped>
.user-card {
  display: grid;
  place-items: center;
}
</style>
