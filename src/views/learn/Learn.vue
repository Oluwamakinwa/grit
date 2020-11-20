<template>
  <div class="survey">
    <div v-if="initialized">
      <TheNavBar light />
      <TheHeaderSection :website-data="websiteData.learnPage" />
      <TheMotivationSection :website-data="websiteData.learnPage" />
      <TheBlackFamilyWorthSection :website-data="websiteData.learnPage" />
      <TheWeUnderstandSection :website-data="websiteData.learnPage" />
      <ProgramsSection :website-data="websiteData.learnPage" />
      <GPTSection :website-data="websiteData.learnPage" />
      <!--    <InterviewEmbed />-->
      <TheFooter :website-data="websiteData" />
    </div>
    <TheLoader light v-else />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
import TheHeaderSection from "./sections/TheHeaderSection";
import TheMotivationSection from "@/views/learn/sections/TheMotivationSection";
import TheBlackFamilyWorthSection from "@/views/learn/sections/TheBlackFamilyWorthSection";
import TheWeUnderstandSection from "@/views/learn/sections/TheWeUnderstandSection";
import TheLoader from "@/components/TheLoader.vue";
import ProgramsSection from "@/views/learn/sections/ProgramsSection";
import GPTSection from "@/views/learn/sections/GPTSection";
// import websiteData from "@/static/webdata.const";
import axios from "axios";
import TheFooter from "@/components/TheFooter";
// import InterviewEmbed from "@/views/learn/components/InterviewEmbed";

export default {
  name: "Learn",
  data: () => ({ websiteData: {}, initialized: false }),
  mounted() {
    axios.get("/site_data").then(res => {
      this.websiteData = res.data;
      this.initialized = true;
    });
  },
  components: {
    // InterviewEmbed,
    TheFooter,
    GPTSection,
    ProgramsSection,
    TheWeUnderstandSection,
    TheBlackFamilyWorthSection,
    TheMotivationSection,
    TheHeaderSection,
    TheNavBar,
    TheLoader
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
