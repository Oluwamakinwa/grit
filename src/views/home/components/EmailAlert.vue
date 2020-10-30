<template>
  <transition name="fade">
    <div :class="{ [type]: type }" class="grit-alert">
      {{ content ? content : this.$slots.default }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "EmailAlert",
  props: {
    type: {
      String
    },
    content: {
      type: String
    }
  }
};
</script>

<style lang="sass" scoped>
.grit-alert
  background: #1e1f16
  position: fixed
  border-radius: 6px
  display: flex
  min-width: 280px
  top: 0
  left: calc(50% - 140px)
  &.fade-enter-active, &.fade-leave-active
    transition: opacity .5s
  &.fade-enter, &.fade-leave-to
    opacity: 0
  padding: 15px 30px
  border: 2px solid white
  color: #c1f8e4
  z-index: 9900
  font-family: "Gordita Medium", sans-serif
  &.error
    border-color: #ff0033
    color: #f1ccd3
</style>
