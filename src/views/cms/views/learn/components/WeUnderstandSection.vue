<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">We Understand Section Content</h2>
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
            <label>Main Sub Text</label>
            <textarea v-model="sectionData.mainSubText"></textarea>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <div class="form-section">
            <label>Paragraph I</label>
            <textarea v-model="sectionData.paragraphs[0].text"></textarea>
          </div>
        </b-col>
        <b-col md="4">
          <div class="form-section">
            <label>Paragraph II</label>
            <textarea v-model="sectionData.paragraphs[1].text"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update We Understand Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to We Understand Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>
<script>
import mixin from "@/views/cms/mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "WeUnderstandSection",
  mixins: [mixin],
  components: {
    EmailAlert
  },
  methods: {
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.learnPage.weUnderstandSection = this.sectionData;
      if (update)
        this.previewContent(
          currentData,
          "Your changes will be previewed",
          null,
          "/preview_learn"
        );
      else
        this.updateContent(
          currentData,
          "We Understand Section Updated Successfully"
        );
    }
  },
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      leadingToMainText: "",
      mainText: "",
      mainSubText: "",
      paragraphs: [{ text: "" }, { text: "" }]
    }
  }),
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.weUnderstandSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>
>
