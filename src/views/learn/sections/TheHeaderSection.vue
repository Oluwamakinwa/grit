<template>
  <section class="the-header-section">
    <b-container>
      <b-row>
        <b-col>
          <p class="survey-leading-to gordita-regular mt-5">
            More than 1 million tech jobs paying no less than
          </p>
          <BrandedText dark
            >$60,000 per year go unfilled every year</BrandedText
          >
          <p class="survey-leading-to gordita-regular mt-5">
            These roles typically come with full health benefits, paid time off,
            maternity and paternity leave and much more.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <img :src="surveyHero" alt="Grit survey" />
  </section>
</template>

<script>
import BrandedText from "@/components/BrandedText";
import surveyHero from "../../../assets/img/surveyheader.png";
export default {
  name: "TheHeaderSection",
  data: () => ({ surveyHero }),
  components: { BrandedText }
};
</script>

<style lang="sass" scoped>
.the-header-section
  position: relative
  p
    font-size: 16px
    margin-bottom: 3rem
    line-height: 40px
    max-width: 550px
  img
    width: 100%
  &::after
    content: ''
    width: 100%
    position: absolute
    left: 0
    bottom: 0
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)
    height: 300px
</style>
