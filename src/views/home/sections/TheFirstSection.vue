<template>
  <section class="second-section">
    <b-container>
      <b-row>
        <b-col md="6">
          <BrandedText>Industrial Revolution 4.0</BrandedText>
          <p class="gordita-light mt-4">
            4.5MM Black Americans will lose their jobs to automation by 2030
            while millions of high paying tech jobs go unfilled.
          </p>
          <p class="gordita-medium">
            Coding bootcamps are key to preparing for these jobs, but Black
            students are being denied access to Income Sharing Agreements needed
            to finance these programmes.
          </p>
          <p class="gordita-medium">
            This is where Grit comes in.
          </p>
        </b-col>
        <b-col md="6">
          <div class="imgg">
            <img :src="image" />
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
