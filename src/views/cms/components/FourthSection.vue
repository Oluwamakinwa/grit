<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Fourth Section Content</h2>
    <form>
      <b-row class="mt-5">
        <b-col>
          <div class="form-section">
            <label>Leading to Main Branded text</label>
            <textarea v-model="sectionData.leadingToMainText"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Main Branded text</label>
            <textarea v-model="sectionData.mainText"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Main Sub Text</label>
            <textarea v-model="sectionData.mainSubText"></textarea>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="6">
          <div class="form-section">
            <label>Quote Text</label>
            <textarea v-model="sectionData.quoteText"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection" class="mt-5">
        <fai icon="upload" />
        Update Fourth Section's Content
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import mixin from "../mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "FourthSection",
  components: { EmailAlert },
  mixins: [mixin],
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      leadingToMainText: "",
      mainText: "",
      mainSubText: "",
      quoteText: ""
    }
  }),
  methods: {
    updateSection() {
      let currentData = this.websiteData;
      currentData.fourthSection = this.sectionData;
      console.log(currentData);
      this.updateContent(currentData, "Fourth Section Updated Successfully");
      return;
    }
  },
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.fourthSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>

<style scoped></style>
