<template>
  <div class="team-person">
    <img :src="person.image" :alt="person.name" />
    <div class="text">
      <p class="gordita-medium brand-dark-fore">{{ person.name }}</p>
      <ul>
        <li
          class="gordita-light"
          v-for="(role, index) in person.roles"
          :key="`contact-${index}`"
        >
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamPerson",
  props: {
    person: {
      type: Object
    }
  }
};
</script>
<style lang="sass" scoped>
.team-person
  width: 100%
  display: flex
  align-items: flex-start
  .text
    margin-left: 10px
    display: flex
    flex-direction: column
    justify-content: space-between
    p
      font-size: 24px
  ul
    list-style: none
    margin-bottom: 0
    li
      font-size: 16px
  img
    width: 50%
    height: auto
    max-width: 220px
    display: flex
</style>
