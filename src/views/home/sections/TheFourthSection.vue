<template>
  <div class="the-fifth-section">
    <b-container>
      <b-row>
        <b-col>
          <p class="leading-to gordita-light mt-5">
            {{ websiteData.fourthSection.leadingToMainText }}
          </p>
          <BrandedText dark
            >{{ websiteData.fourthSection.mainText }}
          </BrandedText>
          <p class="leading-to gordita-light">
            {{ websiteData.fourthSection.mainSubText }}
          </p>
        </b-col>
      </b-row>
      <div class="initial-contact-margin"></div>
      <b-row
        class="contact-row"
        v-for="(teamArray, index) in splitTeam(3)"
        :key="`${index}-team`"
        :class="{
          'line-below': index !== splitTeam(3).length - 1,
          'last-row': index === splitTeam(3).length - 1
        }"
      >
        <b-col
          md="4"
          v-for="(person, index) in teamArray"
          :key="`person-${index}`"
        >
          <TeamPerson :person="person" />
        </b-col>
      </b-row>

      <!--      Mobile view of the contacts with the rows slit in twos-->
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
            "{{ websiteData.fourthSection.quoteText }}"
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div class="btn-container">
      <router-link to="/learn" class="prequalification-action gordita-medium">
        Learn More
        <img :src="iconLeft" alt="See if you qualify" />
      </router-link>
    </div>
  </div>
</template>
<script>
import BrandedText from "@/components/BrandedText";
import TeamPerson from "../components/TeamPerson";
import team from "@/static/team";
import iconLeft from "../../../assets/img/icons/button_left.svg";

export default {
  name: "TheFourthSection",
  data: () => ({ team, iconLeft }),
  props: {
    websiteData: Object
  },
  methods: {
    splitTeam: function(splitAt) {
      let threes = [];
      let intermediate = [];
      this.websiteData.fourthSection.team.forEach(teamMember => {
        intermediate.push(teamMember);
        if (intermediate.length === splitAt) {
          threes.push(intermediate);
          intermediate = [];
        }
      });
      if (intermediate.length) threes.push(intermediate);
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
.btn-container
  display: flex
  justify-content: center
.prequalification-action
  background: #12140C
  color: white
  border: none
  font-size: 16px
  padding: 8px 16px
  text-decoration: none

  img
    margin-left: 1rem

  #gritThumbsUp
    position: absolute
    top: -25%
    right: 0
    height: 125%
    z-index: 5

.the-fifth-section
  padding-bottom: 40px

.sub
  font-size: 37px

.initial-contact-margin
  margin-top: 60px

.contact-row
  margin-bottom: 160px
  @media only screen and (max-width: 900px)
    display: none

  &.line-below
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

  &.last-row
    margin-bottom: 80px

.contact-medium-row
  margin-bottom: 130px
  @media only screen and (min-width: 901px)
    display: none
  @media only screen and (max-width: 767px)
    margin-bottom: 0
    & > div
      margin-bottom: 70px
</style>
