<template>
  <div class="sidebar">
    <div class="section-title">CMS Pages</div>
    <router-link :to="{ name: 'CMSHome' }">Home</router-link>
    <router-link :to="{ name: 'CMSLearn' }">Learn</router-link>
  </div>
</template>
<script>
export default {
  name: "TheSideBar"
};
</script>
<style lang="sass">
.sidebar
  display: flex
  flex-direction: column
  width: 200px
  background: rgba(#0B0C07, .9)
  height: 100vh
  position: fixed
  padding:
    top: 2rem
  left: 0
  top: 70px
  .section-title
    padding:
      left: 2rem
    font-size: .8rem
    color: rgba(#fff, .6)
    margin-bottom: 12px
  a
    color: rgba(#fff, .5)
    margin-bottom: 10px
    padding: 10px
      left: 2rem
    text-decoration: none
    transition: color .8s
    &:hover
      color: #fff
    &.router-link-exact-active
      color: #fff
</style>
