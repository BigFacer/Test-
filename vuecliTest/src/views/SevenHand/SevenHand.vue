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
<style>

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


</style>
