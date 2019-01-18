## Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

### 基础用法

适用广泛的基础用法。
在`yg-breadcrumb`中使用`yg-breadcrumb-item`标签表示从首页开始的每一级, 提供了一个`separator`属性，<br>
在`yg-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

<div class="demo-box">
  <div class="demo-block">
    <yg-breadcrumb separator="/">
      <yg-breadcrumb-item :to="{path: '/'}">首页</yg-breadcrumb-item>
      <yg-breadcrumb-item><a href="/">活动管理</a></yg-breadcrumb-item>
      <yg-breadcrumb-item>活动列表</yg-breadcrumb-item>
      <yg-breadcrumb-item>活动详情</yg-breadcrumb-item>
    </yg-breadcrumb>
  </div>
</div>

:::demo
```html
<yg-breadcrumb separator="/">
  <yg-breadcrumb-item :to="{path: '/'}">首页</yg-breadcrumb-item>
  <yg-breadcrumb-item><a href="/">活动管理</a></yg-breadcrumb-item>
  <yg-breadcrumb-item>活动列表</yg-breadcrumb-item>
  <yg-breadcrumb-item>活动详情</yg-breadcrumb-item>
</yg-breadcrumb>
```
:::

### 图标分隔符
通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 设置失效

<div class="demo-box">
  <div class="demo-block">
    <yg-breadcrumb separator-class="yg-icon-right">
      <yg-breadcrumb-item :to="{ path: '/' }">首页</yg-breadcrumb-item>
      <yg-breadcrumb-item>活动管理</yg-breadcrumb-item>
      <yg-breadcrumb-item>活动列表</yg-breadcrumb-item>
      <yg-breadcrumb-item>活动详情</yg-breadcrumb-item>
    </yg-breadcrumb>
  </div>
</div>


 :::demo
```html
<yg-breadcrumb separator-class="yg-icon-right">
  <yg-breadcrumb-item :to="{path: '/'}">首页</yg-breadcrumb-item>
  <yg-breadcrumb-item><a href="/">活动管理</a></yg-breadcrumb-item>
  <yg-breadcrumb-item>活动列表</yg-breadcrumb-item>
  <yg-breadcrumb-item>活动详情</yg-breadcrumb-item>
</yg-breadcrumb>
```
:::


### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符 | string | — | 斜杠'/' |
| separator-class | 图标分隔符 class | string | — | - |

### Breadcrumb Item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |
