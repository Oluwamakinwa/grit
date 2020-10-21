<template>
  <div :class="{ dark }" id="branded-text" class="branded-text">
    <h2><slot></slot></h2>
    <!-- <h2 class="shadow"><slot></slot></h2> -->
    <svg stroke-width="1.5" font-size="95" viewbox="0 0 300 100">
      <text
        class="text"
        y="100"
        x="0"
        fill="none"
        font-family="'Gordita Black', sans-serif"
      >
        <slot></slot>
      </text>
    </svg>
  </div>
</template>
<script>
export default {
  name: "BrandedText",
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  created: function() {
    window.addEventListener("load", this.wrapSVGText);
    window.addEventListener("resize", this.wrapSVGText);
  },
  destroyed: function() {
    window.removeEventListener("load", this.wrapSVGText);
    window.removeEventListener("resize", this.wrapSVGText);
  },
  methods: {
    wrapSVGText() {
      const element = this.$el.getElementsByClassName("text")[0];
      const h2 = this.$el.getElementsByTagName("h2")[0];
      const computedH2Styles = window.getComputedStyle(h2);
      const h2Width = computedH2Styles.getPropertyValue("width");
      const svg = this.$el.getElementsByTagName("svg")[0];
      let increment = Math.round(h2.offsetHeight / 92);
      svg
        .getElementsByTagName("text")[0]
        .setAttribute("y", 92 + (increment >= 2 ? increment * 3 : increment));

      svg.setAttribute("width", h2Width);
      svg.setAttribute("height", h2.offsetHeight + 20);

      /* get the text */

      const text = h2.innerHTML;
      const y = 0;
      let width = h2.offsetWidth;
      const lineHeight = computedH2Styles.getPropertyValue("line-height");

      /* split the words into array */
      let words = text.split(" ");
      let line = "";
      /* Make a tspan for testing */
      element.innerHTML = '<tspan id="PROCESSING">busy</tspan >';

      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var testElem = document.getElementById("PROCESSING");
        /*  Add line in testElement */
        testElem.innerHTML = testLine;
        /* Messure textElement */
        var metrics = testElem.getBoundingClientRect(),
          testWidth = metrics.width;

        if (testWidth >= width && n > 0) {
          element.innerHTML += `<tspan x="0" dy="${y}">${line}</tspan>`;
          line = words[n] + " ";
        } else {
          line = testLine;
        }
      }

      element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + "</tspan>";
      document.getElementById("PROCESSING").remove();
      element.querySelectorAll("tspan").forEach((tspan, index) => {
        if (index !== 0) tspan.setAttribute("dy", lineHeight);
      });
      // // var element = document.getElementById("test")
    }
  }
};
</script>
<style lang="sass" scoped>
.branded-text
  position: relative
  svg
    position: absolute
    top: -5.5%
    left: 3px
    z-index: 1
    width: 100%
    transition: 2s
    stroke: #ffffff70
    .text-shadow
      font-family: 'Gordita Black', sans-serif
  h2
    font-family: 'Gordita Black', sans-serif
    color: white
    font-size: 95px
    position: relative
    z-index: 2
  &.dark
    h2
      color: #0b0c07
    svg
      stroke: #0b0c0770
</style>
