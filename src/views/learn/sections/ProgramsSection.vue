<template>
  <section class="program-gpt-section pt-5 mt-5">
    <b-container>
      <b-row class="mb-5">
        <b-col>
          <p class="leading-to gordita-light mt-5 mb-5">
            {{ websiteData.programsSection.leadingToMainText }}
          </p>
        </b-col>
      </b-row>
      <b-row
        v-for="(programRow, index) in splitArray(
          3,
          websiteData.programsSection.programImages
        )"
        :key="`section-program-${index}`"
      >
        <b-col
          v-for="(program, jindex) in programRow"
          :key="`program-${index}-${jindex}`"
          md="4"
        >
          <ProgramComponent :program="program" />
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col
          md="6"
          v-for="(programList, index) in splitArray(
            Math.floor(websiteData.programsSection.programList.length / 2),
            websiteData.programsSection.programList
          )"
          :key="`program-list-${index}`"
        >
          <ul class="gordita-bold">
            <li
              v-for="(program, jindex) in programList"
              :key="`program-${index}-${jindex}`"
            >
              {{ program.text }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ProgramComponent from "@/views/learn/components/ProgramComponent";
import array_helpers from "@/mixins/array_helpers";
import programs from "@/static/programs";

export default {
  name: "ProgramsSection",
  data: () => ({ programs }),
  mixins: [array_helpers],
  components: { ProgramComponent },
  props: {
    websiteData: Object
  }
};
</script>

<style lang="sass" scoped>
.program-gpt-section
  background: #EFEFEF
  padding-bottom: 4rem
  ul
    list-style: none
    li
      font-size: 18px
      margin-bottom: 20px
      &::before
        content: '●'
        display: inline-block
        margin-right: 18px
  @media screen and (max-width: 767px)
    .program-gpt-section
      margin-bottom: 0 !important
      padding-bottom: 0 !important
</style>
