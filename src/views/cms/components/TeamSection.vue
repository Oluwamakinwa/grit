<template>
  <b-container class="team-section">
    <h2 class="gordita-medium">Team Section Content</h2>
    <form>
      <b-row
        class="mt-4"
        v-for="(teamRow, index) in splitTeam"
        :key="`teamRow-${index}`"
      >
        <b-col
          md="4"
          v-for="(teamMember, i) in teamRow"
          :key="`teamMember-${index}-${i}`"
        >
          <div class="form-section">
            <label>Team Member {{ 3 * index + (i + 1) }} Picture</label>
            <TeamImageInput
              @invalid-image-type="showErrorAlert"
              @image-changed="imageChanged"
              :index="3 * index + i"
              :team-member="sectionData.team[3 * index + i]"
            />
            <label>Team Member {{ 3 * index + (i + 1) }} Name</label>
            <input v-model="sectionData.team[3 * index + i].name" />
          </div>
          <div class="form-section mt-3">
            <label>Team Member {{ 3 * index + (i + 1) }} Roles</label>
            <div
              v-for="(role, j) in sectionData.team[3 * index + i].roles"
              :key="`team-role-${i}-${j}-${index}`"
            >
              <input
                class="mt-3"
                v-model="sectionData.team[3 * index + i].roles[j].text"
              />
            </div>
            <button
              @click.prevent="addContent(3 * index + i)"
              class="small-btn mt-3"
              v-if="sectionData.team[3 * index + i].roles.length < 2"
            >
              <fai icon="plus" />
              Add Role
            </button>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <button class="mt-5" @click.prevent="addTeamMember">
          <fai icon="plus" />
          Add New Team Member
        </button>
        <button @click.prevent="updateSection(false)" class="mt-5 ml-1">
          <fai icon="upload" />
          Update Team Section's Content
        </button>
        <button @click.prevent="updateSection(true)" class="mt-5 ml-1">
          <fai icon="magic" />
          Preview Changes to Team Section
        </button>
      </b-row>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import mixin from "../mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
import TeamImageInput from "@/components/TeamImageInput";
import axios from "axios";

export default {
  name: "TeamSection",
  mixins: [mixin],
  components: { TeamImageInput, EmailAlert },
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    sectionData: {
      team: []
    }
  }),
  mounted() {
    Object.keys(this.sectionData).forEach(key => {
      this.sectionData[key] = this.websiteData.fourthSection[key];
    });
  },
  methods: {
    addContent: function(index) {
      this.sectionData.team[index].roles.push({ text: "" });
    },
    addTeamMember: function() {
      this.sectionData.team.push({
        name: "",
        roles: [{ text: "" }]
      });
    },
    validRoles: function(roles) {
      if (!roles.length) return false;
      else {
        let valid = false;
        for (let role of roles) {
          if (role.text !== "") {
            valid = true;
            break;
          }
        }
        return valid;
      }
    },
    updateSection: async function(update = false) {
      let currentData = await this.getWebsiteData(this.websiteData, update);
      let team = this.sectionData.team.filter(
        teamMember =>
          teamMember.name !== "" && this.validRoles(teamMember.roles)
      );
      team = await Promise.all(
        team.map(async teamMember => {
          teamMember.roles = teamMember.roles.filter(role => role.text !== "");
          if (teamMember.updatedImage) {
            let data = new FormData();
            data.append(
              "upload_preset",
              process.env.VUE_APP_CLOUDINARY_UNSIGNED_PRESET
            );
            data.append("file", teamMember.updatedImage);
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
            teamMember.image = secure_url;
            delete teamMember.updatedImage;
          } else {
            if (!teamMember.image)
              teamMember.image =
                "https://res.cloudinary.com/hotel-finder/image/upload/v1604964056/avatar_temara.png";
          }
          return teamMember;
        })
      );
      currentData.fourthSection.team = team;
      if (update)
        this.previewContent(currentData, "Your changes will be previewed");
      else
        this.updateContent(
          currentData,
          "Team Section Content Updated Successfully",
          () => (this.sectionData.team = team)
        );
    },
    showErrorAlert: function() {
      this.content =
        "Please upload either jpeg, jpg or png. Other file types are not allowed";
      this.type = "error";
      this.showAlert = true;
      setTimeout(() => (this.showAlert = false), 3000);
    },
    imageChanged: function(data) {
      this.sectionData.team[data.index].updatedImage = data.file;
    }
  },
  computed: {
    splitTeam: function() {
      let threes = [];
      let intermediate = [];
      this.sectionData.team.forEach(teamMember => {
        intermediate.push(teamMember);
        if (intermediate.length === 3) {
          threes.push(intermediate);
          intermediate = [];
        }
      });
      if (intermediate.length) threes.push(intermediate);
      return threes;
    }
  },
  props: {
    websiteData: Object
  }
};
</script>

<style lang="sass" scoped></style>
