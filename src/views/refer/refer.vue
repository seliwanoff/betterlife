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
      <div :class="wideBody ? 'wideBody' : 'gc-x'">
        <h2 class="hc-x">Referral</h2>
        <main>
          <!-- <div class="info-ipx-col">
                <label for="search">
                  Search: <input type="search" placeholder="Search Transaction" />
                </label>
              </div>
              -->
          <div class="icl-tbl">
            <table class="table-body" v-if="allUsers != 0">
              <thead>
                <tr role="row">
                  <th>Users</th>
                  <th>All Referrals</th>
                  <th>Earned Referral</th>
                  <th>Not Earned</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in allUsers" :key="item.id">
                  <td>{{ item.username }}</td>
                  <td>{{ item.Allreferers }}</td>
                  <td>{{ item.AllEarns }}</td>
                  <td>{{ item.Allnotearn }}</td>
                  <td>
                    <button class="btn-details" @click="getReferral(item.username)">
                      Get Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else style="width: 100%; text-align: center; font-weight: bold">
              No Referral found
            </div>
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

export default {
  name: "transfer -app",
  components: { Header2, Loading },
  data() {
    return {
      id: "",
      password: "",
      status: null,
      message: "",
      btnText: "Continue",
      isDisabled: false,
      showsce: false,
      amount: "",
      network: "",
      phone: "",
      occurence: "",
      time: "",
      start: "",
      end: "",
      token: "",
      isLoading: true,
      fullPage: true,
      color: "#0A1AA8",
      wideBody: false,
      pageNumber: 1,
      per_page: "",
      total: "",
      page: "",
      totalpage: 0,
      moment: moment,
      allUsers: "",
    };
  },
  methods: {
    getReferral(username) {
      this.$router.push("/refer/refer_details/" + username);
    },

    getHidden() {
      this.wideBody = !this.wideBody;
    },
    showSchedule() {
      this.showsce = !this.showsce;
    },
    async pageNumberget(newPagenumber) {
      this.pageNumber = newPagenumber + 1;
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: newPagenumber + 1,
        },
      });

      console.log(this.pageNumber);
      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getreferferess`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.allUsers = getUsers.data.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    async prev() {
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: this.pageNumber - 1,
        },
      });
      this.pageNumber = this.pageNumber - 1;

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getreferferess`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.allUsers = getUsers.data.data.data.reverse();
      } catch (e) {
        console.log(e);
      }
    },
    async next() {
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: this.pageNumber + 1,
        },
      });
      this.pageNumber = this.pageNumber + 1;

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getreferferess`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.allUsers = getUsers.data.data.data.reverse();
      } catch (e) {
        console.log(e);
      }
    },
  },
  async mounted() {
    const data = JSON.parse(localStorage.getItem("admin"));

    this.token = data.token;
    //if(data.data.type!=3){
    //this.$router.push('/admin/login')
    //}
    try {
      const getUsers = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/getreferferess`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );
      this.allUsers = getUsers.data.reverse();
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
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

  min-width: calc(100% - 300px);
  margin: 100px auto;
  background: #fff;
  box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
  padding: 10px;
  border-radius: 15px;
  float: right;
}
.wideBody {
  margin: 50px;

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
    margin-top: 90px;
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

@media screen and (max-width: 490px) {
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
.scd-cl {
  display: flex;
  justify-content: space-between;
}
.h4cl {
  font-weight: 800;
  font-size: 1rem;
  color: #000 !important;
  padding: 10px;
}
.h4cl h4 {
  color: #000 !important;
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.info-ipx-col {
  padding: 10px;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
}
label {
  display: inline-block;
  align-content: center;
  font-size: 1rem;
}
label input {
  padding: 10px;
  outline: none;
  border: 1px solid #ccc;
}
.icl-tbl {
  padding: 10px;
  margin: 10px;

  overflow: auto;
}
.table-body {
  padding: 10px;
  border: 1px solid #ccc;
  border-spacing: 0px;
  font-weight: 500;
  width: 100%;
}
.table-body thead tr th {
  color: #000;
  font-size: 1rem;
  font-weight: 800;
  border-width: 1px;
  border: 1px solid rgb(236, 230, 230);
  padding: 0.35rem 0.9rem;
  word-spacing: 1px;
  border-spacing: 0px;
}
tbody tr td {
  font-size: 0.8rem;
  font-weight: 500;
  border-width: 1px;
  text-align: center;
  padding: 0.35rem 0.9rem;
  border: 1px solid rgb(236, 230, 230);
}
@media screen and (max-width: 499px) {
  .table-body thead tr th {
    font-size: 0.8rem;
    min-width: 120px;
  }
  tbody tr td {
    font-size: 0.8rem;
  }
}
.active {
  background: #0a1aa8;
  color: #fff;
  border: 1px solid #0a1aa8;
}
.disabled {
  display: none;
}
.btn-details {
  padding: 5px;
  background: #0a1aa8;
  border: 1px solid #0a1aa8;
  color: #fff;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
}
.pg-btn {
  padding: 2px;
  border-radius: 3px;
  font-size: 0.6em;
  margin: 2px;
  cursor: pointer;
}
.btn-details {
  padding: 5px;
  background: #0a1aa8;
  border: 1px solid #0a1aa8;
  color: #fff;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>
