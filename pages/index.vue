<template>
  <div class="container">
    <!-- ユーザ -->
    <div style="background-color: red; width: 100%; height: 100px"></div>
    <UserArea></UserArea>
    <!-- リンク -->
    <div style="background-color: blue; width: 100%; height: 100px"></div>
    <LinkArea></LinkArea>
    <!-- アプリ -->
    <div style="background-color: green; width: 100%; height: 100px"></div>
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
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
