<template>
  <span :class="classes">{{ text }}</span>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Color = 'normal' | 'warning' | 'error'
type Size = 's' | 'm' | 'l'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'normal',
    } as PropOptions<Color>,
    size: {
      type: String,
      default: 'm',
    } as PropOptions<Size>,
  },
  data() {
    return {
      classes: {
        [this.color]: true,
        [this.size]: true,
      },
    }
  },
  methods: {
    setColor(): void {
      if (this.color) {
        this.classes[this.color] = true
      }
    },
    setSize(): void {
      if (this.size) {
        this.classes[this.size] = true
      }
    },
  },
})
</script>

<style scoped>
.normal {
  color: gray;
}
.warning {
  color: orange;
}
.error {
  color: red;
}
.s {
  font-size: 12px;
}
.m {
  font-size: 16px;
}
.l {
  font-size: 20px;
}
</style>
