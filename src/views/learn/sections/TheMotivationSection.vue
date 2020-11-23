<template>
  <section class="the-motivation-section">
    <b-container>
      <b-row>
        <b-col>
          <p class="leading-to gordita-light">
            {{ websiteData.motivationSection.leadingToMainText }}
          </p>
          <BrandedText small dark>{{
            websiteData.motivationSection.mainText
          }}</BrandedText>
          <p class="survey-leading-to gordita-regular mt-5">
            {{ websiteData.motivationSection.paragraph }}
          </p>
          <img :src="financialInclusion" alt="Driving Financial Inclusion" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BrandedText from "@/components/BrandedText";
import financialInclusion from "@/assets/img/financial_inclusion.png";

export default {
  name: "TheMotivationSection",
  data: () => ({ financialInclusion }),
  components: { BrandedText },
  props: {
    websiteData: Object
  }
};
</script>

<style lang="sass" scoped>
.the-motivation-section
  padding: 150px 0 50px

  @media only screen and (max-width: 767px)
    padding: 80px 0 50px

  p
    max-width: 680px
    line-height: 40px

  img
    width: 100%
</style>
