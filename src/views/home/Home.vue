<template>
  <div class="home">
    <TheNavBar />
    <TheHeaderSection />
    <TheFirstSection />
    <TheSecondSection />
    <TheThirdSection />
    <TheFourthSection />
    <TheFooter />
    <TheLoader />
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

export default {
  name: "Home",
  created() {
    window.addEventListener("load", function() {
      document.getElementById("loader-div").style.display = "none";
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
