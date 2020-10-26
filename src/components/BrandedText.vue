<template>
  <div :class="{ dark, small }" class="branded-text">
    <h2 :class="{ small }">
      <slot></slot>
    </h2>
    <h2 :class="{ small }" class="brand-shadow">
      <slot></slot>
    </h2>
  </div>
</template>
<script>
export default {
  name: "BrandedText",
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="sass" scoped>
.branded-text
  position: relative

  h2
    font-family: 'Gordita Black', sans-serif
    color: white
    @media only screen and (min-width: 320px)
      &.small
        font-size: calc(30px + 6 * ((100vw - 320px) / 680))
      &.brand-shadow
        top: 1.5px
        left: 1.5px
      font-size: calc(42px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 354px)
      &.small
        font-size: calc(33px + 6 * ((100vw - 320px) / 680))
      font-size: calc(48px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 399px)
      &.small
        font-size: calc(40px + 6 * ((100vw - 320px) / 680))
      font-size: calc(53px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 425px)
      &.small
        font-size: calc(42px + 6 * ((100vw - 320px) / 680))
      font-size: calc(58px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 478px)
      &.small
        font-size: calc(48px + 6 * ((100vw - 320px) / 680))
      font-size: calc(65px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 516px)
      &.small
        font-size: calc(48px + 6 * ((100vw - 320px) / 680))
      font-size: calc(71px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 546px)
      &.small
        font-size: calc(55px + 6 * ((100vw - 320px) / 680))
      font-size: calc(71px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 614px)
      &.small
        font-size: calc(55px + 6 * ((100vw - 320px) / 680))
      font-size: calc(79px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 686px)
      &.small
        font-size: calc(65px + 6 * ((100vw - 320px) / 680))
      font-size: calc(75px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 767px)
      font-size: calc(55px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 776px)
      font-size: calc(60px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 834px)
      font-size: calc(65px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 904px)
      font-size: calc(71px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 1200px)
      font-size: 95px
      &.brand-shadow
        top: 0.3125rem
        left: 0.3125rem
    margin: 0
    padding: 0
    position: relative
    z-index: 3

  .brand-shadow
    position: absolute
    color: #0b0c07
    z-index: 1
    text-shadow: -1px -1px 0 #ffffff50, 1px -1px 0 #ffffff50, -1px 1px 0 #ffffff50, 1px 1px 0 #ffffff50

  &.dark
    h2
      color: #0b0c07

    .brand-shadow
      color: white
      background-color: transparent
      text-shadow: -1px -1px 0 #0b0c0750, 1px -1px 0 #0b0c0750, -1px 1px 0 #0b0c0750, 1px 1px 0 #0b0c0750
</style>
