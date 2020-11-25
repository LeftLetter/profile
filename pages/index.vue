<template>
  <div class="container">
    <!-- ユーザ -->
    <UserArea class="user-area"></UserArea>
    <!-- リンク -->
    <LinkArea class="link-area"></LinkArea>
    <!-- アプリ -->
    <AppArea class="app-area"></AppArea>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserArea from '@/components/organisms/UserArea.vue'
import LinkArea from '@/components/organisms/LinkArea.vue'
import AppArea from '@/components/organisms/AppArea.vue'

export default Vue.extend({
  components: {
    UserArea,
    LinkArea,
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
.user-area {
  /* background-color: red; */
  width: 100%;
  height: 400px;
}
.link-area {
  /* background-color: blue; */
  width: 100%;
  height: 200px;
}
.app-area {
  /* background-color: green; */
  width: 100%;
  height: calc(100vh - 600px);
}
</style>
