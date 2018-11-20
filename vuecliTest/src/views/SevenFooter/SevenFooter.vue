<template>

  <div  class="footerF">
      <div class="footer">

                <img src="../../assets/images/logo_grey.png" alt="" style="float: left;margin-right: 30px;width: 127px">

                <div class="footerright">
                  <ul class="industry_footer_list">
                    <li>新手指南</li>
                    <li><a v-bind:href="www+'/about?t=1'">新手成长</a></li>
                    <li><a v-bind:href="www+'/about?t=2'">企业注册</a></li>
                    <li><a v-bind:href="www+'/about?t=3'">卖家入门</a></li>
                    <li><a v-bind:href="www+'/about?t=3'">买家入门</a></li>
                    <li><a v-bind:href="www+'/about?t=4'">客服中心</a></li>
                  </ul>

                  <ul class="industry_footer_list">
                    <li>采购商服务</li>
                    <li><a v-bind:href="www+'/i7Service?t=1'">技术检测</a></li>
                    <li><a v-bind:href="www+'/i7Service?t=2'">专家顾问</a></li>
                    <li><a v-bind:href="www+'/i7Service?t=3'">知识库</a></li>
                  </ul>

                  <ul class="industry_footer_list">
                    <li>供应商服务</li>
                    <li><a v-bind:href="www+'/school/industry?t=7'">卖家服务</a></li>
                    <li><a v-bind:href="www+'/school/industry?t=9'">物流平台</a></li>

                  </ul>

                  <ul class="industry_footer_list">
                    <li>七彩云服务</li>
                    <li><a v-bind:href="www+'/information?1'">客服中心</a></li>

                  </ul>
                  <ul class="industry_footer_list">
                    <li>交易安全</li>
                    <li><a v-bind:href="www+'/i7CustomerService'">卖家防骗</a></li>
                    <li><a v-bind:href="www+'/i7CustomerService'">买家防骗</a></li>
                    <li><a v-bind:href="www+'/i7CustomerService'">举报投诉</a></li>
                  </ul>
                  <div class="industry_foooter_qr">
                    <img src="../../assets/images/footer_shop_code.jpg" alt=""><br/>
                    <p>关注微信公众号</p>
                  </div>
                  <div class="industry_footer_bottom">
                    <p>
                      版权声明 | 法律法规 | 咨询建议 上海七彩云电子商务有限公司(沪ICP备15026231号-1)
                      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402000379">
                        <img src="../../assets/images/ga.png" alt="">
                        沪公网安备 31010402000379
                      </a>
                      |
                      <a href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&serial=9031000020160906092334000001198893-SAIC_SHOW_310000-20170103151450733495&signData=MEUCIQCSDhqslSLpZVlugCQ4+Bx3pCI1mUX3caeqykDs8mJePQIgPWe3MChh/8bTeBKCfWK6QEyqyo0Pc1z+O2UfowFARb8=">
                        <img src="../../assets/images/dianzi.png" alt="">
                        电子营业执照：20170103151450733
                      </a>
                    </p>
                    <p>Copyright ? 2015 i7colors.com v1.50 All rights reserved.</p>
                  </div>
                </div>



      </div>


  </div>
</template>
<script type="text/javascript">

  export default{
    name:"SevenFooter"

  }
</script>
<style lang="less">
  .footerF{
    width: 100%;
    background-color: #595957;
    padding-top: 30px;
    height: 284px;
    margin-top: 50px;


    .footer{
              width: 1260px;

              margin: 0 auto;
        .footerright{
          margin-left: 6px;
          float: left;

        }

      ul{
        height: 160px;
        margin-right: 100px;
        margin-bottom: 30px;
        border-left: 1px solid #3d3d3d;
        float:left ;
      li:first-child{
        border-left: 1px solid #f10215;
      }

            li{
              float: none;
             padding-left: 16px;
              margin-bottom: 5px;
                color:#828282;

                 a{

                   color: #828282;
                   font-size: 12px;
                }


            }

      }
      .industry_foooter_qr{
        font-size: 12px;
        overflow: hidden;
        color: #828282;
        float:right;
        img{
          margin-right: 4px;
          width: 121px;
          height: 121px;
        }
          p{
          float: left;
          padding-top: 1px;
          padding-left:7px;
        }
      }
      .industry_footer_bottom{
          clear: both;
          border-top: 1px solid #3d3d3d;
        font-size: 12px;
          color: #828282;
          padding-top: 18px;
            a{
              display: inline-block;
              color:#828282;

            img{
              display: inline-block;
              vertical-align: middle;
            }
          }
    }

    }
  }

</style>
