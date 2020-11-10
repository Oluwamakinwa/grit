<template>
  <div class="cms-content">
    <Header logged-in />
    <div v-if="initialized">
      <HeroSection @updated="updateWebsiteData" :website-data="websiteData" />
      <FirstSection @updated="updateWebsiteData" :website-data="websiteData" />
      <SecondSection @updated="updateWebsiteData" :website-data="websiteData" />
      <ThirdSection @updated="updateWebsiteData" :website-data="websiteData" />
      <FourthSection @updated="updateWebsiteData" :website-data="websiteData" />
      <TeamSection @updated="updateWebsiteData" :website-data="websiteData" />
      <FooterSection @updated="updateWebsiteData" :website-data="websiteData" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import axios from "axios";
// import websiteData from "@/static/webdata.const";
import FirstSection from "@/views/cms/components/FirstSection";
import SecondSection from "@/views/cms/components/SecondSection";
import ThirdSection from "@/views/cms/components/ThirdSection";
import FourthSection from "@/views/cms/components/FourthSection";
import TeamSection from "@/views/cms/components/TeamSection";
import FooterSection from "@/views/cms/components/FooterSection";
export default {
  name: "CMS",
  data: () => ({ websiteData: {}, initialized: false }),
  mounted: function() {
    // axios.get("/site_data").then(res => (this.websiteData = res.data));
    this.updateWebsiteData();
  },
  methods: {
    updateWebsiteData: function() {
      alert("I uploaded the site data");

      axios.get("/site_data").then(res => {
        this.websiteData = res.data;
        this.initialized = true;
        console.log(this.websiteData);
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
    Header,
    HeroSection
  }
};
</script>

<style lang="sass">
.cms-content
  background: #f5f5f5
  min-height: 100vh
  h2
    margin-top: 3rem
  .form-section
    label
      display: block
      font-family: "Gordita Medium", sans-serif
    textarea, input
      display: block
      border: 1px solid #dedede
        radius: 4px
      padding: 8px 15px
      box-shadow: 1px 1px 4px rgba(0,0,0,.05)
      width: 100%
      min-width: 100%
      font-family: "Gordita Light", sans-serif
      font-size: 15px
  textarea
    min-height: 80px
  button
    font-family: "Gordita Medium", sans-serif
    background: #0B0C07
    border: none
      radius: 4px
    color: white
    padding: 8px 15px
    font-size: 14px
    &.small-btn
      font-size: 12px
      padding: 6px 10px
</style>
