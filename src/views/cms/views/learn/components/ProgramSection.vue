<template>
  <b-container class="hero-section">
    <h2 class="gordita-medium">Program Section Content</h2>
    <form>
      <h3 class="mt-4">Program Images</h3>
      <b-row
        class="mt-4"
        v-for="(programImages, i) in splitArray(3, sectionData.programImages)"
        :key="`programImages-${i}`"
      >
        <b-col
          md="4"
          v-for="(programImage, j) in programImages"
          :key="`programimage-${i}${j}`"
        >
          <div class="form-section">
            <label>Program Image {{ 3 * i + (j + 1) }}</label>
            <ImageUpload
              @invalid-image-type="showErrorAlert"
              @image-changed="imageChanged"
              :index="3 * i + j"
              :alt="
                sectionData.programImages[3 * i + j].programName
                  ? sectionData.programImages[3 * i + j].programName
                  : ''
              "
              :preview="
                sectionData.programImages[3 * i + j].backgroundImage
                  ? sectionData.programImages[3 * i + j].backgroundImage
                  : ''
              "
            />
            <div class="form-section mb-3">
              <label>Program Name</label>
              <input
                class="mt-3"
                v-model="sectionData.programImages[3 * i + j].programName"
              />
            </div>
            <div class="form-section mb-3">
              <label>Program Type</label>
              <input
                class="mt-3"
                v-model="sectionData.programImages[3 * i + j].programType"
              />
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button class="mt-1" @click.prevent="addProgramImage">
            <fai icon="plus" />
            Add New Program Image
          </button>
        </b-col>
      </b-row>
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
      <button @click.prevent="updateSection(false)" class="mt-5">
        <fai icon="upload" />
        Update Program Section's Content
      </button>
      <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
        <fai icon="magic" />
        Preview Changes to Program Section
      </button>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>
<script>
import mixin from "@/views/cms/mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
import array_helpers from "@/mixins/array_helpers";
import ImageUpload from "@/views/cms/components/ImageUpload";
import axios from "axios";

export default {
  name: "ProgramSection",
  mixins: [mixin, array_helpers],
  components: {
    EmailAlert,
    ImageUpload
  },
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      leadingToMainText: "",
      programList: [{ text: "" }],
      programImages: [{ programName: "", programType: "", backgroundImage: "" }]
    }
  }),
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.programsSection[key];
    });
    if (!this.sectionData.programImages.length)
      this.sectionData.programImages = [
        { programName: "", programType: "", backgroundImage: "" }
      ];
  },
  methods: {
    addProgram: function() {
      this.sectionData.programList.push({ text: "" });
    },
    addProgramImage: function() {
      this.sectionData.programImages.push({
        programName: "",
        programType: "",
        backgroundImage: ""
      });
    },
    showErrorAlert: function() {
      this.content =
        "Please upload either jpeg, jpg or png. Other file types are not allowed";
      this.type = "error";
      this.showAlert = true;
      setTimeout(() => (this.showAlert = false), 3000);
    },
    imageChanged: function(data) {
      this.sectionData.programImages[data.index].updatedImage = data.file;
    },
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      currentData.learnPage.programsSection = this.sectionData;
      currentData.learnPage.programsSection.programList = currentData.learnPage.programsSection.programList.filter(
        program => (program.text ? true : false)
      );
      let programImages = currentData.learnPage.programsSection.programImages.filter(
        programImage =>
          !programImage.programName && !programImage.programType
            ? false
            : !programImage.programName
            ? false
            : true
      );
      programImages = await Promise.all(
        programImages.map(async programImage => {
          if (programImage.updatedImage) {
            let data = new FormData();
            data.append(
              "upload_preset",
              process.env.VUE_APP_CLOUDINARY_UNSIGNED_PRESET
            );
            data.append("file", programImage.updatedImage);
            let res = await axios.post(
              process.env.VUE_APP_CLOUDINARY_URL,
              data,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              }
            );
            let { secure_url } = res.data;
            programImage.backgroundImage = secure_url;
            delete programImage.updatedImage;
          } else {
            if (!programImage.backgroundImage)
              programImage.backgroundImage =
                "https://res.cloudinary.com/hotel-finder/image/upload/v1604964056/avatar_temara.png";
          }
          return programImage;
        })
      );
      currentData.learnPage.programsSection.programImages = programImages;
      console.log(currentData);
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
          "Programs Section Updated Successfully"
        );
    }
  },
  props: {
    websiteData: Object
  }
};
</script>
>
