<template>
  <div class="the-fourth-section">
    <b-container>
      <b-row>
        <b-col md="6" offset-md="6">
          <DarkCard
            v-for="(cardData, index) in websiteData.thirdSection.blackCards"
            :key="`thirdsectioncarddata-${index}`"
            :title="cardData.title"
            :class="{ 'large-mt': index !== 0 }"
          >
            <ul>
              <li
                v-for="(reason, indexx) in cardData.content"
                :key="`thirdsectionreasoncarddata-${index}-${indexx}`"
              >
                {{ reason.text }}
              </li>
            </ul>
          </DarkCard>
          <div class="other-section">
            <p class="eye-catcher gordita-light">
              {{ websiteData.thirdSection.leadingToMainText }}
            </p>
            <BrandedText>{{ websiteData.thirdSection.mainText }}</BrandedText>
          </div>
          <div class="w-100 cen">
            <button id="roadmap-button" class="gordita-medium">
              <div class="pseudo-button">
                <span>
                  {{ websiteData.thirdSection.actionButtonText }}
                </span>
                <img :src="downIcon" alt="Download our survey" />
              </div>
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import DarkCard from "../components/DarkCard";
import BrandedText from "@/components/BrandedText";
import downIcon from "@/assets/img/icons/button_down.svg";
export default {
  name: "TheThirdSection",
  components: {
    BrandedText,
    DarkCard
  },
  props: {
    websiteData: Object
  },
  data: () => ({ downIcon })
};
</script>
<style lang="sass" scoped>
$minFontSize: 26px
$maxFontSize: 37px
$scaler: 10vw

.the-fourth-section
  background: linear-gradient(180deg, #1A1C11 0%, #0B0C07 100%)
  padding: 4rem 0
  .cen
    display: flex
    width: 100%
    @media only screen and (max-width: 767px)
      justify-content: center
  .large-mt
    margin-top: 4rem
  .eye-catcher
    padding-top: 3rem
    color: white
    @media only screen and (min-width: 320px)
      font-size: calc(26px + 6 * ((100vw - 320px) / 680))
    @media only screen and (min-width: 1000px)
      font-size: 37px
    line-height: 130%
    margin-bottom: 0
    // @media only screen and (max-width: 991px)
    //   font-size: 30px
  #roadmap-button
    display: inline-flex
    align-items: center
    padding: 28px 30px
    background: #626262
    border-radius: 40px
    top: -14px
    left: -12.5px
    border: none
    z-index: 1
    margin-top: 1.5rem
    @media only screen and (max-width: 358px)
      padding: 28px 20px
      justify-content: center
      width: 100%
      .pseudo-button
        padding: 22px 15px !important
        &::after
          width: calc(100% + 22px) !important
          left: -11.5px !important
    .pseudo-button
      background-color: #000
      display: inline-flex
      color: white
      font-size: 16px
      border: none
      padding: 25px
      border-radius: 20px
      position: relative
      z-index: 2
      & > span
        margin-right: 12.5px
      &::after
        content: ''
        position: absolute
        background: transparent
        border: 2px #000 dashed
          radius: 34px
        height: calc(100% + 30px)
        width: calc(100% + 32px)
        top: -15px
        left: -16px
</style>
