<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import layout from './layout/layout'
export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style>
@import "./assets/css/index";
#app {
  height: 100%;
}
body,div,dl,dt,dd,ul,ol,li,
form,fieldset,legend,textarea,th,td,input,
select,textarea,button {margin:0;padding:0}
dl,ul,ol,menu,li {list-style:none}
a {text-decoration:none;outline:none}

body, html, .page-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  width:100%;
  height:100%
}
.page-container {
  flex: 1;
  overflow: hidden;
  display: flex;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Heiti SC", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
a {
  color: #409EFF;
  text-decoration: none;
}
code {
  background-color: #f9fafc;
  padding: 0 4px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}
.hljs {
  display: block;
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: solid 1px #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}
.main-cnt {
  margin-top: -80px;
  padding: 80px 0 340px;
  box-sizing: border-box;
  min-height: 100%;
}
.page-container h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
}
.page-container h3 {
  font-size: 22px;
  margin: 55px 0 20px;
}
.page-container h2, h3, h4, h5 {
  font-weight: normal;
  color: #1f2f3d;
}
.page-container h2 a, h3 a, h4 a, h5 a {
  float: left;
  margin-left: -20px;
  opacity: 0;
  cursor: pointer;
}
.page-container p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
  /* margin: 14px 0; */
}
.tip {
  padding: 8px 16px;
  background-color: #ECF8FF;
  border-radius: 4px;
  border-left: #50bfff 5px solid;
  margin: 20px 0;
}
.tip code {
  background-color: rgba(255, 255, 255, .7);
  color: #445368;
}
.warning {
  padding: 8px 16px;
  background-color: #fff6f7;
  border-radius: 4px;
  border-left: #FE6C6F 5px solid;
  margin: 20px 0;
}
.warning  code {
  background-color: rgba(255, 255, 255, .7);
  color: #445368;
}
.demo {
  margin: 20px 0;
}
.hljs-keyword, .hljs-selector-tag, .hljs-title, .hljs-section, .hljs-built_in, .hljs-doctag, .hljs-type, .hljs-tag, .hljs-name, .hljs-selector-id, .hljs-selector-class, .hljs-strong {
  color: #3182bd;
}
.page-component .content table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
}
.page-component .content table th:first-child, .page-component .content table td:first-child {
  padding-left: 10px;
}
.page-component .content table th {
  text-align: left;
  white-space: nowrap;
  color: #666;
  font-weight: 400;
}
.page-component .content table td {
  color: #333333;
}
.page-component .content table td, .page-component .content table th {
  border-bottom: 1px solid #d8d8d8;
  padding: 15px;
  max-width: 250px;
}
</style>
