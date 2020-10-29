<template>
  <div class="the-fifth-section">
    <b-container>
      <b-row>
        <b-col>
          <p class="leading-to gordita-light mt-5">This is</p>
          <BrandedText dark>who we are</BrandedText>
          <p class="leading-to gordita-light">
            Our grit was born from tragedy and opportunity
          </p>
        </b-col>
      </b-row>
      <div class="initial-contact-margin"></div>
      <b-row
        class="contact-row"
        v-for="(teamArray, index) in splitTeam(3)"
        :key="`${index}-team`"
        :id="`contact-row-${index}`"
      >
        <b-col
          md="4"
          v-for="(person, index) in teamArray"
          :key="`person-${index}`"
        >
          <TeamPerson :person="person" />
        </b-col>
      </b-row>
      <b-row
        class="contact-medium-row"
        v-for="(teamArray, index) in splitTeam(2)"
        :key="`${index}-team-medium`"
      >
        <b-col
          md="6"
          v-for="(person, index) in teamArray"
          :key="`person-${index}`"
        >
          <TeamPerson :person="person" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="leading-to gordita-light text-center">
            "We created GRIT to democratize access to ISA's because we
            understand financial inclusion is a critical step in supporting
            future economic livelihoods for marginalized communities and will
            serve as model for future impact and shared prosperity."
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BrandedText from "@/components/BrandedText";
import TeamPerson from "../components/TeamPerson";
import team from "@/static/team";
export default {
  name: "TheFourthSection",
  data: () => ({ team }),
  methods: {
    splitTeam: function(splitAt) {
      let threes = [];
      let intermediate = [];
      this.team.forEach(teamMember => {
        intermediate.push(teamMember);
        if (intermediate.length === splitAt) {
          threes.push(intermediate);
          intermediate = [];
        }
      });
      return threes;
    }
  },
  components: {
    BrandedText,
    TeamPerson
  }
};
</script>
<style lang="sass" scoped>
.sub
  font-size: 37px
.initial-contact-margin
  margin-top: 60px
.contact-row
  margin-bottom: 160px
  @media only screen and (max-width: 900px)
    display: none
.contact-medium-row
  margin-bottom: 130px
  @media only screen and (min-width: 901px)
    display: none
  @media only screen and (max-width: 767px)
    margin-bottom: 0
    & > div
      margin-bottom: 70px
#contact-row-0
  position: relative
  &::after
    content: ''
    position: absolute
    width: 80%
    left: 10%
    background: #12140c50
    height: 1px
    top: calc(100% + 80px)
    display: block
#contact-row-1
  margin-bottom: 80px
</style>
