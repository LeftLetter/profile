<template>
  <div class="link-area">
    <LinkCard />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkCard from '@/components/molecules/LinkCard.vue'

export default Vue.extend({
  components: {
    LinkCard,
  },
})
</script>

<style scoped>
.link-area {
  display: grid;
  place-items: center;
}
</style>
