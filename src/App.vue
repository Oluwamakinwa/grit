<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  box-sizing: border-box;
}
.leading-to {
  color: #0b0c07;
  font-size: 36.85px;
  @media only screen and (max-width: 991px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 25px;
  }
}
.brand-dark-fore {
  color: #0b0c07;
}
.gordita-plain {
  font-family: "Gordita Regular", sans-serif;
}
.gordita-light {
  font-family: "Gordita Light", sans-serif;
}
.gordita-medium {
  font-family: "Gordita Medium", sans-serif;
}
.gordita-black {
  font-family: "Gordita Black", sans-serif;
}
.gordita-regular {
  font-family: "Gordita Regular", sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width: 769px) and (max-width: 991px) {
  .container,
  .container-md,
  .container-sm {
    width: calc(100% - 30px) !important;
    max-width: calc(100% - 15px) !important;
  }
}

@media screen and (min-width: 567px) and (max-width: 767px) {
  .container,
  .container-md,
  .container-sm {
    width: calc(100% - 40px) !important;
    max-width: calc(100% - 40px) !important;
  }
}
</style>
