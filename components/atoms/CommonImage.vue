<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :shape="shape"
    :class="classes"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
type Shape = 'box' | 'circle'

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
    shape: {
      type: String,
      default: 'box',
    } as PropOptions<Shape>,
  },
  data() {
    return {
      classes: {
        [this.shape]: true,
      },
    }
  },
})
</script>

<style scoped>
.circle {
  border-radius: 50%;
}
</style>
