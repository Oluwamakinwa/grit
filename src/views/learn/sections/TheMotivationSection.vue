<template>
  <section class="the-motivation-section">
    <b-container>
      <b-row>
        <b-col>
          <BrandedText dark>our motivation</BrandedText>
          <p class="survey-leading-to gordita-regular mt-5">
            Grit was formed to foster economic mobility for Black, Indigenous
            POC communities who are disproportionately impacted by systemic bias
            in lending as well as the economic realities laid bare by Covid-19.
          </p>
          <img :src="financialInclusion" alt="Driving Financial Inclusion" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BrandedText from "@/components/BrandedText";
import financialInclusion from "../../../assets/img/financial_inclusion.png";

export default {
  name: "TheMotivationSection",
  data: () => ({ financialInclusion }),
  components: { BrandedText }
};
</script>

<style lang="sass" scoped>
.the-motivation-section
  padding: 150px 0 50px

  p
    max-width: 680px
    line-height: 40px

  img
    width: 100%
</style>
