<template>
  <div>
    <Header2 />

    <div class="rg-c">
      <div class="gc-x">
        <h2 class="hc-x">Reset Password</h2>
        <main>
          <Message :status="status" :message="message" />
          <form @submit.prevent="handlePassword">
            <div class="ml-xf">
              <label for="email">Password</label> <br />
              <input
                type="password"
                placeholder="Enter your password"
                v-model="dpassword"
                required
                autocomplete=""
              />
            </div>

            <div class="ml-xf">
              <label for="number">New Password</label>
              <input
                type="password"
                placeholder="Set a New Password"
                v-model="npassword"
                required
                autocomplete=""
              />
            </div>
            <div class="ml-xf">
              <label for="number">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm Your New password"
                v-model="cnpassword"
                required
                autocomplete=""
              />
            </div>
            <div class="ml-xf">
              <button :disabled="isDisabled" style="margin-top: 10px !important">
                {{ btnPass }}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Header2 from "../../components/header.vue";
import Message from "../../components/message.vue";
import axios from "axios";
export default {
  name: "Reset-app",
  components: { Header2, Message },
  data() {
    return {
      code: "",
      status: null,
      message: "",
      btnText: "Send Code",
      isDisabled: false,
      id: "",
      btnPass: "Update Password",
      token: "",
    };
  },
  methods: {
    async handlePassword() {
      this.isDisabled = true;
      this.btnPass = "Loading";
      if (this.npassword.length >= 6) {
        if (this.npassword == this.cnpassword) {
          const data = {
            password: this.dpassword,
            newpassword: this.npassword,
          };
          try {
            const datas = JSON.parse(localStorage.getItem("admin"));

            this.token = datas.token;
            const response = await axios.post(
              `${process.env.VUE_APP_BASE_URL}api/updatepassword`,
              data,
              {
                headers: {
                  Authorization: "Bearer " + this.token,
                },
              }
            );

            this.status = true;
            this.message = response.data.message;
            this.npassword = "";
            this.dpassword = "";
            this.cnpassword = "";
            this.btnPass = "Update Password";
            this.interval = setTimeout(() => {
              this.status = null;
            }, 3000);
          } catch (e) {
            if (e.response.status == 400 || e.response.status == 422) {
              this.isDisabled = false;
              this.status = false;
              this.message = e.response.data.message;
              this.btnPass = "Sign In";
              this.isDisabled = false;
              this.interval = setTimeout(() => {
                this.status = null;
              }, 3000);
            } else {
              this.status = false;
              this.message = "Connection problem, try checking your network";
              this.isDisabled = false;
              this.interval = setTimeout(() => {
                this.status = null;
              }, 3000);
            }
          }
        } else {
          this.status = false;
          this.message = "Password does not match ";
          this.setTimeout = setTimeout(() => {
            this.status = null;
          }, 3000);
        }
      } else {
        this.status = false;
        this.message = "Password must be atleast six ";
        this.setTimeout = setTimeout(() => {
          this.status = null;
        }, 3000);
      }
    },
  },
};
</script>
<style scoped>
.rg-c {
  font-family: "Quicksand", Georgia, "Times New Roman", Times, serif;
  font-size: 1.6rem;
  padding: 10px;
}
.rg-c .gc-x {
  margin: 50px;
  max-width: 400px;
  width: 100%;
  margin: 100px auto;
  background: #fff;
  box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
  padding: 10px;
  border-radius: 15px;
}
@media screen and (max-width: 490px) {
  .rg-c .gc-x {
    width: 100%;
    margin: 0px;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 100px;
  }
}
.hc-x {
  font-size: 1.2rem;
  padding: 10px;
  margin: 0px;
  color: #222;
  font-weight: 700;
}
main {
  margin-top: 20px;
}
.xl-f {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.rm-bl {
  margin-left: 5px;
}

label {
  font-size: 1rem;
  width: 100%;
  color: #000;
}
input {
  outline: none;
  box-sizing: border-box;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 96%;
  padding: 10px;
}
button {
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  background: #0a1aa8;
  border: 1px solid #0a1aa8;
  border-radius: 10px;
  width: 96%;
  box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
}
input::-webkit-input-placeholder {
  font-family: "Quicksand", Georgia, "Times New Roman", Times, serif;
}
.xdir,
.vdir {
  color: #0a1aa8;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}
@media screen and (max-width: 490px) {
  label {
    font-size: 0.9rem;
    margin: 5px;
  }
  input {
    width: 95%;
    margin: 5px;
  }
  button {
    width: 95%;
    font-size: 0.9rem;
  }
  .rm-bl {
    margin-left: 12px;
  }
}
.ml-xf {
  width: 100%;
  padding: 10px;
}
.xdir,
.vdir {
  font-size: 0.9rem;
}
</style>
