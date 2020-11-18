<template>
  <h1 v-if="level === 1" class="">{{ text }}</h1>
  <h2 v-else-if="level === 2">{{ text }}</h2>
  <h3 v-else-if="level === 3">{{ text }}</h3>
  <h4 v-else-if="level === 4">{{ text }}</h4>
  <h5 v-else-if="level === 5">{{ text }}</h5>
  <h6 v-else-if="level === 6">{{ text }}</h6>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Header = 1 | 2 | 3 | 4 | 5 | 6

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    level: { type: Number, default: 1 } as PropOptions<Header>,
    visualLevel: { type: Number, default: 1 } as PropOptions<Header>,
  },
})
</script>

<style scoped>
.h1 {
  font-size: 26px;
}
.h2 {
  font-size: 24px;
}
.h3 {
  font-size: 22px;
}
.h4 {
  font-size: 20px;
}
.h5 {
  font-size: 18px;
}
.h6 {
  font-size: 16px;
}
</style>
