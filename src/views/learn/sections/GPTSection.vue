<template>
  <section class="gpt-section pt-5">
    <img
      id="gritThumbsUpCropped"
      :src="gptThumbsUpCropped"
      alt="Grit Pre-Qualification Tool"
    />
    <b-container>
      <b-row>
        <b-col>
          <BrandedText shadow-color="#EFEFEF" small dark>{{
            websiteData.gptSection.mainText
          }}</BrandedText>
          <p class="leading-to gordita-light mt-4 mb-5">
            {{ websiteData.gptSection.subText }}
          </p>
          <a
            target="_blank"
            href="http://35.192.31.167/interview?i=docassemble.playground1%3Aproduct-interview.yml#page1"
            class="prequalification-action gordita-medium"
          >
            {{ websiteData.gptSection.actionText }}
            <img :src="iconLeft" alt="See if you qualify" />
          </a>
        </b-col>
      </b-row>
    </b-container>
    <img
      id="gritThumbsUp"
      :src="gptThumbsUp"
      alt="Grit Pre-Qualification Tool"
    />
  </section>
</template>

<script>
import BrandedText from "@/components/BrandedText";
import iconLeft from "@/assets/img/icons/button_left.svg";
import gptThumbsUp from "@/assets/img/gpt_thumbsup.png";
import gptThumbsUpCropped from "@/assets/img/gpt_thumbsup_cropped.png";

export default {
  name: "GPTSection",
  data: () => ({ iconLeft, gptThumbsUpCropped, gptThumbsUp }),
  components: { BrandedText },
  props: {
    websiteData: Object
  }
};
</script>

<style lang="sass" scoped>
.gpt-section
  background: #EFEFEF
  position: relative
  padding-bottom: 3rem
  .prequalification-action
    background: #12140C
    color: white
    border: none
    font-size: 16px
    padding: 8px 16px
    display: inline-block
    text-decoration: none
    img
      margin-left: 1rem
  #gritThumbsUp
    position: absolute
    top: -25%
    right: 0
    height: 125%
    z-index: 5
  @media only screen and (min-width: 768px)
    #gritThumbsUpCropped
      display: none
  @media only screen and (max-width: 768px)
    #gritThumbsUp
      display: none
    #gritThumbsUpCropped
      width: 100%
</style>
