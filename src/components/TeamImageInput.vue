<template>
  <div class="team-image-input">
    <img class="team-member" :alt="teamMember.name" :src="previewImage" />
    <input type="file" @change="updateImage" />
    <div class="drop-file">
      <p>Click or Drag To Upload a Picture</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamImageInput",
  data: () => ({
    imageFile: null,
    previewImage: null,
    avatarUrl:
      "https://res.cloudinary.com/hotel-finder/image/upload/v1604964056/avatar_temara.png"
  }),
  mounted: function() {
    this.previewImage = this.teamMember.image
      ? this.teamMember.image
      : this.avatarUrl;
  },
  props: {
    teamMember: Object,
    index: Number
  },
  methods: {
    updateImage: function(e) {
      const fileTypes = ["jpg", "jpeg", "png"];
      if (e.target.files && e.target.files[0]) {
        const extension = e.target.files[0].name
            .split(".")
            .pop()
            .toLowerCase(), //file extension from input file
          isSuccess = fileTypes.indexOf(extension) !== -1; //is extension in acceptable types
        if (isSuccess) {
          this.imageFile = e.target.files[0];
          let reader = new FileReader();
          //TODO WRITE CODE TO CHECK FOR ASPECT RATIO ON FRONTEND
          reader.onload = function(ev) {
            this.previewImage = ev.target.result;
          }.bind(this);
          reader.readAsDataURL(e.target.files[0]);
          this.$emit("image-changed", {
            index: this.index,
            file: this.imageFile
          });
        } else {
          this.$emit("invalid-image-type");
        }
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.team-image-input
  position: relative
  width: 100%
  max-width: 280px
  margin-bottom: 2rem
  cursor: pointer

  &:hover
    .drop-file
      opacity: 1

  .drop-file
    width: 100%
    height: 100%
    top: 0
    left: 0
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    background: rgba(0, 0, 0, 0.45)
    z-index: 5
    opacity: 0
    transition: opacity .9s

    p
      margin-bottom: 0
      color: white
      font-family: "Gordita Regular", sans-serif
      font-size: 1.3rem
      text-align: center
      line-height: 150%

  img
    position: relative
    z-index: 4
    width: 100%
    border:
      radius: 5px

    &::after
      content: ''
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      background: rgba(0, 0, 0, .45)
      z-index: 5

  input
    opacity: 0
    width: 100%
    height: 100%
    z-index: 7
    position: absolute
    top: 0
    left: 0
    cursor: pointer
</style>
