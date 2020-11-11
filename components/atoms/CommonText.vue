<template>
  <span class="common-text">{{ text }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.common-text {
  color: gray;
}
</style>
