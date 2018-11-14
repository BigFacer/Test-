<template>
  <div>

<!--页头-->
     <div class="Homehand">
       <div class="hmHand">
       <!--<span  v-if="$store.state.isLogin" class="usercolor">{{$store.state.isLogin}}</span>-->
         Hi,<span  @click="login" class="usercolor">请登录</span>,欢迎来到七云
        <p class="handtel"><a href="#">400-920-8599 | 帮助中心</a></p>
       </div>
     </div>

    <!--查询-->
      <div class="seccoin">
        <img src="../../assets/logo.png" alt="" class="logo">
          <div class="industry_header_search_box">
            <ul class="industry_header_search_tab" >
              <li><a  :class="searchTabIndex==1?'active':''" data-value="1" v-on:click="switchSearchTab">商品</a></li>
              <li><a  :class="searchTabIndex==2?'active':''" data-value="2" v-on:click="switchSearchTab">求购</a></li>
              <li><a  :class="searchTabIndex==3?'active':''" data-value="3" v-on:click="switchSearchTab">商铺</a></li>
              <li><a  :class="searchTabIndex==4?'active':''" data-value="4" v-on:click="switchSearchTab">论坛</a></li>
            </ul>
            <input type="text" />
            <a  class="industry_header_search_btn">
              <img src="../../assets/search_icon.png" />
            </a>

          </div>

          <div class="buycar">
            <a>购物车</a>
            <span>1</span>
          </div>
           <div  class="rightimg"  @mouseover="inimg" @mouseout="outimg">

             <div class="sevenerma"  v-show="isdown==false">
               <img src="../../assets/images/index_wechat.png" alt="">
               <span>七彩云微信</span>
             </div>
             <img v-show="isdown==true"  src="../../assets/images/wechat_code.png" alt="" class="bigweimg">
           </div>
      </div>

    <!--路由-->

    <div class="routedivf">
      <div  class="routediv">
        <ul>
          <li>
            <router-link to="/indexhome" >首页</router-link>
          </li>
          <li>
               <router-link to="/productHall">产品大厅</router-link>
          </li>
          <li><router-link to="/industryChain">求购大厅</router-link></li>
          <li><router-link to="/preferredShop">开放商城</router-link></li>
          <!--<li><a v-bind:href="$store.state.wwwPath+'/school'">大学堂</a></li>-->
          <!--<li><a v-bind:href="$store.state.wwwPath+'/bbs'">论坛</a></li>-->
          <!--<li><a v-bind:href="$store.state.wwwPath+'/information'">产业资讯</a></li>-->
          <li>

            <router-link to="/dyeEnterprises" class="link"  >染企档案</router-link>

          </li>
        </ul>
      </div>
    </div>




  </div>

</template>

<script type="text/javascript">

  export default{

    name:"SevenHand",
   data(){
      return{
        searchTabIndex:1,
        isdown:false
      }

   },
    methods:{


      login:function () {
        alert(111)
      },
      switchSearchTab:function () {
        let index = event.target.dataset.value;
        this.searchTabIndex=index;
      },
      inimg:function () {
         this.isdown=true;

      },
      outimg:function () {
          this.isdown=false;


      }

}
  }

</script>
<style  lang="less">
@import "../../style/publiccss.less";
.Homehand{
  font-size: 12px;
  width: 100%;
  background: #F2F2F2;
  height: 30px;
  margin: 0;


}
.hmHand{

  width: 1260px;
  margin: 0 auto;
  line-height: 30px;
}
  .usercolor{
    color: #f10215;
    cursor: pointer;
  }
  .handtel{
    background: url("../../../static/images/head-phone.png") no-repeat;
    text-indent: 30px;
    float: right;
    line-height: 30px;
    background-position-y: 5px;
  }
  .handtel a{

    text-decoration: none;
    color: #000;
  }
  .seccoin{
    height: 150px;
    width: 1260px;
    margin: 0 auto;
  }
  .seccoin img{
   float: left;
    width: 157px;
    height: 97px;
    margin-top: 26px;
  }
.industry_header_search_tab{
  width: 200px;
  height: 25px;
  overflow: hidden;


}
.industry_header_search_box{

  width: 560px;
  height: 60px;
  margin-top: 23px;
  float: left;
  margin-left: 60px;

    input{
      width: 480px;
      height: 35px;
      border: 1px solid  @red-color;
      float: left;
    }
    a img{
      margin: 7px 10px;
      width: 22px;
      height: 22px;

    }
}
  .industry_header_search_tab li a{
    display: block;
    width: 50px;
    height: 25px;
    color: @red-color;
    text-align: center;
    line-height: 25px;
    background-color:@white-color;
    font-size: @fontsize12;

    cursor: pointer;
  }
.industry_header_search_tab li  .active{
  background-color:#f10215;
  color: @white-color;
}
.industry_header_search_btn{
  float: left;
  width: 52px;
  height: 37px;
  background: @red-color;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-left: -4px;

}
.buycar{
      width: 190px;
      height: 35px;
  float: left;
      border: 1px #e3e4e5  solid;
      font-size: @fontsize12;
      margin-top: 49px;
      margin-left: 100px;

      text-align: center;
      line-height: 35px;
      background: url(../../assets/images/industry_header_cart_icon.jpg) 40px 0 no-repeat;
      background-size: 23px 33px;
      a{
      width: 59px;
        margin: 0 auto;
        display: inline-block;
      }
      span{
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color:#f10215;
        color: #fff;
        line-height: 15px;

      }

}

.sevenerma{
      width: 100px;

      margin-top: 55px;
      font-size: @fontsize14;

      img{
        width: 25px;
        height: 25px;
        margin: 0;
      }
}
 .rightimg{

         float: left;
         text-align: center;
         margin-top: 5px;
         margin-left: 45px;
         width: 100px;
         height: 90px;
      .bigweimg{

        width: 90px;
        height: 90px;
        float: left;
        margin-top: 10px;
      }

 }
.routedivf{
  width: 100%;
  border-bottom: 5px solid #f10215;
  height: 42px;
  .routediv{
    width: 1260px;
    height: 42px;
    margin: 0 auto;
    clear: both;
    ul  li a{
      width: 120px;
      height: 42px;
      text-align: center;
      line-height: 42px;
      font-size: @fontsize12;
      color: #333;
    }
.router-link-active{

  background-color:#f10215 ;
  color: white;
    }
  }
}




</style>
