<template>
  <header class="cms-header">
    <img :src="logo" />
    <a href="/email_as_csv" class="gordita-medium"
      ><fai icon="download" /> Click to Download Emails as CSV</a
    >
  </header>
</template>

<script>
import logo from "@/assets/img/logo.svg";
export default {
  name: "Header",
  data: () => ({ logo })
};
</script>

<style lang="sass" scoped>
.cms-header
  display: flex
  justify-content: space-between
  padding: 15px 40px
  background: #0B0C07
  height: 70px
  align-items: center
  a
    text-decoration: none
    font-size: .9rem
    color: white
</style>
