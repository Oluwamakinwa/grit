<template>
  <div class="nav-bar" :class="{ light }">
    <b-container>
      <b-row>
        <b-col>
          <div class="nav-content">
            <img :src="logo" alt="Grit" />

            <div class="right">
              <a href="#">features</a>
              <a href="#">partners</a>
              <a href="#">about us</a>
            </div>
            <div class="menu" @click="toggleShow" v-show="!show">
              <div class="bars">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <div class="divider"></div>
    </b-container>
    <div v-show="show" class="right-way">
      <a href="#">features</a>
      <a href="#">partners</a>
      <a href="#">about us</a>
      <button @click="toggleShow">&times;</button>
    </div>
  </div>
</template>
<script>
import logo from "@/assets/img/logo.svg";
import logoDark from "../assets/img/logo_dark.svg";
export default {
  name: "TheNavBar",
  data: () => ({
    logo,
    show: false
  }),
  mounted() {
    this.logo = this.light ? logoDark : logo;
  },
  methods: {
    toggleShow: function() {
      this.show = !this.show;
    }
  },
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="sass">
.nav-bar
  width: 100%
  display: flex
  background: #0B0C07
  color: white
  padding: 20px
  position: relative
  &.light
    background: white
    color: #0B0C07
    .right-way
      @media only screen and (max-width: 767px)
        border-top: 1px solid #0B0C07
        background: white
        button, a
          color: #0B0C07
    .menu
      .bars div
        background: #0B0C07
    .nav-content
      .right
        a
          color: #0B0C07
  .divider
    width: 100%
    height: 1px
    background-color: #46483F
    position: relative
    top: 20px
    @media only screen and (min-width: 768px)
      display: none
  .menu
    @media only screen and (min-width: 768px)
      display: none
    .bars div
      width: 32.5px
      height: 3.13px
      background: white
      margin: 7px 0
  .nav-content
    display: flex
    justify-content: space-between
    align-items: center

    .right
      & > a:not(:first-of-type)
        margin-left: 80px
      @media only screen and (max-width: 767px)
        display: none
      button
        display: none
      a
        color: white
        font-family: 'Gordita Medium', sans-serif
        font-size: 18px
        position: relative
        text-decoration: none
        &:after
          content: ''
          display: block
          width: 0
          height: 2px
          color: white
          transition: width .4s
          position: absolute
          background: white
          left: -6px
          top: calc(50% - 1px)
        &:hover
          &:after
            width: calc(100% + 12px)
.right-way
  display: none
  @media only screen and (max-width: 767px)
    position: fixed
    top: 90px
    left: 0
    width: 100%
    height: calc(100vh - 90px)
    background: #0B0C07
    z-index: 99
    display: flex
    flex-direction: column
    padding: 12px 30px
      top: 80px
    align-items: center
    button
      display: block
      border: none
      background: transparent
      color: white
      font-size: 3.5rem
      position: absolute
      top: 0
      right: 30px
    a
      margin-left: 20px !important
      font-size: 32px
      margin-bottom: 2rem
      color: white
</style>
