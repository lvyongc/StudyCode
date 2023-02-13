<template>
    <div>
        <!-- 展示相关 -->
        <div class="container">
        <div class="photoHeader">
            <div class="imgContainer">
            <img class="photoName" src="" />
            </div>
            <div class="btnContainer">
            <span class="photoTitle">相册名称</span>
            <button class="mybtn" @click="showUploadView = true">上传照片</button>
            </div>
        </div>

        <div class="photoContainer">
            <template v-for="item in photos">
                <div class="photoItem" :key="item.index">
                    <img :src="item.imgUrl" alt="">
                    <span>
                        {{item.name}}
                    </span>
                </div>
            </template>
        </div>
        </div>
        <!-- 上传相关 -->
        <UploadView
        :visible.sync="showUploadView"
        @upload-completed="handleUploadCompleted"
        ></UploadView>
    </div>
</template>

<script>
    import UploadView from "../components/UploadView.vue"
    import {apiGetPhotos} from '../api';
    export default {
        components:{
            UploadView
        },
        data(){
            return{
                showUploadView : false,
                photos:[]
            }
        },
        
        methods:{
            handleUploadCompleted(){
                this.updatePhotos()
            },
            updatePhotos(){
                apiGetPhotos().then((res)=>{
                // console.log(res);
                this.photos = res.data.photos
                })
            }
        },
        created(){
                this.updatePhotos()
        },
        
    }
</script>

<style lang="scss" scoped>

</style>
