<template>
  <section class="the-black-family-worth-section">
    <div class="img-section">
      <img :src="familyWorthPicture" alt="Grit is the future of work" />
    </div>
    <b-container class="padded">
      <b-row>
        <b-col md="5">
          <div class="section-content">
            <p class="gordita-light survey-leading-to mb-3">
              As at 2016, the networth for a Black Family in the US is
            </p>
            <BrandedText shadow-color="#1A1C11" class="mt-3"
              >$17,150
            </BrandedText>
            <p class="gordita-light survey-leading-to mt-3">
              which is nearly 10 times smaller than the typical white family
              with an average networth of $171,000.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import familyWorthPicture from "@/assets/img/family_worth_picture.png";
import BrandedText from "@/components/BrandedText";

export default {
  name: "TheBlackFamilyWorthSection",
  components: { BrandedText },
  data: () => ({ familyWorthPicture })
};
</script>

<style lang="sass" scoped>
.the-black-family-worth-section
  background: #1A1C11
  padding: 0
  position: relative

  .section-content
    @media only screen and (max-width: 480px)
      padding-left: 20px

  .padded
    padding: 150px 0

  &::after
    content: ''
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 40%
    z-index: 6
    background: linear-gradient(0deg, #1A1C11 43.06%, rgba(11, 12, 7, 0.0001) 100%)

  .section-content
    position: relative
    z-index: 15

  p
    color: white
    font-size: 16px

  .img-section
    position: absolute
    right: 0
    top: 0
    height: 100%
    z-index: 5

    img
      height: 100%

    &::after
      content: ''
      position: absolute
      height: 100%
      background: linear-gradient(90deg, #1A1C11 43.06%, rgba(11, 12, 7, 0.0001) 100%)
      width: 300px
      left: -100px
      z-index: 6

  @media only screen and (max-width: 1200px)
    .img-section
      img
        height: 90%
  @media only screen and (max-width: 1070px)
    .img-section
      img
        height: 80%

      &::after
        background: linear-gradient(90deg, #1A1C11 53.06%, rgba(11, 12, 7, 0.0001) 100%)
    &::after
      background: linear-gradient(0deg, #1A1C11 55.06%, rgba(11, 12, 7, 0.0001) 100%)
      bottom: -10px
  @media screen and (max-width: 768px)
    .padded
      padding-top: 50px
    .img-section
      position: relative

      img
        width: 100%
        height: auto

      &::after
        content: ''
        position: absolute
        width: 100%
        height: 40%
        background: linear-gradient(0deg, #1A1C11 43.06%, rgba(11, 12, 7, 0.0001) 100%)
        left: 0
        bottom: -10px
        z-index: 6
</style>
