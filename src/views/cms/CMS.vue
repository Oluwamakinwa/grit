<template>
  <div class="cms-content">
    <TheHeader logged-in />
    <div class="content">
      <TheSideBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/views/cms/components/TheHeader";
import TheSideBar from "@/views/cms/components/TheSideBar";

export default {
  name: "CMS",
  components: {
    TheHeader,
    TheSideBar
  }
};
</script>

<style lang="sass">
.cms-content
  background: #f5f5f5
  min-height: 100vh
  h2
    margin-top: 3rem
  .form-section
    label
      display: block
      font-family: "Gordita Medium", sans-serif
    textarea, input
      display: block
      border: 1px solid #dedede
        radius: 4px
      padding: 8px 15px
      box-shadow: 1px 1px 4px rgba(0,0,0,.05)
      width: 100%
      min-width: 100%
      font-family: "Gordita Light", sans-serif
      font-size: 15px
  textarea
    min-height: 80px
  button
    font-family: "Gordita Medium", sans-serif
    background: #0B0C07
    border: none
      radius: 4px
    color: white
    padding: 8px 15px
    font-size: 14px
    &.small-btn
      font-size: 12px
      padding: 6px 10px
</style>
