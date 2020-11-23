<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Program Section Content</h2>
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
            <label>Program List</label>
            <div
              v-for="(program, index) in sectionData.programList"
              :key="`program-${index}`"
            >
              <input
                class="mt-3"
                v-model="sectionData.programList[index].text"
              />
            </div>
            <button @click.prevent="addProgram()" class="small-btn mt-3">
              <fai icon="plus" />
              Add Program
            </button>
          </div>
        </b-col>
      </b-row>
      <button @click.prevent="updateSection" class="mt-5">
        <fai icon="upload" />
        Update Program Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to Program Section
      </button>
    </form>
  </b-container>
</template>
<script>
export default {
  name: "ProgramSection",
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      leadingToMainText: "",
      programList: [{ text: "" }, { text: "" }],
      programImages: []
    }
  }),
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.programsSection[key];
    });
  },
  props: {
    websiteData: Object
  },
  methods: {
    addProgram: function() {
      this.sectionData.programList.push({ text: "" });
    }
  }
};
</script>
>
