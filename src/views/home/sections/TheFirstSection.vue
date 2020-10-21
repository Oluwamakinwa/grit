<template>
  <section class="second-section">
    <b-container>
      <b-row>
        <b-col>
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
        <b-col>
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
import image from "@/assets/img/image_1.svg";
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
<style lang="sass">
.second-section
  background-color: #0B0C07
  padding: 3rem 0
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
</style>
