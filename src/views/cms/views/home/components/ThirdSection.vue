<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Third Section Content</h2>
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
            <label>Call to Action Text</label>
            <textarea v-model="sectionData.actionButtonText"></textarea>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col
          v-for="(blackCard, index) in sectionData.blackCards"
          :key="`blackcard-${index}`"
        >
          <div class="form-section">
            <label>Black Card {{ index + 1 }} Title</label>
            <input v-model="blackCard.title" />
            <label class="mt-4">Black Card {{ index + 1 }} Content</label>
            <div
              v-for="(content, i) in blackCard.content"
              :key="`blackCard-${index}-${i}`"
            >
              <input
                class="mt-3"
                v-model="sectionData.blackCards[index].content[i].text"
              />
            </div>
            <button
              @click.prevent="addContent(index)"
              class="small-btn mt-3"
              v-if="blackCard.content.length < 3"
            >
              <fai icon="plus" />
              Add content
            </button>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update Third Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to Third Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import EmailAlert from "@/views/home/components/EmailAlert";
import mixin from "@/views/cms/mixins/network_update_content";
export default {
  name: "ThirdSection",
  mixins: [mixin],
  components: { EmailAlert },
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      leadingToMainText: "",
      mainText: "",
      actionButtonText: "",
      blackCards: [{ title: "", content: [{ text: "" }] }]
    }
  }),
  methods: {
    addContent: function(index) {
      this.sectionData.blackCards[index].content.push({ text: "" });
    },
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.thirdSection = this.sectionData;
      let blackCards = this.sectionData.blackCards.map(blackCard => {
        blackCard.content = blackCard.content.filter(
          blackCardContent => blackCardContent.text !== ""
        );
        return blackCard;
      });
      blackCards = blackCards.filter(blackCard => blackCard.title !== "");
      currentData.homePage.thirdSection.blackCards = blackCards;
      if (update)
        this.previewContent(currentData, "Your changes will be previewed");
      else
        this.updateContent(currentData, "Third Section Updated Successfully");
    }
  },
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.thirdSection[key];
    });
  },
  props: {
    websiteData: Object
  }
};
</script>

<style scoped></style>
