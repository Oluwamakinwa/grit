<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Second Section Content</h2>
    <form>
      <b-row class="mt-5">
        <b-col>
          <div class="form-section">
            <label>Background Text</label>
            <textarea v-model="sectionData.backgroundText"></textarea>
          </div>
        </b-col>
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
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <div class="form-section">
            <label>Paragraph I</label>
            <textarea v-model="sectionData.paragraph[0].text"></textarea>
          </div>
        </b-col>
        <b-col>
          <div class="form-section">
            <label>Paragraph II</label>
            <textarea v-model="sectionData.paragraph[1].text"></textarea>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update Second Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to Second Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import mixin from "../mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "SecondSection",
  components: { EmailAlert },
  mixins: [mixin],
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      backgroundText: "",
      leadingToMainText: "",
      mainText: "",
      paragraph: Array(2).fill({ text: "" })
    }
  }),
  methods: {
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.secondSection = this.sectionData;
      if (update)
        this.previewContent(currentData, "Your changes will be previewed");
      else
        this.updateContent(
          currentData,
          "Second Section Content Updated Successfully"
        );
      return;
    }
  },
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.secondSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>

<style scoped></style>
