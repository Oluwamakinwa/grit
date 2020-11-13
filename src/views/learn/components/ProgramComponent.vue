<template>
  <div
    :style="{ backgroundImage: `url(${program.backgroundImage})` }"
    class="program-component"
  >
    <div>
      <p class="gordita-black programName">{{ program.programName }}</p>
      <p class="gordita-bold programType">{{ program.programType }}</p>
    </div>
  </div>
</template>

<script>
import background from "../../../assets/img/defaultprogramme.png";
export default {
  name: "ProgramComponent",
  props: {
    program: {
      type: Object,
      default: () => ({
        programName: "Program Name",
        programType: "Institution",
        backgroundImage: background
      })
    }
  }
};
</script>

<style lang="sass" scoped>
.program-component
  width: 100%
  height: 211px
  background:
    repeat: no-repeat
    size: cover
    position: center
  padding: 25px 30px
  margin-bottom: 30px
  display: flex
  position: relative
  align-items: flex-end
  & > div
    position: relative
    z-index: 8
  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0,0,0,.45)
  .programName
    font-size: 30px
    color: white
    margin-bottom: .5rem
  .programType
    font-size: 18px
    color: white
    margin-bottom: 0
</style>
