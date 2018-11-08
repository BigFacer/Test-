<template>
  <div id="app">
<seven-hand></seven-hand>
    <router-view/>
    <seven-footer></seven-footer>
  </div>
</template>

<script>
  import  SevenHand from "./views/SevenHand/SevenHand";
  import SevenFooter from "./views/SevenFooter/SevenFooter"
export default {
  name: 'App',
  components: {
    SevenHand,
    SevenFooter
  }
}
</script>

<style>
@import "style/publiccss.less";
</style>
