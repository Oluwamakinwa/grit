<template>
  <div class="learn-cms">
    <div v-if="initialized">
      <HeroSection :website-data="websiteData.learnPage" />
      <MotivationSection :website-data="websiteData.learnPage" />
      <BlackNetworthSection :website-data="websiteData.learnPage" />
      <WeUnderstandSection :website-data="websiteData.learnPage" />
      <ProgramSection :website-data="websiteData.learnPage" />
      <GPTSection :website-data="websiteData.learnPage" />
      <FooterSection :website-data="websiteData" />
    </div>
  </div>
</template>
<script>
import HeroSection from "@/views/cms/views/learn/components/HeroSection";
import MotivationSection from "@/views/cms/views/learn/components/MotivationSection";
import BlackNetworthSection from "@/views/cms/views/learn/components/BlackNetworthSection";
import WeUnderstandSection from "@/views/cms/views/learn/components/WeUnderstandSection";
import ProgramSection from "@/views/cms/views/learn/components/ProgramSection";
import GPTSection from "@/views/cms/views/learn/components/GPTSection";
import FooterSection from "@/views/cms/views/learn/components/FooterSection";
// import websiteData from "@/static/webdata.const";

import axios from "axios";
export default {
  name: "Learn",
  data: () => ({ websiteData: {}, initialized: false }),
  mounted: function() {
    // axios.get("/site_data").then(res => (this.websiteData = res.data));
    this.updateWebsiteData();
  },
  methods: {
    updateWebsiteData: function() {
      axios.get("/site_data").then(res => {
        this.websiteData = res.data;
        this.initialized = true;
      });
    }
  },
  components: {
    HeroSection,
    MotivationSection,
    BlackNetworthSection,
    WeUnderstandSection,
    ProgramSection,
    GPTSection,
    FooterSection
  }
};
</script>
