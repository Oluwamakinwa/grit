<template>
  <div class="home">
    <div v-if="initialized">
      <TheNavBar />
      <TheHeaderSection :website-data="websiteData.homePage" />
      <TheFirstSection :website-data="websiteData.homePage" />
      <TheSecondSection :website-data="websiteData.homePage" />
      <TheThirdSection :website-data="websiteData.homePage" />
      <TheFourthSection :website-data="websiteData.homePage" />
      <TheFooter :website-data="websiteData" />
    </div>
    <TheLoader v-else />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheHeaderSection from "./sections/TheHeaderSection.vue";
import TheFirstSection from "./sections/TheFirstSection.vue";
import TheSecondSection from "./sections/TheSecondSection.vue";
import TheThirdSection from "./sections/TheThirdSection.vue";
import TheFourthSection from "./sections/TheFourthSection.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheLoader from "@/components/TheLoader.vue";
import axios from "axios";
export default {
  name: "PreviewHome",
  data: () => ({ websiteData: {}, initialized: false }),
  created() {
    window.addEventListener("load", function() {
      document.getElementById("loader-div").style.display = "none";
    });
  },
  mounted() {
    axios.get("/preview_data").then(res => {
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

<style scoped></style>
