<template>
  <section class="program-gpt-section pt-5 mt-5">
    <b-container>
      <b-row class="mb-5">
        <b-col>
          <p class="leading-to gordita-light mt-5 mb-5">
            Programs we can help you qualify for/attend
          </p>
        </b-col>
      </b-row>
      <b-row
        v-for="(programRow, index) in splitArray(3, programs)"
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
        <b-col md="6">
          <ul class="gordita-bold">
            <li>Coding Schools/Software Engineering bootcamps</li>
            <li>Nursing certificate programs</li>
            <li>Flight schools</li>
          </ul>
        </b-col>
        <b-col md="6">
          <ul class="gordita-bold">
            <li>Technical Sales Programs</li>
            <li>Over the road certificate driving programs</li>
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
  components: { ProgramComponent }
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
