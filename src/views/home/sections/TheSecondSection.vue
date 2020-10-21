<template>
  <div class="the-third-section">
    <b-container>
      <b-row>
        <b-col>
          <h2 class="background gordita-black p-0 mt-2">GritScore</h2>
          <p class="gordita-light mb-0 mt-0 pt-0 leading-to">Grit is</p>
          <BrandedText dark>everyone's unfair advantage</BrandedText>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="6" class="largebannercontainer">
          <img :src="largebanner" class="largebanner" />
        </b-col>
        <b-col md="6">
          <div class="black-text">
            <p class="gordita-light">
              We are leveraging alternative data and machine learning to build
              an AI driven character based assesement of potential and
              fundability. An individual's Grit score is based on things that
              matter like bootcamp pre-work, recommendations, community service,
              volunteerism, and perseverance over life challenges instead of the
              biased traditional factors that inform ISA financing decisions
              today.
            </p>
            <p class="gordita-light mt-5">
              These are better indicators of program success and future
              hire-ability.
            </p>
          </div>
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
  components: {
    BrandedText
  }
};
</script>
<style lang="sass" scoped>
.the-third-section
  padding-bottom: 147px
  .background
    color: #e7e7e7
    font-size: 147px
  .black-text
    color: #000
    font-size: 1rem
.largebannercontainer
  position: relative
  .largebanner
    width: 100%
    position: absolute
    top: 0
    left: -10%
</style>
