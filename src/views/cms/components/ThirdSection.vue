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
      <button @click.prevent="updateSection" class="mt-5">
        <fai icon="upload" />
        Update Third Section's Content
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import EmailAlert from "@/views/home/components/EmailAlert";
import mixin from "../mixins/network_update_content";
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
    updateSection() {
      let currentData = this.websiteData;
      let blackCards = this.sectionData.blackCards.map(blackCard =>
        blackCard.content.filter(
          blackCardContent => blackCardContent.text !== ""
        )
      );
      console.log(blackCards);
      currentData.thirdSection.blackCards = blackCards;
      console.log(currentData);
      this.updateContent(currentData, "Third Section Updated Successfully");
      return;
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
