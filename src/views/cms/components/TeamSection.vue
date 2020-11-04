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
        <button @click.prevent="updateSection" class="mt-5 ml-1">
          <fai icon="upload" />
          Update Team Section's Content
        </button>
      </b-row>
    </form>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </b-container>
</template>

<script>
import mixin from "../mixins/network_update_content";
import EmailAlert from "@/views/home/components/EmailAlert";
export default {
  name: "TeamSection",
  mixins: [mixin],
  components: { EmailAlert },
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
    updateSection: function() {
      let currentData = this.websiteData;
      let team = this.sectionData.team.filter(
        teamMember =>
          teamMember.name !== "" && this.validRoles(teamMember.roles)
      );
      team = team.map(teamMember => {
        teamMember.roles = teamMember.roles.filter(role => role.text !== "");
        return teamMember;
      });
      currentData.fourthSection.team = team;
      this.updateContent(
        currentData,
        "Team Section Content Updated Successfully"
      );
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

<style scoped></style>
