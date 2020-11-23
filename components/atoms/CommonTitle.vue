<template>
  <h1 v-if="level === 1" :class="classes">{{ text }}</h1>
  <h2 v-else-if="level === 2" :class="classes">{{ text }}</h2>
  <h3 v-else-if="level === 3" :class="classes">{{ text }}</h3>
  <h4 v-else-if="level === 4" :class="classes">{{ text }}</h4>
  <h5 v-else-if="level === 5" :class="classes">{{ text }}</h5>
  <h6 v-else-if="level === 6" :class="classes">{{ text }}</h6>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

type Header = 1 | 2 | 3 | 4 | 5 | 6
type VisualLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    level: { type: Number, default: 1 } as PropOptions<Header>,
    visualLevel: { type: String, default: 'h1' } as PropOptions<Header>,
  },
  data() {
    return {
      classes: {
        [this.visualLevel]: true,
        normal: true,
      },
    }
  },
})
</script>

<style scoped>
.normal {
  color: gray;
}
.h1 {
  font-size: 26px !important;
}
.h2 {
  font-size: 24px !important;
}
.h3 {
  font-size: 22px !important;
}
.h4 {
  font-size: 20px !important;
}
.h5 {
  font-size: 18px !important;
}
.h6 {
  font-size: 16px !important;
}
</style>
