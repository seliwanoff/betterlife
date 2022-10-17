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
            :tabs="['Upload', 'Data-Management', 'Manage']"
            :selected="selected"
            @selected="setSelected"
          >
            <Tab :isSelected="selected === 'Upload'">
              <main>
                <h2 class="hc-x">Upload Banners</h2>
                <Message :status="status" :message="message" />
                <form @submit.prevent="handleImage" enctype="multipart/form-data">
                  <div class="ml-xf tcg-lf">
                    <label for="email">Select Ads One (svg only)(315 by 103px)</label>
                    <div class="barnner">
                      <img :src="imageUrl1" alt="" style="" v-if="imageUrl1 != ''" />
                      <div class="cover-upload" v-if="imageUrl1 == ''">
                        <input
                          type="file"
                          style="display: none; width: 315px; height: 103px"
                          ref="fileInput1"
                          @change="onSelectedFile1"
                          accept="image/svg+xml"
                        />
                        <span class="fa fa-plus" @click="$refs.fileInput1.click()"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email">Select Ads Two (svg only)(315 by 103px)</label>
                    <div class="barnner">
                      <img :src="imageUrl2" alt="" style="" v-if="imageUrl2 != ''" />
                      <div class="cover-upload" v-if="imageUrl2 == ''">
                        <input
                          type="file"
                          style="display: none; width: 315px; height: 103px"
                          ref="fileInput2"
                          @change="onSelectedFile2"
                          accept="image/svg+xml"
                        />
                        <span class="fa fa-plus" @click="$refs.fileInput2.click()"></span>
                      </div>
                    </div>
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email">Select Ads Three (svg only)(315 by 103px)</label>
                    <div class="barnner">
                      <img :src="imageUrl3" alt="" style="" v-if="imageUrl3 != ''" />
                      <div class="cover-upload" v-if="imageUrl3 == ''">
                        <input
                          type="file"
                          style="display: none; width: 315px; height: 103px"
                          ref="fileInput3"
                          @change="onSelectedFile3"
                          accept="image/svg+xml"
                        />
                        <span class="fa fa-plus" @click="$refs.fileInput3.click()"></span>
                      </div>
                    </div>
                  </div>

                  <div class="ml-xf">
                    <button
                      style="cursor: pointer; margin-top: 30px; box-sizing: border-box"
                    >
                      {{ btnUpload }}
                    </button>
                  </div>
                </form>
              </main>
            </Tab>
            <Tab :isSelected="selected === 'Data-Management'">
              <h2 class="hc-x">DATA MANAGEMENT</h2>
              <Message :status="status" :message="message" />
              <main>
                <form @submit.prevent="handleSubmit">
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Normal Data User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="0.00"
                      v-model="ndata"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Merchant Data User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="0.00"
                      v-model="mdata"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Normal Airtime User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="0.03"
                      v-model="nairtime"
                      pattern="0-9"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Merchant Airtime User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="0.03"
                      v-model="mairtime"
                      pattern="0-9"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Normal Electric User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="50"
                      v-model="nelect"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Merchant Electric User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="10"
                      v-model="melect"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Normal Cable Users</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="50"
                      v-model="ncable"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Merchant cable User</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="10"
                      v-model="mcable"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Bill Commission</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="Change Bill commission"
                      v-model="cbill"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> Data commission</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="Change Data commission"
                      v-model="cdata"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email">Airtime commission</label> <br />
                    <input
                      type="number"
                      class="inp-value"
                      placeholder="Change Airtime commission"
                      v-model="caitime"
                      step="any"
                    />
                  </div>
                  <div class="ml-xf tcg-lf">
                    <label for="email"> MTN Data API</label> <br />
                    <select name="" id="" v-model="mtnapi">
                      <option :value="2">SME PLUG</option>
                      <option :value="1">CARDRI</option>
                    </select>
                  </div>

                  <div class="ml-xf">
                    <button :disabled="isDisabled" style="margin-top: 10px !important">
                      {{ btnText }}
                    </button>
                  </div>
                </form>
              </main>
            </Tab>
            <Tab :isSelected="selected === 'Manage'">
              <h2 class="hc-x">Set Plan Price</h2>
              <main>
                <Message :status="status" :message="message" />

                <form @submit.prevent="handlePassword">
                  <div class="ml-xf">
                    <label for="number">Plan</label>
                    <select class="inp-value" v-model="plan">
                      <option :value="item.id" v-for="item in plans" :key="item.id">
                        {{ item.name }} {{ item.plan }} {{ item.price }}
                      </option>
                    </select>
                  </div>
                  <div class="ml-xf">
                    <label for="number">Price</label>
                    <input
                      type="number"
                      placeholder="Enter New Price"
                      v-model="price"
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
  name: "Settings-app",
  components: { Header2, Message, TabNav, Tab, Loading },
  data() {
    return {
      selected: "Upload",
      message: "",
      status: null,
      username: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      btnText: "Save",
      btnPass: "Save",
      dpassword: "",
      npassword: "",
      cnpassword: "",
      token: "",
      isDisabled: false,
      isLoading: false,
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
      airtime: "",
      cashglo: "",
      cashmtn: "",
      airtimetocash: 0,
    };
  },

  async mounted() {
    const data = JSON.parse(localStorage.getItem("admin"));
    this.token = data.token;
    this.isLoading = false;

    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/getmanagement`
      );
      console.log(response);
      this.ndata = response.data.data.ndata;
      this.mdata = response.data.data.mdata;
      this.nairtime = response.data.data.nairtime;
      this.mairtime = response.data.data.mairtime;
      this.nelect = response.data.data.nelect;
      this.melect = response.data.data.melect;
      this.ncable = response.data.data.ncable;
      this.mcable = response.data.data.mcable;
      this.mtnapi = response.data.data.mtnapi;
      this.cdata = response.data.data.cdata;
      this.caitime = response.data.data.caitime;
      this.mtn = response.data.data.mtn;
      this.airtel = response.data.data.airtel;
      this.mobile = response.data.data.mobile;
      this.glo = response.data.data.glo;
      this.server = response.data.data.serverstatus;
      this.cashmtn = response.data.data.cashmtn;
      this.cashglo = response.data.data.cashglo;
      this.airtime = response.data.data.airtime;
      this.airtimetocash = response.data.data.airimetocashstatus;

      this.cbill = response.data.data.cbill;
    } catch (e) {
      console.log(e);
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.token,
    };
    try {
      const response = await axios.get(`${process.env.VUE_APP_BASE_URL}api/getmtnplans`, {
        headers: headers,
      });
      this.plans = response.data.data;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    onSelectedFile1(event) {
      const files = event.target.files;
      let filename = files[0].name;

      if (filename.lastIndexOf(".") <= 0) {
        alert("no");
      }
      const fileReader = new FileReader();

      fileReader.addEventListener("load", () => {
        this.imageUrl1 = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image1 = files[0];
    },
    onSelectedFile2(event) {
      const files = event.target.files;
      let filename = files[0].name;

      if (filename.lastIndexOf(".") <= 0) {
        alert("no");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl2 = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image2 = files[0];
    },
    onSelectedFile3(event) {
      const files = event.target.files;
      let filename = files[0].name;

      if (filename.lastIndexOf(".") <= 0) {
        alert("no");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl3 = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image3 = files[0];
    },
    setSelected(tab) {
      this.selected = tab;
    },
    async handleSubmit() {
      this.btnText = "Loading";
      this.isDisabled = true;
      const data = {
        ndata: this.ndata,
        mdata: this.mdata,
        nairtime: this.nairtime,
        mairtime: this.mairtime,
        ncable: this.ncable,
        mcable: this.mcable,
        nelect: this.nelect,
        melect: this.melect,
        mtnapi: this.mtnapi,
        cdata: this.cdata,
        caitime: this.caitime,
        cbill: this.cbill,
        mtn: this.mtn,
        airtel: this.airtel,
        glo: this.glo,
        mobile: this.mobile,
        serverstatus: this.server,
        cashmtn: this.cashmtn,
        cashglo: this.cashglo,
        airtime: this.airtime,
        airimetocashstatus: this.airtimetocash,
      };
      console.log(data);
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/setapp`,
          data,
          {
            headers: headers,
          }
        );
        if (response.data.status == "success") {
          this.status = true;
          this.message = "Successful";
          this.isDisabled = false;

          this.interval = setTimeout(() => {
            this.status = null;
            this.$router.go();
          }, 3000);
        } else {
          this.status = false;
          this.message = response.data.message;
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
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
          }, 3000);
        } else {
          this.status = false;
          this.message = "Connection problem, try checking your network";
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
            this.btnText = "Save";
          }, 3000);
        }
      }
    },

    async handlePassword() {
      this.btnPass = "Loading";
      this.isDisabled = true;
      const data = {
        id: this.plan,
        price: this.price,
      };
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        };
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/setmtnprice`,
          data,
          {
            headers: headers,
          }
        );
        if (response.data.status == "success") {
          this.status = true;
          this.message = "Successful";
          this.isDisabled = false;

          this.interval = setTimeout(() => {
            this.status = null;
            this.$router.go();
          }, 3000);
        } else {
          this.status = false;
          this.message = response.data.message;
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
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
          }, 3000);
        } else {
          this.status = false;
          this.message = "Connection problem, try checking your network";
          this.isDisabled = false;
          this.interval = setTimeout(() => {
            this.status = null;
            this.btnText = "Save";
          }, 3000);
        }
      }
    },
    async handleImage() {
      this.btnUpload = "Loading";
      const formdata = new FormData();
      if (this.image1 && this.image2 == null && this.image3 == null) {
        formdata.append("image1", this.image1, this.image1.name);
      } else if (this.image2 && this.image3 == null && this.image1 == null) {
        formdata.append("image2", this.image2, this.image2.name);
      } else if (this.image3 && this.image1 == null && this.image2 == null) {
        formdata.append("image3", this.image3, this.image3.name);
      } else if (this.image1 && this.image2 && this.image3) {
        formdata.append("image1", this.image1, this.image1.name);
        formdata.append("image2", this.image2, this.image2.name);
        formdata.append("image3", this.image3, this.image3.name);
      }
      console.log(formdata);
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/uploadbanner`,
          formdata,
          {
            headers: headers,
          }
        );
        console.log(response);
        if (response.data.status == "true") {
          this.status = true;
          this.message = "Uploaded Succesful";
          this.$router.go();
        } else if (response.data == "") {
          this.status = false;
          this.message = "Images not uploaded";
          this.btnUpload = "Save";
        }
      } catch (e) {
        if (e.response.status >= 400) {
          this.isDisabled = false;
          this.status = false;
          this.message = e.response.data.message;
          this.btnText = "Update";
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
</style>
