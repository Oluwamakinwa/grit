<template>
  <div>
    <div class="dark-card">
      <slot></slot>
      <fieldset>
        <legend class="gordita-light">{{ title }}</legend>
      </fieldset>
    </div>
  </div>
</template>
<style lang="sass" scoped>
div
  margin-bottom: 20px
  .dark-card
    background: #ffffff20
    width: 100%
    padding-top: 65px
    padding-bottom: 5px
    padding-left: 40px
    margin-bottom: 20px
    position: relative
    fieldset
      border: 1px solid white
      position: absolute
      top: 20px
      left: 20px
      height: 100%
      width: 100%
      legend
        display: inline
        width: auto
        margin-left: 12px
        font-size: 2rem
        padding-inline-start: 0
        padding-inline-end: 0

    p, legend
      color: white
    ul
      list-style: none
      li
        color: white
        font-family: 'Gordita Light', sans-serif
        &::before
          content: '-'
          margin-right: 3px
</style>
<script>
export default {
  name: "DarkCard",
  props: {
    title: {
      type: String,
      default: "Students"
    }
  }
};
</script>
