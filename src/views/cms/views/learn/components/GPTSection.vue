<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">GPT Section Content</h2>
    <form>
      <b-row class="mt-5">
        <b-col>
          <div class="form-section">
            <label>Main Branded Text</label>
            <textarea v-model="sectionData.mainText"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Main Sub Text</label>
            <textarea v-model="sectionData.subText"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Action Text</label>
            <textarea v-model="sectionData.actionText"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update GPT Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to GPT Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>
<script>
import mixin from "@/views/cms/mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "GPTSection",
  mixins: [mixin],
  components: {
    EmailAlert
  },
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      mainText: "",
      subText: "",
      actionText: ""
    }
  }),
  methods: {
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.learnPage.gptSection = this.sectionData;
      if (update)
        this.previewContent(
          currentData,
          "Your changes will be previewed",
          null,
          "/preview_learn"
        );
      else this.updateContent(currentData, "GPT Section Updated Successfully");
    }
  },
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.gptSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>
>
