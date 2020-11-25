<template>
  <div class="app-card">
    <div class="title-area">
      <CommonTitle text="Apps" :level="2" visual-level="h6" />
    </div>
    <div class="icon-area"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import CommonImage from '@/components/atoms/CommonImage.vue'
import CommonTitle from '@/components/atoms/CommonTitle.vue'

export default Vue.extend({
  components: {
    CommonTitle,
  },
  data() {
    return {}
  },
})
</script>

<style scoped>
.app-card {
  height: 300px;
  width: 90%;
  background-color: #eeeeee;
  padding-top: 5px;
  padding-bottom: 10px;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  justify-self: center;
}
.title-area {
  height: 40px;
  display: grid;
  place-items: center;
}
.icon-area {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.flex-item {
  padding: 10px;
  background-color: white;
}
</style>
