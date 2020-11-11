<template>
  <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    width: { type: Number, default: 200 },
    height: { type: Number, default: 200 },
  },
})
</script>

<style scoped></style>
