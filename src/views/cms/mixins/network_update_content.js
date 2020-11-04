import axios from "axios";

export default {
  methods: {
    updateContent: function(data, mssg) {
      axios
        .post("/update_content", {
          websiteData: data
        })
        .then(() => {
          this.type = "success";
          this.content = mssg;
          this.showAlert = true;
          this.$emit("updated");
          setTimeout(() => (this.showAlert = false), 3000);
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
