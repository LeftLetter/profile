<template>
  <div class="link-card">
    <div class="title-area">
      <CommonTitle text="Links" :level="2" visual-level="h6" />
    </div>
    <div class="icon-area">
      <div class="flex-item">
        <a href="https://qiita.com/LeftLetter">
          <CommonImage
            :src="qiitaImage"
            alt="Qiita"
            :width="80"
            :height="80"
          ></CommonImage
        ></a>
      </div>
      <div class="flex-item">
        <a href="https://github.com/LeftLetter">
          <CommonImage
            :src="gitHubImage"
            alt="GitHub"
            :width="80"
            :height="80"
          ></CommonImage
        ></a>
      </div>
      <div class="flex-item">
        <a href="https://atcoder.jp/users/LeftLetter">
          <CommonImage
            :src="atCoderImage"
            alt="AtCoder"
            :width="80"
            :height="80"
          ></CommonImage
        ></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommonImage from '@/components/atoms/CommonImage.vue'
import CommonTitle from '@/components/atoms/CommonTitle.vue'
import QiitaImage from '@/assets/favicon.png'
import GitHubImage from '@/assets/GitHub-Mark-120px-plus.png'
import AtCoderImage from '@/assets/atcoder_logo.svg'

export default Vue.extend({
  components: {
    CommonImage,
    CommonTitle,
  },
  data() {
    return {
      qiitaImage: QiitaImage,
      gitHubImage: GitHubImage,
      atCoderImage: AtCoderImage,
    }
  },
})
</script>

<style scoped>
.link-card {
  width: 90%;
  background-color: #eeeeee;
  padding-top: 5px;
  padding-bottom: 10px;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
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
