<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Motivation Section Content</h2>
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
            <label>Parapraph</label>
            <textarea v-model="sectionData.paragraph"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update Motivation Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to Motivation Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>
<script>
import mixin from "@/views/cms/mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "MotivationSection",
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
      paragraph: ""
    }
  }),
  methods: {
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.learnPage.motivationSection = this.sectionData;
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
          "Motivation Section Updated Successfully"
        );
    }
  },
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.motivationSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>
>
