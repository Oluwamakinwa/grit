<template>
  <div class="the-third-section">
    <b-container id="calculated">
      <b-row>
        <b-col>
          <h2 class="background gordita-black p-0 mt-2">
            {{ websiteData.secondSection.backgroundText }}
          </h2>
          <p class="gordita-light mb-0 mt-0 pt-0 leading-to">
            {{ websiteData.secondSection.leadingToMainText }}
          </p>
          <BrandedText small dark>{{
            websiteData.secondSection.mainText
          }}</BrandedText>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="6" class="largebannercontainer">
          <img :src="largebanner" class="largebanner" alt="Decorative banner" />
        </b-col>
        <b-col md="6">
          <div class="black-text">
            <p
              class="gordita-light"
              v-for="(paragraph, index) in websiteData.secondSection.paragraph"
              :key="`secondsectionp-${index}`"
              :class="{ 'mt-5': index !== 0 }"
            >
              {{ paragraph.text }}
            </p>
          </div>
        </b-col>
        <b-col md="6" class="largebannercontainer sm">
          <img
            alt="Decorative banner"
            id="pushed-banner"
            :src="largebanner"
            class="largebanner"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BrandedText from "@/components/BrandedText";
import largebanner from "@/assets/img/largebanner.png";
export default {
  name: "TheSecondSection",
  data: () => ({ largebanner }),
  mounted() {
    window.addEventListener("load", this.calculatePush);
    window.addEventListener("resize", this.calculatePush);
  },
  destroyed() {
    window.removeEventListener("load", this.calculatePush);
    window.removeEventListener("resize", this.calculatePush);
  },
  props: {
    websiteData: Object
  },
  components: {
    BrandedText
  },
  methods: {
    calculatePush() {
      const fourthSection = document.getElementsByClassName(
        "the-fourth-section"
      )[0];
      if (window.outerWidth <= 767) {
        const width = document.getElementById("calculated").offsetWidth;
        const height = (width * 1781.64) / 694;
        this.$el.style.paddingBottom = `${height / 2}px`;
        fourthSection.style.paddingTop = `${height / 2 + 50}px`;
      } else {
        this.$el.style.paddingBottom = "107px";
        fourthSection.style.paddingTop = "4rem";
      }
    }
  }
};
</script>
<style lang="sass" scoped>
.the-third-section
  padding-bottom: 107px
  .background
    color: #e7e7e7
    font-size: 147px
    @media only screen and (max-width: 850px)
      font-size: 120px
    @media only screen and (max-width: 734px)
      font-size: 15vw
  .black-text
    color: #000
    font-size: 1rem
.largebannercontainer
  position: relative
  &:not(.sm)
    @media only screen and (max-width: 767px)
      display: none
  &.sm
    @media only screen and (min-width: 768px)
      display: none
  .largebanner
    width: 100%
    position: absolute
    top: 0
    left: -10%
    @media only screen and (max-width: 1050px)
      left: -5%
    @media only screen and (max-width: 767px)
      left: 0
</style>
