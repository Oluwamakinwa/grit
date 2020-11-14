<template>
  <div class="survey">
    <TheNavBar light />
    <TheHeaderSection />
    <TheMotivationSection />
    <TheBlackFamilyWorthSection />
    <TheWeUnderstandSection />
    <ProgramsSection />
    <GPTSection />
    <InterviewEmbed />
    <TheFooter :website-data="websiteData" />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import TheHeaderSection from "./sections/TheHeaderSection";
import TheMotivationSection from "@/views/learn/sections/TheMotivationSection";
import TheBlackFamilyWorthSection from "@/views/learn/sections/TheBlackFamilyWorthSection";
import TheWeUnderstandSection from "@/views/learn/sections/TheWeUnderstandSection";
import ProgramsSection from "@/views/learn/sections/ProgramsSection";
import GPTSection from "@/views/learn/sections/GPTSection";
import websiteData from "@/static/webdata.const";
import TheFooter from "@/components/TheFooter";
import InterviewEmbed from "@/views/learn/components/InterviewEmbed";

export default {
  name: "Learn",
  data: () => ({ websiteData }),
  components: {
    InterviewEmbed,
    TheFooter,
    GPTSection,
    ProgramsSection,
    TheWeUnderstandSection,
    TheBlackFamilyWorthSection,
    TheMotivationSection,
    TheHeaderSection,
    TheNavBar
  }
};
</script>

<style lang="sass" scoped>
p.survey-leading-to
  font-size: 16px
  margin-bottom: 3rem
  line-height: 40px
.survey
  overflow-x: hidden
</style>
