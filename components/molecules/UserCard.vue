<template>
  <div>
    <CommonImage :src="userIcon" shape="circle"></CommonImage>
    <CommonTitle text="@LeftLetter" :level="1" visual-level="h4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommonImage from '@/components/atoms/CommonImage.vue'
import CommonTitle from '@/components/atoms/CommonTitle.vue'
import UserImage from '@/assets/icon_1000x1000.png'

export default Vue.extend({
  components: {
    CommonImage,
    CommonTitle,
  },
  data() {
    return {
      userIcon: UserImage,
    }
  },
})
</script>

<style scoped></style>
