<template>
  <div class="yg-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
      <div class="yg-card__header" v-if="$slots.header || header">
          <slot name="header">{{header}}</slot>
      </div>
      <div class="yg-card__body" :style="bodyStyle">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'YgCard',
  props: {
    header: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
