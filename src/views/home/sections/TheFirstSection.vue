<template>
  <section class="second-section">
    <b-container>
      <b-row>
        <b-col md="6">
          <BrandedText>{{ websiteData.firstSection.mainText }}</BrandedText>
          <p class="gordita-light mt-4">
            {{ websiteData.firstSection.subText }}
          </p>
          <p
            class="gordita-medium"
            v-for="(paragraph, index) in websiteData.firstSection.paragraph"
            :key="`secondparaphraphp-${index}`"
          >
            {{ paragraph.text }}
          </p>
        </b-col>
        <b-col md="6">
          <div class="imgg">
            <img :src="image" alt="The 4th industrial revolution" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import BrandedText from "@/components/BrandedText";
import image from "@/assets/img/image_1.png";
export default {
  name: "TheFirstSection",
  data: () => ({
    image
  }),
  props: {
    websiteData: Object
  },
  components: {
    BrandedText
  }
};
</script>
<style lang="sass" scoped>
.second-section
  background-color: #0B0C07
  padding: 3rem 0
  position: relative
  z-index: 2
  p
    color: #fff
    font-size: 1rem
  img
    width: 100%
    height: auto
  .imgg
    height: 100%
    display: flex
    align-items: center
    transform: translateY(0px)
    animation: float 6s ease-in-out infinite
  @keyframes float
    0%
      transform: translateY(0px)
    50%
      transform: translateY(-20px)
    100%
      transform: translateY(0px)
</style>
