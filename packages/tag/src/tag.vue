<template>
  <transition name="yg-zoom-in-center">
    <div  class="yg__tag" :class="'yg__tag--'+color">
      <span class="yg__tag--desc"><slot></slot></span>
      <i class="yg-icon-close2 yg__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
export default{
  name: 'YgTag',
  props: {
    closable: Boolean,
    color: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      isclosed: false
    }
  },
  methods: {
    hiddenTag () {
      this.isclosed = true
      this.$emit('close')
    }
  }
}

</script>
