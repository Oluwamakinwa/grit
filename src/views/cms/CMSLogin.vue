<template>
  <div class="cms-login">
    <TheHeader />
    <div class="content">
      <b-container>
        <form>
          <b-row class="mt-5">
            <b-col md="6" offset-md="3">
              <div class="form-section">
                <label>Password</label>
                <input
                  type="password"
                  aria-label="Password"
                  v-model="password"
                />
              </div>
              <button @click.prevent="login" class="mt-5 ml-1 login-btn">
                Login
              </button>
            </b-col>
          </b-row>
        </form>
      </b-container>
    </div>
    <EmailAlert v-if="showAlert" :type="type" :content="content" />
  </div>
</template>

<script>
import TheHeader from "@/views/cms/components/TheHeader";
import EmailAlert from "@/views/home/components/EmailAlert";
import axios from "axios";
export default {
  name: "CMSLogin",
  data: () => ({
    showAlert: false,
    type: "success",
    content: "",
    password: ""
  }),
  components: { TheHeader, EmailAlert },
  methods: {
    login: function() {
      axios
        .post("/login", {
          password: this.password
        })
        .then(() => {
          this.$router.push("/cms");
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
</script>

<style lang="sass" scoped>
.content
  margin-top: calc(70px + 3rem)
.form-section
  label
    display: block
    font-family: "Gordita Medium", sans-serif
  textarea, input
    display: block
    border: 1px solid #dedede
      radius: 4px
    padding: 8px 15px
    box-shadow: 1px 1px 4px rgba(0,0,0,.05)
    width: 100%
    min-width: 100%
    font-family: "Gordita Light", sans-serif
    font-size: 15px
  textarea
    min-height: 80px
  button
    font-family: "Gordita Medium", sans-serif
    background: #0B0C07
    border: none
      radius: 4px
    color: white
    padding: 8px 15px
    font-size: 14px
    &.small-btn
      font-size: 12px
      padding: 6px 10px
.login-btn
  width: 100%
  padding: 6px 10px
  color: white
  border-radius: 6px
  font-family: "Gordita Medium", sans-serif
  background: #0B0C07
  font-size: 14px
</style>
