<template>
  <div class="home">
    <TheNavBar />
    <TheHeaderSection />
    <TheFirstSection />
    <TheSecondSection />
    <TheThirdSection />
    <TheFourthSection />
    <TheFooter />
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

export default {
  name: "Home",
  components: {
    TheNavBar,
    TheHeaderSection,
    TheFirstSection,
    TheSecondSection,
    TheThirdSection,
    TheFourthSection,
    TheFooter
  }
};
</script>
