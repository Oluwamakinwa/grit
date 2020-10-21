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
    input
      background: rgba(255, 255, 255, 0.109757)
      padding: 9px 15px
      font-size: 1rem
      min-width: 320px
      border: none
        bottom: 2px solid #fff
      &::placeholder
        color: #fff
    button
      background-color: #fff
      font-family: 'Gordita Medium'
      font-size: 1rem
      display: flex
      align-items: center
      color: #000
      padding: 10px 15px
      border: none
  .italics
    color: #fff
    font-size: .875rem
    font-family: 'Gordita Light Italic', sans-serif
    padding: 1rem
</style>
