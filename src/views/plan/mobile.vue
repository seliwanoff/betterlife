<template>
  <div>
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :color="color"
    />
    <Header2 />

    <div class="rg-c">
      <div class="gc-x">
        <div class="tab-banner">
          <TabNav
            :tabs="['MOBILE-PLANS', 'SME', 'ADD PLAN', 'UPDATE']"
            :selected="selected"
            @selected="setSelected"
          >
            <Tab :isSelected="selected === 'MOBILE-PLANS'">
              <h2 class="hc-x">DATA PLANS</h2>
              <Message :status="status" :message="message" />
              <main>
                <form @submit.prevent="handleSubmit">
                  <div class="ml-xf tcg-lf">
                    <div
                      style="width: 100%; border-bottom: 1px solid grey"
                      v-for="item in plans"
                      :key="item.id"
                    >
                      <div class="details-plan">
                        <div>
                          <h5
                            style="
                              display: flex;
                              align-items: center;
                              font-size: 0.8rem;
                              margin-top: 5px;
                            "
                          >
                            {{ item.name }}
                          </h5>
                        </div>
                        <span
                          style="
                                display: flex;
                               
                                margin:5px
                                justify-content: space-between;
                              "
                        >
                          <i
                            class="fa fa-trash"
                            style="
                              color: #000 !important;
                              float: left;
                              margin-right: 5px;
                              align-items: center;
                              display: flex;
                              font-size: 1rem;
                            "
                            @click="deletePlan(item.id)"
                          ></i>
                        </span>
                      </div>

                      <details style="font-size: 1rem">
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan ID</h6>
                          <span style="font-size: 0.7rem">{{ item.planid }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">ID</h6>
                          <span style="font-size: 0.7rem">{{ item.id }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan Network</h6>
                          <span style="font-size: 0.7rem">{{ item.network }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan Price</h6>
                          <span style="font-size: 0.7rem">&#8358;{{ item.price }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan name</h6>
                          <span style="font-size: 0.7rem">{{ item.name }}</span>
                        </div>
                      </details>
                    </div>
                  </div>
                </form>
              </main>
            </Tab>
            <Tab :isSelected="selected === 'SME'">
              <h2 class="hc-x">SME PLANS</h2>
              <Message :status="status" :message="message" />
              <main>
                <form @submit.prevent="handleSubmit">
                  <div class="ml-xf tcg-lf">
                    <div
                      style="width: 100%; border-bottom: 1px solid grey"
                      v-for="item in plansme"
                      :key="item.id"
                    >
                      <div class="details-plan">
                        <div>
                          <h5
                            style="
                              display: flex;
                              align-items: center;
                              font-size: 0.8rem;
                              margin-top: 5px;
                            "
                          >
                            {{ item.name }}
                          </h5>
                        </div>
                        <span
                          style="
                              display: flex;
                             
                              margin:5px
                              justify-content: space-between;
                            "
                        >
                        </span>
                      </div>

                      <details style="font-size: 1rem">
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan ID</h6>
                          <span style="font-size: 0.7rem">{{ item.planid }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">ID</h6>
                          <span style="font-size: 0.7rem">{{ item.id }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan Network</h6>
                          <span style="font-size: 0.7rem">{{ item.network }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan Price</h6>
                          <span style="font-size: 0.7rem">&#8358;{{ item.price }}</span>
                        </div>
                        <div
                          class=""
                          style="display: flex; justify-content: space-between"
                        >
                          <h6 style="font-size: 0.8rem">Plan name</h6>
                          <span style="font-size: 0.7rem">{{ item.name }}</span>
                        </div>
                      </details>
                    </div>
                  </div>
                </form>
              </main>
            </Tab>
            <Tab :isSelected="selected === 'ADD PLAN'">
              <h2 class="hc-x">DATA MANAGEMENT</h2>
              <Message :status="status" :message="message" />
              <main>
                <form @submit.prevent="handleSubmit">
                  <div class="ml-xf tcg-lf">
                    <label for="email">Plan ID</label> <br />
                    <input
                      type="text"
                      class="inp-value"
                      placeholder="Enter plan Id"
                      v-model="planid"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email">
                      Enter Plan Network
                      <small style="color: red">(3:9Mobile)</small></label
                    >
                    <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="Enter plan network"
                      v-model="network"
                      pattern="0-9"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email">Plan price</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="Enter Plan price"
                      v-model="price"
                      pattern="0-9"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email">Plan Name</label> <br />
                    <input
                      type="text"
                      class="inp-value"
                      placeholder="Enter plan name"
                      v-model="name"
                      step="any"
                    />
                  </div>

                  <div class="ml-xf">
                    <button :disabled="isDisabled" style="margin-top: 10px !important">
                      {{ btnText }}
                    </button>
                  </div>
                </form>
              </main>
            </Tab>
            <Tab :isSelected="selected === 'UPDATE'">
              <h2 class="hc-x">UPDATE PLAN</h2>
              <main>
                <Message :status="status" :message="message" />

                <form @submit.prevent="handlePassword">
                  <div class="ml-xf">
                    <label for="number">Plan</label>
                    <select class="inp-value" v-model="plan">
                      <option
                        :value="{
                          id: item.id,
                          planid: item.planid,
                          price: item.price,
                          network: item.network,
                          name: item.name,
                        }"
                        v-for="item in plans"
                        :key="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                  <div class="ml-xf">
                    <label for="number">Plan ID</label>
                    <input
                      type="text"
                      placeholder="Enter New Plan ID"
                      v-model="plan.planid"
                      required
                      autocomplete=""
                      class="inp-value"
                    />
                  </div>
                  <div class="ml-xf">
                    <label for="number"
                      >Network <small style="color: red">(3:9mobile)</small></label
                    >
                    <input
                      type="number"
                      placeholder="Enter New Network"
                      v-model="plan.network"
                      required
                      autocomplete=""
                      class="inp-value"
                    />
                  </div>
                  <div class="ml-xf">
                    <label for="number">Plan Name</label>
                    <input
                      type="text"
                      placeholder="Enter New name"
                      v-model="plan.name"
                      required
                      class="inp-value"
                      autocomplete=""
                    />
                  </div>
                  <div class="ml-xf">
                    <label for="number">Price</label>
                    <input
                      type="number"
                      placeholder="Enter New Price"
                      v-model="plan.price"
                      required
                      autocomplete=""
                      class="inp-value"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf">
                    <button :disabled="isDisabled" style="margin-top: 10px !important">
                      {{ btnPass }}
                    </button>
                  </div>
                </form>
              </main>
            </Tab>
          </TabNav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../../components/header.vue";
import Message from "../../components/message.vue";
import TabNav from "../../components/tabnav.vue";
import Tab from "../../components/tab.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import axios from "axios";
export default {
  name: "MOBILE-setting",
  components: { Header2, Message, TabNav, Tab, Loading },
  data() {
    return {
      selected: "MOBILE-PLANS",
      message: "",
      status: null,
      username: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      btnText: "Save",
      btnPass: "Update",
      dpassword: "",
      npassword: "",
      cnpassword: "",
      token: "",
      isDisabled: false,
      isLoading: true,
      fullPage: true,
      color: "#0A1AA8",
      ndata: "",
      mdata: "",
      nairtime: "",
      mairtime: "",
      nelect: "",
      melect: "",
      ncable: "",
      mcable: "",
      mtnapi: "",
      cdata: "",
      cbill: "",
      airtel: "",
      glo: "",
      mobile: "",
      mtn: "",
      caitime: "",
      plans: [],
      plan: "",
      price: "",
      imageUrl3: "",
      imageUrl2: "",
      imageUrl1: "",
      image1: null,
      image2: null,
      image3: null,
      btnUpload: "Save",
      server: "",
      ncaitime: "",
      ncdata: "",
      ncbill: "",
      planid: "",
      name: "",
      id: "",
      network: "",
    };
  },

  async mounted() {
    const data = JSON.parse(localStorage.getItem("admin"));
    this.token = data.token;

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    };
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/getplanfromtapit?network=3`,
        {
          headers: headers,
        }
      );
      this.plans = response.data.data;
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/smeplans?type=data`,
        {
          headers: headers,
        }
      );
      this.plansme = response.data.data.data[3];
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    this.isLoading = false;
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    },
    async deletePlan(id) {
      const data = {
        id: id,
      };
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/deleteplan`,
          data,
          {
            headers: headers,
          }
        );
        if (response.data.success == "true") {
          this.status = true;
          this.message = "Deleted Successfully";

          this.interval = setTimeout(() => {
            this.status = null;
            this.$router.go();
          }, 3000);
        } else {
          this.status = false;
          this.message = "Failed to delete";
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            // this.status = null;
          }, 3000);
        }
      } catch (e) {
        if (e.response.status == 400 || e.response.status == 422) {
          this.isDisabled = false;
          this.status = false;
          this.message = e.response.data.message;
          this.btnText = "Save";
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
            this.$router.go();
          }, 3000);
        } else {
          this.status = false;
          this.message = "Connection problem, try checking your network";
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
            this.btnText = "Save";
            this.$router.go();
          }, 3000);
        }
      }
    },

    async handleSubmit() {
      this.btnText = "loading";
      this.isDisabled = true;
      const data = {
        network: this.network,
        planid: this.planid,
        name: this.name,
        price: this.price,
      };
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/addplan`,
          data,
          {
            headers: headers,
          }
        );
        if (response.data.success == "true") {
          this.status = true;
          this.message = "Plan Added successfully";
          this.interval = setTimeout(() => {
            this.isDisabled = false;
            this.status = null;
            this.btnText = "Save";
            this.$router.go();
          }, 3000);
        } else {
          this.status = false;
          this.message = "Plan Added Failed";
          this.interval = setTimeout(() => {
            this.isDisabled = false;
            this.btnText = "Save";
            this.$router.go();
            this.status = null;
          }, 3000);
        }
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async handlePassword() {
      this.btnPass = "loading";
      this.isDisabled = true;
      const data = {
        network: this.plan.network,
        planid: this.plan.planid,
        name: this.plan.name,
        price: this.plan.price,
        id: this.plan.id,
      };

      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/updateplan`,
          data,
          {
            headers: headers,
          }
        );
        console.log(response);
        if (response.data.success == "true") {
          this.status = true;
          this.message = "Plan Updated successfully";
          this.interval = setTimeout(() => {
            this.isDisabled = false;
            this.status = null;
            this.btnPass = "update";
            this.$router.go();
          }, 3000);
        } else {
          this.status = false;
          this.message = "Plan Updated Failed";
          this.interval = setTimeout(() => {
            this.isDisabled = false;
            this.btnPass = "Update";
            this.$router.go();
            this.status = null;
          }, 3000);
        }
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
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
  max-width: 700px;
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
  font-size: 1rem;
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
select {
  outline: none;
  box-sizing: border-box;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 10px;
}
button {
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  background: #0a1aa8;
  border: 1px solid #0a1aa8;
  border-radius: 10px;
  width: 100%;
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
  padding: 10px;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.xdir,
.vdir {
  font-size: 0.9rem;
}

.tab-banner {
  padding: 10px;
}
.tab-banner ul {
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
}
.css {
  border-bottom: 2px solid #0a1aa8;
}

strong {
  font-size: 0.8rem;
}
.inp-value {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #ccc;
}
.barnner {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;

  height: 130px;
}
.cover-upload {
  background: rgb(247, 245, 245);
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  display: flex;
}
.fa-plus {
  font-size: 3rem;
  align-self: center;
  color: #ccc;
}
img {
  width: 100%;
  height: 100%;
}
.details-plan {
  display: flex;
  justify-content: space-between;

  overflow: hidden;
  max-height: 50px;
  min-height: 30px;
}
</style>
