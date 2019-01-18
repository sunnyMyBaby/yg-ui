<template>
  <div class="yg-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot> <!--这里的slot是是包含在yg-breadcrumb全部内容-->
  </div>
</template>

<script>
export default{
  name: 'YgBreadcrumb',

  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      jBreadcrumb: this
    }
  },
  mounted () {
    const items = this.$el.querySelectorAll('.yg-breadcrumb__item') // 这里意境全局安装了yg-breadcrumb__item，不需要在引入了
    console.log(items)
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page')
    }
  }
}
</script>
