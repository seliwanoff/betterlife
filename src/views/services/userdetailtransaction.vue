<template>
  <div>
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :color="color"
    />
    <Header2 @setHidden="getHidden" />
    <div class="rg-c">
      <div class="gc-x">
        <main>
          <Message :status="messagestatus" :message="message" />
          <div class="ml-xf">
            <span style="font-size: 0.9rem">Transaction</span>
            <div
              style="
                color: #fff !important;
                background: green !important;
                padding: 5px;
                font-size: 0.8rem;
                border-radius: 4px;
              "
              v-if="status == 1 && type != 11"
            >
              Success
            </div>
            <div
              style="
                color: #fff !important;
                background: green !important;
                padding: 5px;
                font-size: 0.8rem;
                border-radius: 4px;
              "
              v-if="status == 2 && type == 11"
            >
              Success
            </div>
            <div
              style="
                color: #fff !important;
                background: crimson !important;
                padding: 5px;
                font-size: 0.8rem;
                border-radius: 4px;
              "
              v-if="status == 0"
            >
              Failed
            </div>
            <div
              style="
                color: #fff !important;
                background: blue !important;
                padding: 5px;
                font-size: 0.8rem;
                border-radius: 4px;
              "
              v-if="status == 1 && type == 11"
            >
              Under Review
            </div>
          </div>
          <hr />
          <div class="ml-xf">
            <span class="mtyl-hdck">Reference</span> <span class="tiepl">{{ ref }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Amount</span>
            <span class="tiepl">&#8358;{{ Intl.NumberFormat().format(amount) }}</span>
          </div>
          <div class="ml-xf" v-if="type == 11">
            <span class="mtyl-hdck">Amount to collect</span>
            <span class="tiepl">&#8358;{{ Intl.NumberFormat().format(fr) }}</span>
          </div>
          <div class="ml-xf" v-if="type == 4">
            <span class="mtyl-hdck">Sender</span>
            <span class="tiepl">{{ name }}</span>
          </div>
          <div class="ml-xf" v-if="type == 4">
            <span class="mtyl-hdck">Receiver</span>
            <span class="tiepl">{{ plan }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Balance Before</span>
            <span class="tiepl">&#8358;{{ Intl.NumberFormat().format(before) }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Balance After</span>
            <span class="tiepl">&#8358;{{ Intl.NumberFormat().format(after) }}</span>
          </div>
          <div class="ml-xf" v-if="type == 4">
            <span class="mtyl-hdck">Recipient Balance Before</span>
            <span class="tiepl">&#8358;{{ Intl.NumberFormat().format(rbefore) }}</span>
          </div>
          <div class="ml-xf" v-if="type == 4">
            <span class="mtyl-hdck">Recipient Balance After</span>
            <span class="tiepl">&#8358;{{ Intl.NumberFormat().format(rafter) }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Service</span>
            <span class="tiepl" v-if="type == 1">Airtime</span>
            <span class="tiepl" v-else-if="type == 2">Data Subscription</span>
            <span class="tiepl" v-else-if="type == 10">Account Upgrade</span>
            <span class="tiepl" v-else-if="type == 5">Bill Payment</span>
            <span class="tiepl" v-else-if="type == 3">Cable Payment</span>
            <span class="tiepl" v-else-if="type == 6">Wallet Funding</span>
            <span class="tiepl" v-else-if="type == 4">Transfer </span>
            <span class="tiepl" v-else-if="type == 11">Airtime To cash </span>
          </div>
          <div class="ml-xf" v-if="plan != '' && paln != null">
            <span class="mtyl-hdck">Plan</span> <span class="tiepl">{{ plan }}</span>
          </div>
          <div class="ml-xf" v-if="type == 1 || plan == 2">
            <span class="mtyl-hdck">Network</span>
            <span class="tiepl" v-if="type == 1 && network == 1">MTN</span>
            <span class="tiepl" v-else-if="type == 1 && network == 2">Airtel</span>
            <span class="tiepl" v-else-if="type == 1 && network == 3">9Mobile</span>
            <span class="tiepl" v-else-if="type == 1 && network == 4">GLO</span>
            <span class="tiepl" v-else>{{ network }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">User</span> <span class="tiepl">{{ fullname }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Username</span>
            <span class="tiepl">{{ username }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Email</span> <span class="tiepl">{{ email }}</span>
          </div>
          <div class="ml-xf">
            <span class="mtyl-hdck">Date/Time</span>
            <span class="tiepl">{{ moment(date).format("DD-MM-YYYY hh:mm:ss") }}</span>
          </div>
          <div class="ml-xf" v-if="type == 11 && status == 1">
            <button
              :disabled="isdisabled"
              style="background: green; border: 1px solid green; margin: 5px"
              @click="acceptairtime(2, trabsactionid)"
            >
              {{ btnaccept }}
            </button>
            <button
              :disabled="isdisabled"
              style="background: crimson; border: 1px solid crimson; margin: 5px"
              @click="rejectairtime(2, trabsactionid)"
            >
              {{ btnreject }}
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Header2 from "../../components/header.vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import moment from "moment";
import Message from "@/components/message.vue";

export default {
  name: "UserTrans -app",
  components: { Header2, Loading, Message },
  data() {
    return {
      id: this.$route.params.id,
      ref: this.$route.params.ref,
      status: null,
      messagestatus: null,
      before: 0,
      after: 0,
      email: "",
      fullname: "",
      type: "",
      commission: 0,
      network: "",
      receiver: "",
      plan: null,
      name: null,
      user: "",
      amount: 0,
      fr: 0,
      btnaccept: "Accept",
      btnreject: "Reject",
      phone: "",
      getTransaction: "",
      token: "",
      isLoading: true,
      fullPage: true,
      color: "#0A1AA8",
      date: "",
      moment: moment,
      rafter: 0,
      rbefore: 0,
      isdisabled: false,
    };
  },
  methods: {
    async acceptairtime(val, id) {
      this.btnaccept = "Loading";
      this.isdisabled = true;
      const data = JSON.parse(localStorage.getItem("admin"));
      try {
        this.token = data.token;
        const datapost = {
          id: id,
          val: val,
        };

        await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/updatairtimetocash`,
          datapost,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.messagestatus = true;
        this.message = "Settled";
        this.isdisabled = false;
        this.interval = setTimeout(() => {
          this.messagestatus = null;
        }, 3000);
      } catch (e) {
        this.message = "Already settled";
        this.messagestatus = true;
        this.isdisabled = false;
        this.interval = setTimeout(() => {
          this.messagestatus = null;
        }, 3000);
      }
    },
    async rejectairtime(val, id) {
      this.btnreject = "Loading";
      const data = JSON.parse(localStorage.getItem("admin"));
      try {
        this.token = data.token;
        const datapost = {
          id: id,
          val: val,
        };

        await axios.post(
          `${process.env.VUE_APP_BASE_URL}api/updatairtimetocash`,
          datapost,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.messagestatus = true;
        this.message = "Rejected Successfully";
        this.isdisabled = false;
        this.interval = setTimeout(() => {
          this.messagestatus = null;
        }, 3000);
      } catch (e) {
        this.message = "Already settled";
        this.messagestatus = true;
        this.isdisabled = false;
        this.interval = setTimeout(() => {
          this.messagestatus = null;
        }, 3000);
      }
    },
  },
  async mounted() {
    const data = JSON.parse(localStorage.getItem("admin"));
    try {
      this.token = data.token;
      const getTransaction = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/findtransactionbyref?ref=${this.ref}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );
      console.log(getTransaction);
      const getUserbyID = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/getuserbyid?id=${this.id}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );
      this.status = getTransaction.data.data.status;
      this.trabsactionid = getTransaction.data.data.id;
      this.amount = getTransaction.data.data.amount;
      this.before = getTransaction.data.data.bbefore;
      this.after = getTransaction.data.data.bafter;
      this.commission = getTransaction.data.data.commission;
      this.type = getTransaction.data.data.type;
      this.fr = getTransaction.data.data.fr;
      this.network = getTransaction.data.data.network;
      this.receiver = getTransaction.data.data.reciever;
      this.plan = getTransaction.data.data.plan;
      this.name = getTransaction.data.data.name;
      this.date = getTransaction.data.data.updated_at;
      this.fullname = getUserbyID.data.data.fname + " " + getUserbyID.data.data.lname;
      this.username = getUserbyID.data.data.username;
      this.email = getUserbyID.data.data.email;
      this.phone = getUserbyID.data.data.phone;
      this.isLoading = false;
    } catch (e) {
      console.log(e);
    }
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
  max-width: 450px;
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
  justify-content: space-between;
  display: flex;
  padding: 5px;
  min-height: 30px;
}
.xdir,
.vdir {
  font-size: 0.9rem;
}
.forget {
  font-size: 0.9rem;
  width: 100%;
  text-align: right !important;
  color: #0a1aa8 !important;

  font-weight: 800;
  float: right;
  margin: 10px;
}
.mtyl-hdck {
  font-size: 0.9rem !important;
  font-weight: 600;
}
.tiepl {
  font-size: 0.8rem;
}
</style>
