<template>
  <div :class="{ dark }" id="branded-text" class="branded-text">
    <h2><slot></slot></h2>
    <!-- <h2 class="shadow"><slot></slot></h2> -->
    <svg stroke-width="1.5" viewbox="0 0 300 100">
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
      let initialY;
      let increment = Math.round(h2.offsetHeight / 92);
      if (window.outerWidth >= 1200) initialY = 92;
      else if (window.outerWidth > 991 && window.outerWidth <= 1199)
        initialY = 83;
      else if (window.outerWidth > 932 && window.outerWidth <= 991)
        initialY = 79;
      else if (window.outerWidth > 879 && window.outerWidth <= 932)
        initialY = 73;
      else if (window.outerWidth > 827 && window.outerWidth <= 879)
        initialY = 67;
      else if (window.outerWidth > 607 && window.outerWidth <= 826)
        initialY = 58;
      else initialY = 55;
      svg
        .getElementsByTagName("text")[0]
        .setAttribute(
          "y",
          initialY + (increment >= 2 ? increment * 3 : increment)
        );

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
    font-size: 95px
    @media only screen and (max-width: 1199px)
      font-size: 85px
    @media only screen and (max-width: 991px)
      font-size: 80px
    @media only screen and (max-width: 932px)
      font-size: 75px
    @media only screen and (max-width: 879px)
      font-size: 70px
    @media only screen and (max-width: 827px)
      font-size: 60px
    @media only screen and (max-width: 607px)
      font-size: 53px
    .text-shadow
      font-family: 'Gordita Black', sans-serif
  h2
    font-family: 'Gordita Black', sans-serif
    color: white
    font-size: 95px
    position: relative
    z-index: 2
    @media only screen and (max-width: 1199px)
      font-size: 85px
    @media only screen and (max-width: 991px)
      font-size: 80px
    @media only screen and (max-width: 932px)
      font-size: 75px
    @media only screen and (max-width: 879px)
      font-size: 70px
    @media only screen and (max-width: 827px)
      font-size: 60px
    @media only screen and (max-width: 607px)
      font-size: 53px
  &.dark
    h2
      color: #0b0c07
    svg
      stroke: #0b0c0770
</style>
