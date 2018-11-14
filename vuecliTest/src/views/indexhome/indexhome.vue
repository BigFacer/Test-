<template>
  <div>

    <!--<el-carousel trigger="click" width="1920px" height="370px">-->
      <!--<el-carousel-item  width="1920px" height="370px"  v-for="itemImg in imgBanner">-->
        <!--<img width="1920px" height="370px" :src="starturl+itemImg" class="index-banner-img" @click="imgSkip()" />-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
    <div class="icolors-banner">
          <el-carousel trigger="click" width="1920px" height="370px">
            <el-carousel-item v-for="item in 4" :key="item"  width="1920px" height="370px" >
              <h3   width="1920px" height="370px"  class="index-banner-img">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
    </div>

    <!--<div class="icolors-banner">-->
      <!--<el-carousel trigger="click" width="1920px" height="370px">-->
        <!--<el-carousel-item v-for="item in 4" width="1920px" height="370px" >-->
           <!--<h3   width="1920px" height="370px"  class="index-banner-img">{{ item }}</h3>-->
         <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    <!--</div>-->
  </div>

</template>
<script type="text/javascript">

 export default{
   data(){
     return {
       starturl:"http://static.i7colors.com/",
       imgBanner:[


              "ad/1541986514937APWCB5.jpg",
             "ad/1532507615755YMK8RV.jpg",
                "ad/1534384203400I8FVRP.jpg",
              "ad/1538036596775C2YJF1.jpg"



       ]

     }

   },
   methods:{
     imgSkip:function(url){
       location.href="www.baidu.html"
     },

   },



 }
</script>


<style>
  .index-banner-img{margin:0 auto;width:1920px;height: 370px;}
  .imgbanner{
width:100%;
    overflow:hidden;
    hight:370px;

  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel{
    position:relative;
    overflow-x:hidden
  }
  .el-carousel__container{

    position:relative;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
