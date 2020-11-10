<template>
  <div class="home">
    <div v-if="initialized">
      <TheNavBar />
      <TheHeaderSection :website-data="websiteData" />
      <TheFirstSection :website-data="websiteData" />
      <TheSecondSection :website-data="websiteData" />
      <TheThirdSection :website-data="websiteData" />
      <TheFourthSection :website-data="websiteData" />
      <TheFooter :website-data="websiteData" />
    </div>
    <TheLoader v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavBar from "@/components/TheNavBar.vue";
import TheHeaderSection from "./sections/TheHeaderSection.vue";
import TheFirstSection from "./sections/TheFirstSection.vue";
import TheSecondSection from "./sections/TheSecondSection.vue";
import TheThirdSection from "./sections/TheThirdSection.vue";
import TheFourthSection from "./sections/TheFourthSection.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheLoader from "./sections/TheLoader.vue";
import axios from "axios";
// import websiteData from "@/static/webdata.const";

export default {
  name: "Home",
  data: () => ({ websiteData: {}, initialized: false }),
  mounted() {
    axios.get("/site_data").then(res => {
      this.websiteData = res.data;
      this.initialized = true;
    });
  },
  components: {
    TheNavBar,
    TheHeaderSection,
    TheFirstSection,
    TheSecondSection,
    TheThirdSection,
    TheFourthSection,
    TheFooter,
    TheLoader
  }
};
</script>
