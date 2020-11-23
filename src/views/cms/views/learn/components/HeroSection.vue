<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Hero Section Content</h2>
    <form>
      <b-row class="mt-5">
        <b-col>
          <div class="form-section">
            <label>Leading to Main Branded Text</label>
            <textarea v-model="sectionData.leadingToMainText"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Main Branded Text</label>
            <textarea v-model="sectionData.mainText"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Sub Text</label>
            <textarea v-model="sectionData.subText"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update Hero Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to Hero Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>
<script>
import mixin from "@/views/cms/mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "HeroSection",
  mixins: [mixin],
  components: {
    EmailAlert
  },
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      leadingToMainText: "",
      mainText: "",
      subText: ""
    }
  }),
  methods: {
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.learnPage.headerSection = this.sectionData;
      if (update)
        this.previewContent(
          currentData,
          "Your changes will be previewed",
          null,
          "/preview_learn"
        );
      else
        this.updateContent(currentData, "First Section Updated Successfully");
    }
  },
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.headerSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>
>
