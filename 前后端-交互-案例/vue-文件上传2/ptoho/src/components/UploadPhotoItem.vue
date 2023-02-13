<template>
  <div class="uploadPhotoItem">
    <span class="myProgress" v-show="showProgress">
    </span>
    <img :src="imgSrc" />
    <span class="pictureName">
      {{ file.name }}
    </span>
  </div>
</template>

<script>
import { apiUpload } from "../api";
export default {
  props: ["file"],
  data() {
    return {
      imgSrc: "",
      percent: 0,
    };
  },
  computed: {
    showProgress() {
      return this.percent > 0 && this.percent < 100;
    },
  },
  created() {
    // 获取图片的base64设置成预览图
    const render = new FileReader();
    render.onload = () => {
      // base64
      this.imgSrc = render.result;
    };
    render.readAsDataURL(this.file);
    // base64 -> img src
  },
  methods: {
    // 调用上传接口
    async upload() {
      return apiUpload(this.file);
    },
  },
};
</script>

<style lang="scss" scoped></style>
