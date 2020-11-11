<template>
  <div class="container">
    <!-- ユーザ -->
    <UserArea></UserArea>
    <!-- アプリ -->
    <AppArea></AppArea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserArea from '@/components/organisms/UserArea.vue'
import AppArea from '@/components/organisms/AppArea.vue'

export default Vue.extend({
  components: {
    UserArea,
    AppArea,
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
