const mongoose = require("mongoose");
const { Schema } = mongoose;

const previewSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  homePage: {
    emailSuccessAlert: String,
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
    }
  },
  learnPage: {
    headerSection: {
      leadingToMainText: String,
      mainText: String,
      subText: String
    },
    motivationSection: {
      leadingToMainText: String,
      mainText: String,
      paragraph: String
    },
    blackNetworthSection: {
      leadingToMainText: String,
      mainText: String,
      subText: String
    },
    weUnderstandSection: {
      leadingToMainText: String,
      mainText: String,
      mainSubText: String,
      paragraphs: [{ text: String }]
    },
    programsSection: {
      leadingToMainText: String,
      programImages: [
        { backgroundImage: String, programName: String, programType: String }
      ],
      programList: [{ text: String }]
    },
    gptSection: {
      mainText: String,
      subText: String,
      actionText: String
    }
  },
  footer: {
    mainText: String,
    surveyText: String,
    address: String,
    copyrightText: String
  }
});

module.exports = mongoose.model("Preview", previewSchema);
