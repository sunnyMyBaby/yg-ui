<template>
  <div class="yg-nav">
    <div v-for="(title, index) in Object.keys(navConf)" :key="index" class="group-container">
      <p class="yg-nav-title">{{ title }}</p>
      <div class="yg-nav-items" v-for="(nav, index) in navConf[title]" :key="index">
        <router-link :to="{name: nav.name}" v-if="nav.name" :class="$route.name===nav.name ? 'active' : ''">{{nav.desc}}</router-link>
        <p v-else class="yg-nav-group">{{nav.desc}}</p>
        <div v-for="(item, index) in nav.items" :key="index">
          <router-link :to="{name: item.name}" :class="$route.name===item.name? 'active': ''" class="yg-nav-component">{{item.desc}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from './nav.config.json'
export default {
  data () {
    return {
      navConf: navConf
    }
  },
  created () {
  }
}
</script>

<style scoped>
 .yg-nav{
    display: inline-block;
    padding: 0;
    color: #3F536E;
    height: 100%;
    background-color: #fff;
    z-index: 10;
    width: 200px;
    overflow-x: hidden;
  }
  .yg-nav .group-container{
    margin-bottom: 32px;
  }
  .yg-nav .group-container .yg-nav-title{
    color: #8DABC4;
    padding: 0 0px 8px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .yg-nav .group-container .yg-nav-items{
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
  }
  .yg-nav .group-container .yg-nav-items a{
    display: block;
    color: #3F536E;
    padding: 8px 0px;
    position: relative;
    line-height: 1.5;
    cursor: pointer;
    font-weight: normal;
  }
  .yg-nav .group-container .yg-nav-items .yg-nav-group{
    display: block;
    position: relative;
    padding: 6px 0px 6px 0px;
    color: #2C405A;
    font-size: 14px;
    font-weight: bold;
  }
  .yg-nav .group-container .yg-nav-items .yg-nav-component{
    display: block;
    position: relative;
    padding: 6px 24px 6px 0px;
    color: #616367;
    font-size: 14px;
  }
  .yg-nav .group-container .yg-nav-items .yg-nav-component:hover{
    color: #409eff;
  }
  .yg-nav .group-container .yg-nav-items .active{
    color: #409eff;
  }
</style>
