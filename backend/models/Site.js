const mongoose = require("mongoose");
const { Schema } = mongoose;

const siteSchema = new Schema({
  emailSuccessAlert: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  hero: {
    leadingToMainText: String,
    mainText: String,
    mainSubText: String,
    emailFormSubText: String
  },
  firstSection: {
    mainText: String,
    subText: String,
    paragraph: [{ text: String }]
  },
  secondSection: {
    backgroundText: String,
    leadingToMainText: String,
    mainText: String,
    paragraph: [{ text: String }]
  },
  thirdSection: {
    leadingToMainText: String,
    mainText: String,
    actionButtonText: String,
    blackCards: [{ title: String, content: [{ text: String }] }]
  },
  fourthSection: {
    leadingToMainText: String,
    mainText: String,
    mainSubText: String,
    team: [{ name: String, roles: [{ text: String }], image: String }],
    quoteText: String
  },
  footer: {
    mainText: String,
    surveyText: String,
    address: String,
    copyrightText: String
  }
});

module.exports = mongoose.model("Site", siteSchema);
