<template>
  <div class="header-content">
    <b-container>
      <b-row>
        <b-col md="6">
          <div class="hero-text">
            <p class="gordita-plain first">
              Democratizing access to opportunity and capital for
            </p>
            <BrandedText>the future of work</BrandedText>
            <p class="gordita-light second">
              Grit helps bootcamps and ISA funds extend educational financing to
              untapped communities more equitably.
            </p>
            <form class="email-input-form">
              <input
                class="gordita-light"
                placeholder="Enter your email to get notified"
              />
              <button>Notify Me!</button>
            </form>
            <p class="italics">Get notified when we lunch</p>
          </div>
          <img src="../../../assets/img/hero.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BrandedText from "@/components/BrandedText";
export default {
  name: "TheHeaderSection",
  components: {
    BrandedText
  }
};
</script>
<style lang="sass" scoped>
.header-content
  width: 100%
  background-color: #0B0C07
  background-image: url(../../../assets/img/hero.png)
  background-size: 80%
  background-repeat: no-repeat
  background-position-x: 100%
  position: relative
  padding-bottom: 130px
  @media only screen and (max-width: 767px)
    padding-bottom: 30px
  img
    display: none
    @media only screen and (max-width: 767px)
      width: 100%
      position: absolute
      display: block
      right: 0
      top: 200px
      z-index: 1
    @media only screen and (max-width: 639px)
      top: 300px
    @media only screen and (max-width: 410px)
      top: 330px
  @media only screen and (max-width: 767px)
    background-image: none
  &::after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 30%
    background: linear-gradient(179.82deg, rgba(11, 12, 7, 0) 0.15%, #0B0C07 71.7%)
    z-index: 1
  .hero-text
    margin: 3rem 0
    position: relative
    z-index: 3
  .first
    color: #fff
    font-size: 20px
    line-height: 32px
    max-width: 23.75rem
  .second
    color: #fff
    font-size: 1rem
    line-height: 1.375rem
    max-width: 22.5rem
  .email-input-form
    display: flex
    align-items: center
    margin-top: 40px
    @media screen and (max-width: 767px)
      margin-top: 40%
    input
      background: rgba(255, 255, 255, 0.109757)
      padding: 9px 15px
      font-size: 1rem
      width: auto
      min-width: 1px
      flex: 1
      color: white
      border: 2px solid transparent
        bottom: 2px solid #fff
      transition: border-left .6s, border-right .6s, border-top, .6s
      &:focus
        outline: none
        border: 2px solid #fff
      &::placeholder
        color: #fff
    button
      background-color: #fff
      font-family: 'Gordita Medium'
      font-size: 1rem
      display: flex
      align-items: center
      color: #000
      padding: 11px 15px
      white-space: nowrap
      border: none
      @media only screen and (max-width: 884px)
        padding: 11px 10px
  .italics
    color: #fff
    font-size: .875rem
    font-family: 'Gordita Light Italic', sans-serif
    padding: 1rem
    @media only screen and (max-width: 767px)
      text-align: center
</style>
