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

            <swiper :options="swiperOptionright"  style="width:820px;margin: 0 auto;">
              <swiper-slide v-for="enqItem in enquiryList"  >
                <div class="icolors-purchase-box-company "  >
                  <img src="../../assets/images/index_offering.png" class="index_offering" v-if="enqItem.status == '1'" />
                  <img src="../../assets/images/index_finished.png"  class="index_offering" v-else />
                  <div >
                    <p class="purchase-box-company-title">{{enqItem.productName_short}}</p>
                    <p class="purchase-box-company-num">数量:&nbsp;{{enqItem.num}}{{enqItem.numUnit == 'null'||enqItem.numUnit == undefined ? 'KG' : enqItem.numUnit}}&nbsp;地区:{{enqItem.locationCity}}&nbsp;{{enqItem.locationProvince}}</p>
                    <p class="purchase-box-company-time" v-show="enqItem.status == '1'" >剩余时间:


                      <span v-show='enqItem.surplusDay != undefined&&enqItem.surplusDay != null'><b>{{enqItem.surplusDay}}</b>天</span>
                      <span v-show='enqItem.surplusHour != undefined&&enqItem.surplusHour != null'><b>{{enqItem.surplusHour}}</b>小时</span>
                      <span v-show='enqItem.surplusMin != undefined&&enqItem.surplusMin != null'><b>{{enqItem.surplusMin}}</b>分</span>
                      <span v-show='enqItem.surplusSec != undefined&&enqItem.surplusSec != null'><b>{{enqItem.surplusSec}}</b>秒</span>
                    </p>

                  </div>
                  <div style="float:right;    margin-right: 15px;">
                    <a class="purchase-box-company-btn" @click="atOffer(enqItem.id,enqItem.status)" >立即报价</a>
                    <p class="purchase-box-company-has">已有<b>{{enqItem.offerNum}}</b>家报价</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev " slot="button-prev"></div>
            <div class="swiper-button-next " slot="button-next"></div>

          </div>

          </div>

        </div>

      </div>


      <div class="openmarket">

            <p class="hotgtitle ">

                <span>开放商城</span>
                <span>全部商品 ></span>

            </p>
            <div class="marketleft">
                  <img src="../../assets/images/open_mall.jpg" alt="">

            </div>
            <div class="marketright">

                <!--<div class="icolors-openmall-company" v-for="mall in mallList" @click="toShop(mall.id)" >-->
                  <!--<img  :src="$store.state.imgPath + mall.logo" width="70" height="60" />-->
                  <!--<span class="icolors-openmall-company-title">{{mall.name}}</span>-->
                  <!--<p v-if="mall.businessList" class="icolors-openmall-company-main"  :class="mall.businessList.length != '0' ? 'text-center' : 'text-left'" >-->
                    <!--主营 :-->
                    <!--<span v-if="mall.businessList" v-for="(mallList,mallItem) in mall.businessList" v-show="mallItem < 2"  >{{mallList.value}}、</span>-->
                  <!--</p>-->
                <!--</div>-->
                        <div class="icolors-openmall-company">
                            <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                            <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                            <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
                        </div>
                        <div class="icolors-openmall-company">
                          <img  src="http://static.i7colors.com/market/logoImg/1522827992678UB42KY.jpg" width="70" height="60" />
                          <span class="icolors-openmall-company-title">徐州开达精细化工有限公司</span>
                          <p class="icolors-openmall-company-main">主营:还原系列染料、染料中间体</p>
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
       swiperOptionright:{
         autoplayDisableOnInteraction: true,
         autoplay : {
           disableOnInteraction: false, //用户操作后是否禁止自动循环
           delay: 5000 //自自动循环时间
         }, //可选选项，自动滑动
         slidesPerView : 2,
         slidesPerColumn : 3,
         navigation:{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },

         //slidesPerGroup : 6,
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
       ,
       enquiryList:[
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },
         {
           companyName: "潍坊冠华化工有限公司 ",
           createAtString: "2018-11-20 15:04:10",
           createdAt: "Nov 20, 2018 3:04:10 PM",
           creditLevel: "4",
           deliveryDate: "Nov 23, 2018 12:00:00 AM",
           deliveryDateString: "2018-11-23",
           enquiryOfferTimes: 0,
           enquiryTimes: 3,
           id: 1470,
           locationCity: "潍坊市",
           locationProvince: "山东省",
           num: 1000,
           numUnit: "KG",
           offerNum: 0,
           pack: "25KG/箱",
           paymentPeriod: "货到付款",
           paymentPeriodString: "货到付款",
           paymentType: "银行承兑",
           productCli1: 1,
           productCli1Name: "染料",
           productCli2: 25,
           productCli2Name: "活性染料",
           productName: "活性黑WNN",
           productName_short: "活性黑WNN",
           publishType: "企业发布",
           status: "1",
           surplusDay: "2",
           surplusHour: "8",
           vipLevel: "1"
         },





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


<style  lang="less" scoped >
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
  .contner{
    padding-top: 15px;
    width:1260px;
    margin:0 auto;

      .hotgoods{
        width: 100%;
        height:380px;
        margin-bottom: 15px;
         border:1px solid #e3e4e5;

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
                position: relative;

              }
        }



      }


  }



  /*开放商城*/
.openmarket{

  width: 1256px;
  height: 378px;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 1px solid #e3e4e5;
    .hotgtitle{
      margin-bottom: 0;
    }
    div{

      float: left;

    }
    .marketleft{
      width: 266px;

      img{
        width:266px;
        height: 327px;
      }
    }
}

  .icolors-openmall-company{width:197px;height:163px;float: left;text-align: center; cursor: pointer;
    border-bottom: 1px solid #e3e4e5;border-right: 1px solid #e3e4e5;}
  .icolors-openmall-company img{    margin: 20px auto 10px auto;}
  .icolors-openmall-company-title{overflow:hidden;font-weight: bold;font-size: @fontsize15;width:120px;height: 40px;margin:0 auto;    display:block;}
  .icolors-openmall-company-main{ padding-left: 10px;font-size: @fontsize12;color:#666;margin-top:6px;}
  .icolors-purchase-box-company{position: relative; margin-top: 5px;width:390px;height:95px;padding: 10px 15px;border:1px solid @borderColor;display: inline-block;}
  .icolors-purchase-box-company div{float: left;}

  .marketright{float:left;    width: 988px;}
  .marketright div:nth-child(5){border-right: none;}
  .marketright div:nth-child(6){border-bottom: none;}
  .marketright div:nth-child(7){border-bottom: none;}
  .marketright div:nth-child(8){border-bottom: none;}
  .marketright div:nth-child(9){border-bottom: none;}
  .marketright div:nth-child(10){border-bottom: none;border-right: none;}

</style>
