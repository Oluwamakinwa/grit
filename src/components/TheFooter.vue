<template>
  <footer>
    <section class="survey-section">
      <b-container>
        <b-row>
          <b-col md="6">
            <BrandedText>Before we launch</BrandedText>
            <div class="launch-plea">
              <BrandedText>.</BrandedText>
              <div>
                <p class="gordita-regular">
                  If you haven't already, take a few minutes to complete our
                  survey or share this page with anyone who you think may be
                  interested in Grit. Thanks!
                </p>
              </div>
            </div>
            <div class="bttn-container">
              <a class="gordita-medium" href="#">Take the Survey</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <img :src="mobilefooter" class="mobile-footer" alt="Grit landing" />
    </section>
    <section class="contact-section">
      <div class="footer-content">
        <b-container>
          <b-row>
            <b-col>
              <div class="hr"></div>
            </b-col>
          </b-row>
          <b-row class="foot-notes">
            <b-col md="3">
              <img :src="logo" alt="Grit" />
            </b-col>
            <b-col md="6">
              <ul>
                <li>Techstars Colorado, USA</li>
                <li>Copyright © 2020 Grit</li>
                <li>All rights reserved.</li>
              </ul>
            </b-col>
            <b-col md="3">
              <ul>
                <li>
                  <a href="#">Terms and conditions</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Back to top</a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </footer>
</template>
<script>
import BrandedText from "@/components/BrandedText";
import logo from "@/assets/img/logo.svg";
import mobilefooter from "@/assets/img/mobilefooter.png";

export default {
  name: "TheFooter",
  data: () => ({ logo, mobilefooter }),
  components: {
    BrandedText
  }
};
</script>
<style lang="sass" scoped>
footer
  background-color: #12140C
  margin-top: 32px

  .mobile-footer
    width: 100%
    height: auto
    position: relative
    z-index: 1
    opacity: .5
    @media screen and (min-width: 767px)
      display: none

  .bttn-container
    position: relative
    z-index: 10
    padding-left: 3rem
    @media only screen and (max-width: 767px)
      display: flex
      justify-content: center
      padding-left: 0

    a
      display: inline-block
      background: white
      color: #000
      padding: 15px 30px
      margin-top: 60px

  .survey-section
    padding-top: 105px
    background-image: url(../assets/img/footer.png)
    background-position-x: 100%
    background-size: cover
    background-repeat: no-repeat
    padding-bottom: 210px
    position: relative
    @media only screen and (max-width: 767px)
      background-position-y: 40vh
      background-size: contain
      background-position-x: center
      background-image: none

    .col
      position: relative
      z-index: 3

    &::after
      content: ''
      display: block
      position: absolute
      bottom: 0
      left: 0
      height: 50%
      width: 100%
      background: linear-gradient(180deg, rgba(11, 12, 7, 0.0001), #1A1C11)
      z-index: 2

  .launch-plea
    display: flex
    margin-top: 30px
    position: relative
    z-index: 10

    & > div.branded-text
      position: relative
      top: -1rem

    & > div:not(.branded-text)
      margin-left: 15px

    p
      color: white
      font-size: 16px
      line-height: 25px
      margin-bottom: 0

  .contact-section
    background: #1A1C11
    padding-top: 180px

    .hr
      width: 80%
      margin-left: 10%
      background: rgba(151, 151, 151, 0.548733)
      height: 1px

    .foot-notes
      margin-top: 60px

    img
      @media only screen and (max-width: 767px)
        display: block
        margin: 0 auto
          bottom: 50px

    ul
      list-style: none
      @media only screen and (max-width: 767px)
        margin-bottom: 50px

      li
        color: white
        font-family: 'Gordita Light', sans-serif
        font-size: 16px
        margin-bottom: 60px
        @media only screen and (max-width: 767px)
          text-align: center
          width: 100%

        & a
          color: white
          font-family: 'Gordita Medium', sans-serif
          font-size: 16px
</style>
