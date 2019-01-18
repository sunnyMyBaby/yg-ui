<template>
  <div class="my-layout">
    <MgHeader></MgHeader>
    <div class="nav-wrapper">
      <MgNav></MgNav>
      <MgContent></MgContent>
    </div>
  </div>
</template>

<script>
import MgHeader from './header'
import MgContent from './content'
import MgNav from './nav'

export default {
  components: {
    MgHeader,
    MgContent,
    MgNav
  }
}
</script>

<style scoped>
 .my-layout{
    height: 100%;
    width: 100%;
  }
  .nav-wrapper{
    height: calc(100% - 146px);
    box-sizing: border-box;
    box-shadow: rgba(223, 225, 230, 1) 0px 4px 30px 0px;
    width: 90%;
    margin: 48px auto;
    display: flex;
    padding: 20px;
  }
</style>
