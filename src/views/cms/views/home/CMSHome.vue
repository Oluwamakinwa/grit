<template>
  <div>
    <div v-if="initialized">
      <HeroSection
        @updated="updateWebsiteData"
        :website-data="websiteData.homePage"
      />
      <FirstSection
        @updated="updateWebsiteData"
        :website-data="websiteData.homePage"
      />
      <SecondSection
        @updated="updateWebsiteData"
        :website-data="websiteData.homePage"
      />
      <ThirdSection
        @updated="updateWebsiteData"
        :website-data="websiteData.homePage"
      />
      <FourthSection
        @updated="updateWebsiteData"
        :website-data="websiteData.homePage"
      />
      <TeamSection
        @updated="updateWebsiteData"
        :website-data="websiteData.homePage"
      />
      <FooterSection @updated="updateWebsiteData" :website-data="websiteData" />
    </div>
  </div>
</template>

<script>
import HeroSection from "@/views/cms/views/home/components/HeroSection";
import axios from "axios";
// import websiteData from "@/static/webdata.const";
import FirstSection from "@/views/cms/views/home/components/FirstSection";
import SecondSection from "@/views/cms/views/home/components/SecondSection";
import ThirdSection from "@/views/cms/views/home/components/ThirdSection";
import FourthSection from "@/views/cms/views/home/components/FourthSection";
import TeamSection from "@/views/cms/views/home/components/TeamSection";
import FooterSection from "@/views/cms/views/home/components/FooterSection";
export default {
  name: "CMSHome",
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
    FooterSection,
    TeamSection,
    FourthSection,
    ThirdSection,
    SecondSection,
    FirstSection,
    HeroSection
  }
};
</script>
