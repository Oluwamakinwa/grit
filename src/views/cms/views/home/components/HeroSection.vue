<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Hero Section Content</h2>
    <form>
      <b-row class="mt-5">
        <b-col md="4">
          <div class="form-section">
            <label>Email Success Notification</label>
            <textarea v-model="emailSuccessAlert"></textarea>
          </div>
        </b-col>
        <b-col md="4">
          <div class="form-section">
            <label>Leading to Main Branded Text</label>
            <textarea v-model="hero.leadingToMainText"></textarea>
          </div>
        </b-col>
        <b-col md="4">
          <div class="form-section">
            <label>Main Branded Text</label>
            <textarea v-model="hero.mainText"></textarea>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="4">
          <div class="form-section">
            <label>Main Sub Text</label>
            <textarea v-model="hero.mainSubText"></textarea>
          </div>
        </b-col>
        <b-col md="4">
          <div class="form-section">
            <label>Email Form Sub Text</label>
            <textarea v-model="hero.emailFormSubText"></textarea>
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
  components: { EmailAlert },
  mixins: [mixin],
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    emailSuccessAlert: "",
    hero: {
      leadingToMainText: "",
      mainText: "",
      mainSubText: "",
      emailFormSubText: ""
    }
  }),
  mounted() {
    this.emailSuccessAlert = this.websiteData.emailSuccessAlert;
    console.log(this.websiteData);
    console.log(this.websiteData.hero);
    Object.keys(this.hero).forEach(key => {
      this.hero[key] = this.websiteData.hero[key];
    });
  },
  methods: {
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.homePage.emailSuccessAlert = this.emailSuccessAlert;
      currentData.homePage.hero = this.hero;
      if (update)
        this.previewContent(currentData, "Your changes will be previewed");
      else this.updateContent(currentData, "Hero Section Updated Successfully");
    }
  },
  props: {
    websiteData: Object
  }
};
</script>

<style lang="sass" scoped></style>
