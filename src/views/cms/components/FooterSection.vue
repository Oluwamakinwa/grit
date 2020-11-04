<template>
  <b-container class="team-section">
    <h2 class="gordita-medium">Footer Section Content</h2>
    <form>
      <b-row class="mt-5">
        <b-col md="4">
          <div class="form-section">
            <label>Main Branded text</label>
            <textarea v-model="sectionData.mainText"></textarea>
          </div>
        </b-col>
        <b-col md="4">
          <div class="form-section">
            <label>Survey Text</label>
            <textarea v-model="sectionData.surveyText"></textarea>
          </div>
        </b-col>
        <b-col md="4">
          <div class="form-section">
            <label>Address</label>
            <textarea v-model="sectionData.address"></textarea>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <div class="form-section">
            <label>Copyright Text</label>
            <textarea v-model="sectionData.copyrightText"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection" class="mt-5 ml-1">
        <fai icon="upload" />
        Update Footer Section's Content
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import mixin from "../mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "FooterSection",
  components: { EmailAlert },
  mixins: [mixin],
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      mainText: "",
      surveyText: "",
      address: "",
      copyrightText: ""
    }
  }),
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.footer[key];
    });
  },
  methods: {
    updateSection() {
      let currentData = this.websiteData;
      currentData.fourthSection = this.sectionData;
      console.log(currentData);
      this.updateContent(currentData, "Footer Section Updated Successfully");
      return;
    }
  },
  props: {
    websiteData: Object
  }
};
</script>

<style scoped></style>
