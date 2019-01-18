<template>
  <span class="yg-breadcrumb__item">
    <span
      :class="['yg-breadcrumb__inner', to ? 'is-link': '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="yg-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="yg-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>

<script>
export default{
  name: 'YgBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean
  },
  data () {
    return {
      separator: '',
      separatorClass: ''
    }
  },
  inject: ['jBreadcrumb'],

  mounted () {
    this.separator = this.jBreadcrumb.separator
    this.separatorClass = this.jBreadcrumb.separatorClass
    const link = this.$refs.link // 获取span元素
    link.setAttribute('role', 'link')
    link.addEventListener('click', _ => {
      const {to, $router} = this
      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to)
    })
  }
}
</script>
