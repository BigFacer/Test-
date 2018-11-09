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

    </div>
  </div>

</template>

<script type="text/javascript">

  export default{

    name:"SevenHand",
   data(){
      return{
        searchTabIndex:1,
      }

   },
    methods:{


      login:function () {
        alert(111)
      },
  switchSearchTab:function () {
    let index = event.target.dataset.value;
    this.searchTabIndex=index;
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
    height: 130px;
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


</style>
