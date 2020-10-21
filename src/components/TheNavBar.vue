<template>
  <div class="nav-bar">
    <b-container>
      <b-row>
        <b-col>
          <div class="nav-content">
            <img :src="logo" />

            <div class="right">
              <a href="#">features</a>
              <a href="#">partners</a>
              <a href="#">about us</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import logo from "@/assets/img/logo.svg";
export default {
  name: "TheNavBar",
  data: () => ({
    logo
  })
};
</script>
<style lang="sass">
.nav-bar
  width: 100%
  display: flex
  background: #0B0C07
  color: white
  padding: 20px
  .nav-content
    display: flex
    justify-content: space-between
    align-items: center
    .right
      & > a:not(:first-of-type)
        margin-left: 80px
      a
        color: white
        font-family: 'Gordita Medium', sans-serif
        font-size: 18px
</style>
