<template>

  <div style="width:100%;height:370px;position:relative;overflow:hidden">
    <el-carousel trigger="click" style="width:100%;overflow-x:hidden;hight:370px;position:relative" indicator-position="100px;200px">
      <el-carousel-item v-for="item in 4" :key="item" syle="hight:370px;width:100%">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    position:absolute;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
<script type="text/javascript">

  export default{

  }
</script>
