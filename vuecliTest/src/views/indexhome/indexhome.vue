<template>
  <div>


    <div class="icolors-banner imgbanner">
          <el-carousel trigger="click" width="1920px" height="370px">
            <el-carousel-item v-for="item in 4" :key="item"  width="1920px" height="370px" >
              <h3   width="1920px" height="370px"  class="index-banner-img">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
    </div>


    <div class="contner">
      <div  class="hotgoods">
        <p class="hotgtitle ">

          <span>热卖商品</span>
          <span>全部商品 ></span>

        </p>

        <div  class="Hgoodslist">

          <div class="goodsleft">
                <p>
                  <span>
                    成交动态
                  </span>
                </p>
                <ul>
                  <li>商品名称</li>
                  <li style="color: #333">数量</li>
                  <li>交易时间</li>
                </ul>
                <div class="swiperdivs">

                  <swiper :options="swiperOption"   >
                    <swiper-slide v-for="(dynamic,index) in getupdate" style="width:100%">
                      <ul class="lates-dynamic-content" >
                        <li>{{dynamic.productName}}</li>
                        <li>{{dynamic.num}}{{dynamic.numUnit == 'null'||dynamic.numUnit == undefined ? 'KG' : dynamic.numUnit}}</li>
                        <li>{{dynamic.createdAt}}</li>
                      </ul>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                  </swiper>

                </div>
          </div>

          <div class="goodright">


          </div>

        </div>

      </div>
    </div>



  </div>

</template>

<script type="text/javascript">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default{
   data(){
     return {
       starturl:"http://static.i7colors.com/",
       swiperOption: {
         direction: 'vertical',
                  autoplay : {
           disableOnInteraction: false, //用户操作后是否禁止自动循环
           delay: 1000 //自自动循环时间
         }, //可选选项，自动滑动
         mousewheel : true,
         height: 55,
         delay: 0,
         disableOnInteraction: false,
         loop: true,
       },
       imgBanner:[
              "ad/1541986514937APWCB5.jpg",
             "ad/1532507615755YMK8RV.jpg",
                "ad/1534384203400I8FVRP.jpg",
              "ad/1538036596775C2YJF1.jpg"
       ],
       getupdate:
     [
       {id: 4, productName: "阳离子黄SD-S GL 100%", num: "1500", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 5, productName: "黄棕 DRDW	", num: "5000", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 6, productName: "分散黑ECT 300%", num: "13275", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 19, productName: " 活性黑WNN", num: "8450", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 23, productName: "藏青S-2GL 200%", num: "800", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 31, productName: "活性黑WNN", num: "2000", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 35, productName: "活性黄SDE", num: "1000", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 36, productName: " 藏青S-2GL 200%", num: "2500", numUnit: "KG", createdAt: "2018-11-15"},
       {id: 9, productName: "分散红玉SE-2GF 200%", num: "5000", numUnit: "KG", createdAt: "2018-11-14"},
       {id: 10, productName: " 分散红玉S-5BL 100%", num: "2000", numUnit: "KG", createdAt: "2018-11-14"},
        {id: 11, productName: "分散大红GS 200%", num: "1000", numUnit: "KG", createdAt: "2018-11-14"},
        {id: 29, productName: "分散红玉SE-2BR 200%", num: "2000", numUnit: "KG", createdAt: "2018-11-14"},
        {id: 30, productName: "分散红玉SE-2BR 200%", num: "2000", numUnit: "KG", createdAt: "2018-11-14"},
        {id: 8, productName: "活性黑WNN", num: "10000", numUnit: "KG", createdAt: "2018-11-13"},
        {id: 20, productName: "活性黑WNN", num: "6000", numUnit: "KG", createdAt: "2018-11-13"},
       {id: 34, productName: "酸性黑LD 140%", num: "2200", numUnit: "KG", createdAt: "2018-11-13"},
      {id: 39, productName: "分散橙S-EC 100%", num: "10000", numUnit: "KG", createdAt: "2018-11-13"},
      {id: 40, productName: "分散红玉S-5BL 100%", num: "5000", numUnit: "KG", createdAt: "2018-11-13"},
      {id: 41, productName: "活性黑WNN", num: "3600", numUnit: "KG", createdAt: "2018-11-13"},
      {id: 54, productName: "活性翠兰G 266%", num: "500", numUnit: "KG", createdAt: "2018-11-13"},
       {id: 12, productName: "诺可隆 橙S-EC 100%", num: "10700", numUnit: "KG", createdAt: "2018-11-12"},
       {id: 13, productName: "分散红玉SE-2GF 200%", num: "4200", numUnit: "KG", createdAt: "2018-11-12"},
       {id: 24, productName: " 藏青S-2GL 200%", num: "3400", numUnit: "KG", createdAt: "2018-11-12"},
      {id: 25, productName: "橙S-EC 100%", num: "6100", numUnit: "KG", createdAt: "2018-11-12"},
      {id: 26, productName: " 分散黑ECT 300%", num: "13275", numUnit: "KG", createdAt: "2018-11-12"},
      {id: 1, productName: "分散橙S-EC", num: "2000", numUnit: "KG", createdAt: "2018-11-11"},
     {id: 2, productName: "300黑", num: "3000", numUnit: "KG", createdAt: "2018-11-11"}
   ]

     }

   },
   component:{
         swiperSlide,
         swiper,
   },
   methods:{
           imgSkip:function(url){
             location.href="www.baidu.html"
           },
   },
 }
</script>


<style  lang="less">
  @import "../../style/publiccss.less";


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
    position:absolute;
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
  .contner{
padding-top: 15px;
    width:1260px;
    margin:0 auto;

      .hotgoods{
        width: 100%;
        height:380px;
        margin-bottom: 15px;
         border:1px solid #e3e4e5;
        .hotgtitle{

              width: 100%;
              height: 50px;
              margin-bottom: 10px;

              border-bottom: 2px solid #f10215;

              span:first-child{
                   background: url("../../assets/images/hot_icon.jpg")0 15px no-repeat;
                font-size: @fontsize14;
                text-indent: 25px;
                display: inline-block;
                height: 100%;
                line-height: 50px;
                margin-left: 10px;
                cursor: pointer;
              }
              span:nth-child(2){
                float: right;
                display: inline-block;
                height: 100%;
                line-height: 50px;
                margin-right: 10px;
                cursor: pointer;
                font-size: @fontsize14;

              }
        }
        .Hgoodslist{

          width: 100%;
          height:320px ;
              .goodsleft{

                width: 270px;
                height: 305px;
                padding: 0 10px;
                border-right: 1px solid #e3e4e5;
                float: left;
                p{
                  width:249px;
                  background: url("../../assets/images/index_line.jpg")0 10px no-repeat;
                  text-align: center;
                  span{
                    margin: 10px auto;
                    font-size: @fontsize13;
                    display: block;
                    color: #fff;
                    background: #FAA02D;
                    width: 90px;
                    border-radius: 3px;

                  }

                }
                ul {
                 width: 100%;
                  height: 55px;
                  cursor: pointer;
                  font-size: @fontsize12;

                  li{
                          text-align: center;
                    line-height: 55px;

                  }


                }
                  .swiperdivs{
                    overflow: hidden;
                    height:  220px;
                  }
              }
              .goodright{
                width: 988px;
                height: 100%;
                float: left;

              }
        }



      }


  }


</style>
