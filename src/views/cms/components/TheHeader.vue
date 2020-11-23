<template>
  <header class="cms-header">
    <img :src="logo" />
    <a v-if="loggedIn" href="/emails_as_csv" class="gordita-medium"
      ><fai icon="download" /> Click to Download Emails as CSV</a
    >
    <p class="gordita-medium" @click.prevent="logOut" v-if="loggedIn">
      <fai icon="sign-out-alt" /> Log out
    </p>
  </header>
</template>

<script>
import logo from "@/assets/img/logo.svg";
import axios from "axios";
export default {
  name: "TheHeader",
  data: () => ({ logo }),
  props: {
    loggedIn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logOut: function() {
      axios.get("/logout").then(() => this.$router.push("/login"));
    }
  }
};
</script>

<style lang="sass" scoped>
.cms-header
  display: flex
  justify-content: space-between
  padding: 15px 40px
  background: #0B0C07
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 90000
  height: 70px
  align-items: center
  a, p
    text-decoration: none
    font-size: .9rem
    color: white
    margin-bottom: 0
    cursor: pointer
</style>
