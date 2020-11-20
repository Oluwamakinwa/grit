<template>
  <div :class="{ light }" id="loader-div">
    <img :src="light ? darkLogo : logo" />
  </div>
</template>

<script>
import logo from "@/assets/img/logo.svg";
import darkLogo from "@/assets/img/logo_dark.svg";
export default {
  name: "TheLoader",
  data: () => ({ logo, darkLogo }),
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="sass" scoped>
#loader-div
  background: #0B0C07
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 200
  display: flex
  justify-content: center
  align-items: center
  &.light
    background: white
  img
    animation: float 6s ease-in-out infinite
@keyframes float
  0%
    transform: translateY(0px)
  50%
    transform: translateY(-20px)
  100%
    transform: translateY(0px)
</style>
