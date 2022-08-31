<template>
  <div>
    <Header2 />

    <div class="rg-c">
      <div class="gc-x">
        <h2 class="hc-x">Broadcast</h2>
        <main>
          <Message :status="status" :message="message" />

          <form @submit.prevent="handleSubmit">
            <div class="ml-xf">
              <label for="email">Title</label> <br />
              <input type="id" placeholder="Title" v-model="title" required />
            </div>

            <div class="ml-xf">
              <label for="number">Body</label><br />
              <textarea
                type="text"
                placeholder="Enter Text here..."
                v-model="body"
                col="3"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="ml-xf">
              <button :disabled="isDisabled" style="margin-top: 10px !important">
                {{ btnText }}
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
  name: "Broadcast-app",
  components: { Header2, Message },
  data() {
    return {
      title: "",
      body: "",
      status: null,
      message: "",
      btnText: "Send Broadcast",
      isDisabled: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.btnText = "Loading";
      this.isDisabled = true;
      const data = {
        title: this.title,
        body: this.body,
      };
      const datas = JSON.parse(localStorage.getItem("admin"));

      this.token = datas.token;
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/sendfirebase`,
          data,
          {
            headers: headers,
          }
        );
        console.log(response);
        if (response.data.success) {
          this.status = true;
          this.message = "Broadcast Sent sucessfully";
          this.$router.go();
        } else {
          this.status = false;
          this.message = "Broadcast Cant be sent";
          this.interval = setTimeout(() => {
            this.status = null;
          }, 3000);
        }
      } catch (e) {
        if (e.response.status == 400 || e.response.status == 422) {
          this.isDisabled = false;
          this.status = false;
          this.message = e.response.data.message;
          this.btnText = "Send Broadcast";
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
          }, 3000);
        } else {
          this.status = false;
          this.message = "Connection problem, try checking your network";
          this.isDisabled = false;
          this.btnText = "Send Broadcast";
          this.interval = setTimeout(() => {
            this.status = null;
          }, 3000);
        }
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
  max-width: 500px;
  width: 100%;
  margin: 100px auto;
  background: #fff;
  box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
  padding: 10px;
  border-radius: 15px;
}
@media screen and (max-width: 490px) {
  .rg-c .gc-x {
    margin-top: 60px;
    width: 100%;

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
  padding-top: 0px !important;
  padding-bottom: 0px !important;
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
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.xdir,
.vdir {
  font-size: 0.9rem;
}
textarea {
  box-sizing: border-box;
  padding: 10px;
  width: 96%;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>
