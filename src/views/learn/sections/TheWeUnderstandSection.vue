<template>
  <section class="the-we-understand-section">
    <b-container>
      <b-row>
        <b-col>
          <p class="leading-to leading-p gordita-light mt-5 mb-5">
            {{ websiteData.weUnderstandSection.leadingToMainText }}
          </p>
          <BrandedText class="we-understand" small dark
            >{{ websiteData.weUnderstandSection.mainText }}
          </BrandedText>
          <p class="leading-to heretohelp gordita-light">
            {{ websiteData.weUnderstandSection.mainSubText }}
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" class="sub-text-understand other-side mt-4">
          <p
            v-for="(p, index) in websiteData.weUnderstandSection.paragraphs"
            :key="`paragraph-index-${index}`"
            class="gordita-light"
            :class="{
              'final-p':
                index + 1 === websiteData.weUnderstandSection.paragraphs.length
            }"
          >
            {{ p.text }}
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
  components: { BrandedText },
  props: {
    websiteData: Object
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
.the-we-understand-section
  .sub-text-understand
    p
      font-size: 20px

@media only screen and (max-width: 720px)
  .leading-p
    margin-bottom: 2rem !important
  .other-side
    margin-top: 1rem !important
  .final-p
    margin-top: 2rem
</style>
