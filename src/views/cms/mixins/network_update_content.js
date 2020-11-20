import axios from "axios";

export default {
  methods: {
    getWebsiteData: async function(/*data update = false*/) {
      let websiteData;
      // if (update) {
      let res = await axios.get("/site_data");
      websiteData = res.data;
      // } else websiteData = data;
      let currentData = {};
      currentData.homePage = websiteData.homePage;
      currentData.learnPage = websiteData.learnPage;
      currentData.footer = websiteData.footer;
      return currentData;
    },
    updateContent: function(data, mssg, callback = null) {
      axios
        .post("/update_content", {
          websiteData: data
        })
        .then(() => {
          this.type = "success";
          this.content = mssg;
          this.showAlert = true;
          this.$emit("updated");
          if (callback) callback();
          setTimeout(() => (this.showAlert = false), 3000);
        })
        .catch(err => {
          this.content = err.response.data.message;
          this.type = "error";
          this.showAlert = true;
          setTimeout(() => (this.showAlert = false), 3000);
        });
    },
    previewContent: function(data, mssg, callback = null) {
      axios
        .post("/set_preview", {
          websiteData: data
        })
        .then(() => {
          this.type = "success";
          this.content = mssg;
          this.showAlert = true;
          if (callback) callback();
          setTimeout(() => {
            this.showAlert = false;
            window.open("/preview_home");
          }, 1500);
        })
        .catch(err => {
          this.content = err.response.data.message;
          this.type = "error";
          this.showAlert = true;
          setTimeout(() => (this.showAlert = false), 3000);
        });
    }
  }
};
