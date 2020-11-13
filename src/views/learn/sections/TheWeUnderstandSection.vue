<template>
  <section class="the-we-understand-section">
    <b-container>
      <b-row>
        <b-col>
          <p class="leading-to gordita-light mt-5 mb-5">
            Going back to school to be fully prepared for the 21st century
            careers can be a daunting prospect, especially if taking on debt is
            required.
          </p>
          <BrandedText dark>we understand,</BrandedText>
          <p class="leading-to gordita-light">and we're here to help.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" class="sub-text-understand mt-5" offset-md="2">
          <p class="gordita-light">
            That's why we created the
            <span class="gordita-black">GPT-Grit Pre-Qualification Tool</span>
          </p>
          <p class="gordita-light">
            to help you get a full picture of where you stand, how you can make
            the most of your situation & what to do if you cannot currently
            qualify for workforce education funding.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BrandedText from "@/components/BrandedText";
export default {
  name: "TheWeUnderstandSection",
  components: { BrandedText }
};
</script>

<style lang="sass" scoped>
.the-we-understand-section
  .sub-text-understand
    p
      font-size: 20px
</style>
