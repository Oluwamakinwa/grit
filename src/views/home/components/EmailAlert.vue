<template>
  <transition name="fade">
    <div class="email-alert-wrapper">
      <div :class="{ [type]: type }" class="grit-alert">
        {{ content ? content : this.$slots.default }}
      </div>
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
.email-alert-wrapper
  width: 100%
  display: flex
  justify-content: center
  position: fixed
  top: 0
  left: 0
  z-index: 900000
.grit-alert
  background: #1e1f16
  border-radius: 6px
  display: flex
  min-width: 280px
  max-width: 98vw
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
