<template>
  <div class="masking" v-show="visible">
    <div class="addPhotoContainer"></div>
    <div class="addController">
      <h3 class="addTitle">
        上传照片-普通上传(H5)<span class="close" @click="closeView">╳</span>
      </h3>
      <div class="photoTitles">
        <span class="uploadTo">上传到</span>
        <div class="photoSelect">
          <img class="showPhoto" src="public/img/1.jpg" />
          相册名称
        </div>
      </div>

      <!-- 上传按钮 -->
      <div class="showContainer" v-show="showUploadContainer">
        <div class="uploadContainer">
          <span class="fileinput-button">
            <span>上传图片</span>
            <input
              class="imgFile"
              type="file"
              name=""
              multiple="multiple"
              @input="uploadPhoto"
            />
          </span>
          <span class="hint">
            按住Ctrl可多选
          </span>
        </div>
      </div>

      <!-- 显示待上传图片  -->
      <div class="loadContainer" v-show="showWantUploadContainer">
        <div class="wantUpload">
          <template v-for="item in wantUploadPhotos">
            <UploadPhotoItem ref="UploadPhotoItems" :file="item"  :key="item.index">

            </UploadPhotoItem>
          </template>
        </div>
        <div class="addStyle">
          <!-- <span class="fileinput-add">
            <span></span>
            <input class="imgFile-add" type="file" multiple="multiple" />
          </span> -->
        </div>
        <!-- 开始上传按钮 -->
        <div class="bottomStyle">
          <span class="uploadBtn" @click="fetchUpload">开始上传</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadPhotoItem from './UploadPhotoItem.vue';
  export default {
    components:{
      UploadPhotoItem
    },
    props:["visible"],
    data(){
      return{
        wantUploadPhotos:[]
      }
      
    },
    computed:{
      showUploadContainer(){
        return this.wantUploadPhotos.length === 0;
      },
      showWantUploadContainer(){
        return this.wantUploadPhotos.length > 0;
      }
    },
    methods:{
      closeView(){
        // 发送修改谁以及值，父级直接加sync同步修改
        this.$emit("update:visible",false)
      },
      uploadPhoto(e){
        this.wantUploadPhotos = Array.from(e.target.files);
        console.log(1,this.wantUploadPhotos.length)
      },
      async fetchUpload(){
        console.log(12)
        for(const item of this.$refs.UploadPhotoItems){
          await item.upload()
        }
        // 清空，关闭
        this.reset();
        this.uploadCompleted()
      },
      reset(){
        this.wantUploadPhotos = []
      },
      // 通知父级更新图片
      uploadCompleted(){
        this.$emit('upload-completed')
      }
    }
  }
  
</script>

<style lang="scss" scoped>

</style>