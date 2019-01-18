<script>
  var iconList = require('../svg.icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    },
    methods: {
      ttt() {
        alert(3)
      }
    }
  }
</script>
<style scoped lang="less">
  .demo-icon .source > button {
    margin: 0 20px;
  }
  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    .icon {
      color: #606266;
      height: 80px;
      line-height: 95px;
    }
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
      font-size: 14px;
    }
  }
  .big-icon {
    display: inline-block;
    margin-right: 20px;
  }
</style>
## Icon 图标

基于vue-svgicon封装的通用的Vue Icon组件。

### 使用方法

直接通过设置属性name为 `poi` 来使用即可， 可通过设置属性来设置icon的颜色、大小和方向，例如:

```html
<meg-icon name="poi"></meg-icon>
```

<div class="docs-demo-wrapper">
  <span class="big-icon">
    <meg-icon @click="ttt" name="poi" width="50" height="50" color="#409EFF"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="poi" width="100" height="100" color="#409EFF"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="dispenser_manage_menu" width="100" height="100" color="#f56c6c"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="camera_place" width="100" height="100" color="#D9D9D9 #f56c6c #f56c6c #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <el-button type="primary">
      <meg-icon name="mission_search" width="18" height="18"></meg-icon>
      <span>检索</span>
    </el-button>
  </span>
  <span class="big-icon">
    <meg-icon name="rank_1" width="100" height="100" color="#FBC647 #F3BC39"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="alert" width="100" height="100" color="#f56c6c #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="user_about" width="100" height="100" color="#f56c6c"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="direction" width="100" height="100" color="#D8D8D8 #21539b"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="collection" width="100" height="100" color="rgba(67,80,104,.61) #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="collection" width="100" height="100" color="#21539A #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="collect_menu" width="100" height="100" color="#D8D8D8 red"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="folder" width="100" height="100" color="red #D8D8D8"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="rx_more" width="100" height="100" color="#21539b #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="search" width="100" height="100" color="#ffffff #21539b"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="upload_img" width="100" height="100" color="#21539b #21539b #21539b #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="Circle_default" width="100" height="100" color="#94a9c9 #21539b #21539b white"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="frame_select" width="100" height="100" color="#94a9c9 #21539b white white"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="polygon_default" width="100" height="100" color="#94a9c9 #21539b white white"></meg-icon>
  </span>
</div>

- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

```html
 <meg-icon name="xxxx"></meg-icon>
```
通过设置属性来设置icon的颜色、大小和方向，更多属性设置清查看 [vue-svgicon中文文档](https://github.com/MMF-FE/vue-svgicon/blob/master/README-CN.md#work-on-ie-and-old-browser)。

:::demo `` 
```html
<div>
  <span class="big-icon">
    <meg-icon @click="ttt" name="poi" width="50" height="50" color="#409EFF"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="poi" width="100" height="100" color="#409EFF"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="dispenser_manage_menu" width="100" height="100" color="#f56c6c"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="camera_place" width="100" height="100" color="#D9D9D9 #f56c6c #f56c6c #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <el-button type="primary">
      <meg-icon name="mission_search" width="18" height="18"></meg-icon>
      <span>检索</span>
    </el-button>
  </span>
  <span class="big-icon">
    <meg-icon name="rank_1" width="100" height="100" color="#FBC647 #F3BC39"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="alert" width="100" height="100" color="#f56c6c #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="user_about" width="100" height="100" color="#f56c6c"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="direction" width="100" height="100" color="#D8D8D8 #21539b"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="collection" width="100" height="100" color="rgba(67,80,104,.61) #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="collection" width="100" height="100" color="#21539A #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="collect_menu" width="100" height="100" color="#D8D8D8 red"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="folder" width="100" height="100" color="red #D8D8D8"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="rx_more" width="100" height="100" color="#21539b #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="search" width="100" height="100" color="#ffffff #21539b"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="upload_img" width="100" height="100" color="#21539b #21539b #21539b #ffffff"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="Circle_default" width="100" height="100" color="#94a9c9 #21539b #21539b white"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="frame_select" width="100" height="100" color="#94a9c9 #21539b white white"></meg-icon>
  </span>
  <span class="big-icon">
    <meg-icon name="polygon_default" width="100" height="100" color="#94a9c9 #21539b white white"></meg-icon>
  </span>
</div>
```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="iconname in icons" :key="iconname">
    <div v-if="iconname === 'collection' || iconname === 'rx_more' || iconname === 'alert' || iconname === 'video_mode' || iconname === 'capture_mode' || iconname === 'circle_del' || iconname === 'alarm_subscribe'">
      <div class="icon">
        <meg-icon :name="'' + iconname" width="40px" height="40px" color="#606266 #ffffff" ></meg-icon>
      </div>
    </div>
    <div v-else-if="iconname === 'dot_select'">
      <div class="icon">
        <meg-icon :name="'' + iconname" width="40px" height="40px" color="#ffffff #606266"></meg-icon>
      </div>
    </div>
    <div v-else>
      <div class="icon">
       <!-- #94a9c9 #21539b white white -->
        <meg-icon :name="'' + iconname" width="40px" height="40px" color="#409EFF"></meg-icon>
      </div>
    </div>
    <div class="icon-name">{{ iconname }}</div>
  </li>
</ul>


### Attributes
| 参数       | 说明                        | 类型     | 可选值       | 默认值   |
|---------- |-----------------------------|---------|-------------  |-------- |
| name | icon名,在上面icon展示区域获取 | string  | — |  —  |
| width | icon宽度   | string  | — |  —  |
| height | icon高度               | string  | — |  —  |
| class | icon自定义css样式类                 | string  | — |  —  |
| color       | icon填充色 fill属性 多path/shape空格间隔 可以使用r-color反向设置fill属性| string  | — | inherit继承颜色 |
| fill  | 是否填充 path/shape                    | boolean  | true/false | true |
| scale  | 缩放图标                    | string   |  — | — |

#### 更多参考
[vue-svgicon中文文档](https://github.com/MMF-FE/vue-svgicon/blob/master/README-CN.md#work-on-ie-and-old-browser)
