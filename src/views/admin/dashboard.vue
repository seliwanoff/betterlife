<template>
  <div>
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :color="color"
    />
    <div class="modal" v-show="hidedetails" @click.self="hideModal">
      <div class="scnd-modal">
        <div class="hd-cncel">
          <h2>User Details</h2>
          <span class="fa fa-times" @click="hideModal"></span>
        </div>
        <div class="main-content">
          <div class="ech-detail">
            <div class="user-title">First Name</div>
            <span>{{ fname }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Last Name</div>
            <span>{{ lname }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Username</div>
            <span>{{ username }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Email</div>
            <span>{{ email }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Phone</div>
            <span>{{ phone }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Balance</div>
            <span>&#8358;{{ Intl.NumberFormat().format(balance) }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Account Number</div>
            <span>{{ bank }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Account Name</div>
            <span>{{ bankname }}</span>
          </div>
          <div class="ech-detail">
            <div class="user-title">Type</div>
            <span v-if="type == 1">Normal</span>
            <span v-else>Merchant</span>
          </div>

          <div class="ech-detail">
            <div class="user-title">Status</div>
            <span v-if="status == 1 && p_status == 'true'">verified</span>
            <span v-else-if="status == 0 && p_status == 'true'">Suspended</span>
            <span v-else>Unverified</span>
          </div>

          <div class="ech-detail">
            <button class="block" v-if="status == 1" @click="restoreUser(2, id)">
              {{ blockText }} <span class="fa fa-times"></span>
            </button>
            <button class="upgrade" v-if="status == 2" @click="restoreUser(1, id)">
              {{ restoreTet }}
            </button>
          </div>
          <div class="ech-detail" style="margin-top: 10px">
            <button class="delete" @click="deleteUsers(0, id)">
              {{ deleteText }} <span class="fa fa-times"></span>
            </button>
          </div>
        </div>
        <div class="ech-detail" style="margin-top: 10px">
          <button class="btn-direct" @click="getEachUserTransaction(id)">
            Get Transaction
          </button>
        </div>
      </div>
    </div>
    <header>
      <nav>
        <div class="left-side-con">
          <div class="hidden-icon onhover-show">
            <span class="fa fa-bars hiddenicon" @click="closeDrop"></span>
          </div>

          <div class="image-home">
            <router-link to="/">
              <img src="../../assets/image/logo.png" alt="" />
            </router-link>
          </div>

          <div
            class="hidden-icon onhover-show"
            style="justify-content: space-between; float: left"
          >
            <div class="pic-nl" v-if="image != null" style="margin-top: -7px !important">
              <img :src="url + image" alt="" class="img" />
            </div>
            <div class="pic-nl" v-else>
              {{ fn }}
            </div>
          </div>
        </div>
        <div class="right-side-con">
          <div class="main-head-nav">
            <div class="left-main-icon">
              <i class="fa fa-bars" @click="closeDrop"></i>
            </div>
            <div class="right-main-icon">
              <div class="pic-nl" v-if="image != null">
                <img :src="url + image" alt="" class="img" />
              </div>
              <div class="pic-nl" v-else>
                {{ fn }}
              </div>
              <span class="grtuser">Hello {{ us }}</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <transition name="slide" class="col-tran">
      <aside v-show="hidemethis">
        <div class="side-main-bar">
          <ul>
            <li
              class="width:100%;border:1px solid black;margin-top:40px"
              style="margin-top: 30px"
            >
              <router-link
                to="/admin/dashboard"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-home icon-menu"></span>
                  </span>

                  Home
                </span>

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black;margin-top:0px">
              <router-link
                to="/admin/transaction"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-bars icon-menu"></span>
                  </span>

                  Transaction
                </span>

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <!--  <li class="width:100%;border:1px solid black">
                <router-link to="/user/transaction" style="width:100%;display:flex;justify-content:space-between"  active-class="bd-l">
                 <span class="menu-item">
                  <span class="chl-ck">
                     <span class="fa fa-right-left icon-menu"></span>
                 </span>
                 
                 
                  Transaction</span>
                
                <span class="fa fa-angle-right icon-menu"></span>
                   
                </router-link>
                </li>
                <li class="width:100%;border:1px solid black">
                <router-link to="/user/refer" style="width:100%;display:flex;justify-content:space-between" active-class="bd-l">
                 <span class="menu-item">
                 <span class="chl-ck">
                      <span class="fa fa-sack-dollar icon-menu"></span> 
                 </span>
                
                 
                 Refer & Earn</span>
                
                <span class="fa fa-angle-right icon-menu"></span>
                   
                </router-link>
                </li>
                -->
            <li class="services">Services</li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/transfer"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-bank icon-menu"></span>
                  </span>

                  Transfer</span
                >

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/fund-deposit"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-bank icon-menu"></span>
                  </span>

                  Fund Deposit</span
                >

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/data"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-wifi icon-menu"></span>
                  </span>
                  Data subscription</span
                >

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/airtime"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-phone icon-menu"></span>
                  </span>

                  Airtime</span
                >

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/airtime2cash"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-phone icon-menu"></span>
                  </span>

                  Airtime 2 cash</span
                >

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/bill"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-lightbulb icon-menu"></span>
                  </span>

                  Bill payment</span
                >

                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/cable"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-tv icon-menu"></span>
                  </span>

                  cable & Tv</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/service/merchantupgrade"
                style="width: 100%; display: flex; justify-content: space-between"
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-arrow-up icon-menu"></span>
                  </span>

                  Merchant Upgrade</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="services">Account</li>
            <li class="width:100%;border:1px solid black" v-if="usertype == 3">
              <router-link
                to="/settings/admin-settings"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  Admin Settings</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black" v-if="usertype == 3">
              <router-link
                to="/settings/network"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  Network Settings</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/settings/password"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  Update Password</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/settings/broadcast"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-bell icon-menu"></span>
                  </span>

                  Broadcast</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/refer/refer"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-users icon-menu"></span>
                  </span>

                  Referral</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="services">Plan settings</li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/plan/mtn"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  MTN</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/plan/Airtel"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  Airtel</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/plan/mobile"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  9Mobile</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/plan/glo"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-bell icon-menu"></span>
                  </span>

                  GLO</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="services">TV settings</li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/tv/dstv"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  DSTV</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/tv/gotv"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  GOTV</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/tv/startimes"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-cog icon-menu"></span>
                  </span>

                  STARTIMES</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li class="width:100%;border:1px solid black">
              <router-link
                to="/tv/showmax"
                style="
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  height: 100%;
                "
                active-class="bd-l"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span class="fa fa-bell icon-menu"></span>
                  </span>

                  SHOWMAX</span
                >
                <span class="fa fa-angle-right icon-menu"></span>
              </router-link>
            </li>
            <li
              class="width:100%;border:1px solid black"
              style="margin-bottom: 60px !important"
            >
              <a
                href="javascript:void(0)"
                @click="logOut"
                style="width: 100%; display: flex; justify-content: space-between"
              >
                <span class="menu-item">
                  <span class="chl-ck">
                    <span
                      class="fa fa-sign-out icon-menu"
                      style="margin-top: 20px !important"
                    ></span>
                  </span>

                  Sign out</span
                >
                <span class="fa fa-angle-right icon-menu lvkl"></span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </transition>

    <div class="rg-c">
      <div :class="hidemethis ? 'gc-x' : 'wideBody'">
        <div class="cards-info">
          <div class="cards">
            <img src="https://img.icons8.com/ios-filled/35/FFFFFF/user.png" />
            <h2>Total User</h2>
            <span>{{ totalpage }}</span>
          </div>
          <div class="cards">
            <img src="https://img.icons8.com/ios-filled/35/FFFFFF/briefcase.png" />
            <h2>Total wallet</h2>
            <span>&#8358;{{ Intl.NumberFormat().format(totalwallet) }}</span>
          </div>
          <div class="cards">
            <img src="https://img.icons8.com/ios-filled/35/FFFFFF/briefcase.png" />
            <h2>{{ nm.slice(0, 4) }} Transacton</h2>
            <span>{{ getTotal }}</span>
          </div>
          <div class="cards">
            <img src="https://img.icons8.com/dotty/35/FFFFFF/get-revenue--v3.png" />
            <h2 style="overflow: hidden">{{ nm.slice(0, 4) }} Income</h2>
            <span style="overflow: hidden"
              >&#8358;{{ Intl.NumberFormat().format(totalAmount) }}</span
            >
          </div>
        </div>
        <h2 class="hc-x">User Information</h2>
        <main>
          <div style="max-width: 300px; width: 100%; margin: 0px auto">
            <canvas id="myChart" width="50" height="50"></canvas>
          </div>
          <div class="info-ipx-col">
            <label for="search">serach:</label>
            <input
              type="search"
              style="ouyline: none"
              @keyup="usernameget"
              v-model="typedusername"
            />
          </div>
          <div class="info-ipx-col">
            <label for="search">
              <button
                @click="downloadexcel('xls')"
                id="download"
                style="margin-right: 10px"
              >
                Export Excel
              </button>
              <button @click="download" id="download">Export PDF</button>
            </label>
          </div>

          <div class="icl-tbl">
            <table
              class="table-body"
              v-if="allUsers != 0"
              id="content"
              ref="exportable_table"
            >
              <thead>
                <tr role="row">
                  <th>Username</th>
                  <th>First Name</th>
                  <th>Last Name</th>

                  <th>Phone Number</th>
                  <th>Balance</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in allUsers" :key="item.id">
                  <td style="max-width: 120px">{{ item.username }}</td>
                  <td>{{ item.fname }}</td>
                  <td>{{ item.lname }}</td>

                  <td>{{ item.phone }}</td>
                  <td>&#8358;{{ Intl.NumberFormat().format(item.balance) }}</td>
                  <td>{{ item.m }}</td>
                  <td v-if="item.type == 1">Normal</td>
                  <td v-if="item.type == 2">Merchant</td>
                  <td>
                    <button
                      @click="getUsersByUsername(item.username)"
                      class="btn-details"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <button @click="prev" class="pg-btn" :disabled="pageNumber <= 1">
                  prev
                </button>
                <span v-for="(item, index) in new Array(page)" :key="index">
                  <button
                    :class="['pg-btn', pageNumber == index + 1 ? 'active' : '']"
                    @click="pageNumberget(index)"
                  >
                    {{ index + 1 }}
                  </button>
                </span>
                <button @click="next" class="pg-btn" :disabled="pageNumber >= page">
                  next
                </button>
              </tfoot>
            </table>
            <div v-else style="width: 100%; text-align: center; font-weight: bold">
              No User found
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
//import Header2 from "../../components/header.vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Chart from "chart.js/auto";
import * as XLSX from "xlsx/xlsx.mjs";

export default {
  name: "Bill -app",
  components: { Loading },
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
      allUsers: [],
      pageNumber: 1,
      per_page: "",
      per_pages: "",
      total: "",
      page: "",
      pages: "",
      totalpage: 0,
      mq: 0,
      getTotal: 0,
      username: "",
      fname: "",
      lname: "",
      email: "",
      balance: 0,
      bank: "",
      bankname: "",
      type: "",
      hidedetails: false,
      deleteText: "Delete User",
      blockText: "Block User",
      restoreTet: "Restore User",
      p_status: "",
      hidemethis: true,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      totalAmount: 0,
      y: "",
      m: "",
      nm: "",
      totalwallet: 0,
      totalpages: 100,
      usertype: "",
      us: "",
      chartData: {
        "2017-05-13": 2,
        "2017-05-14": 5,
      },
      airtime: 0,
      bill: 0,
      data: 0,
      cable: 0,
      typedusername: "",
    };
  },
  methods: {
    async usernameget() {
      try {
        const data = JSON.parse(localStorage.getItem("admin"));
        this.token = data.token;
        const response = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/searchusers?id=${this.typedusername}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.allUsers = response.data.data;
        this.totalpage = response.data.data.total;

      this.per_page = response.data.data.per_page;
      this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
      } catch (e) {
        console.log(e);
      }
    },
    downloadexcel(type, fn, dl) {
      var elt = this.$refs.exportable_table;
      var wb = XLSX.utils.table_to_book(elt, { sheet: "Sheet JS" });
      return dl
        ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
        : XLSX.writeFile(wb, fn || "SheetJSTableExport." + (type || "xlsx"));
    },
    download() {
      window.html2canvas = html2canvas;
      const doc = new jsPDF("p", "pt", "a2");
      doc.html(document.querySelector("#content"), {
        callback: function (pdf) {
          pdf.save("Users.pdf");
        },
      });
    },
    async logOut() {
      try {
        const data = JSON.parse(localStorage.getItem("admin"));

        this.token = data.token;

        await axios.get(`${process.env.VUE_APP_BASE_URL}api/logout`, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        });
        localStorage.removeItem("admin");
        this.$router.push("/");
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/panel/login");
          localStorage.removeItem("admin");
        }
      }
    },
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    },
    closeDrop() {
      this.hidemethis = !this.hidemethis;
    },
    hideModal() {
      this.hidedetails = !this.hidedetails;
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

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getusers?page=${this.pageNumber}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.allUsers = getUsers.data.data.data;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/panel/login");
          localStorage.removeItem("admin");
        }
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
          `${process.env.VUE_APP_BASE_URL}api/getusers?page=${this.pageNumber}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.allUsers = getUsers.data.data.data;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
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
          `${process.env.VUE_APP_BASE_URL}api/getusers?page=${this.pageNumber}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.allUsers = getUsers.data.data.data;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async getUsersByUsername(username) {
      this.isLoading = true;
      this.hidedetails = !this.hidedetails;
      const data = JSON.parse(localStorage.getItem("admin"));

      this.token = data.token;

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/finduserbyusername?username=${username}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.fname = getUsers.data.data.fname;
        this.lname = getUsers.data.data.lname;
        this.email = getUsers.data.data.email;
        this.phone = getUsers.data.data.phone;
        this.bank = getUsers.data.data.bank;
        this.bankname = getUsers.data.data.bankname;
        this.type = getUsers.data.data.type;
        this.balance = getUsers.data.data.balance;
        this.username = getUsers.data.data.username;
        this.status = getUsers.data.data.status;
        this.id = getUsers.data.data.id;
        this.p_status = getUsers.data.data.p_status;

        this.isLoading = false;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async deleteUsers(status, id) {
      this.deleteText = "Loading";
      const data = {
        status: status,
        id: id,
      };
      try {
        await axios.post(`${process.env.VUE_APP_BASE_URL}api/adminupdateuser`, data, {
          headers: {
            Authorization: "Bearer  " + this.token,
          },
        });
        this.deleteText = "Deleted";
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async restoreUser(status, id) {
      this.restoreTet = "Loading";
      this.blockText = "Loading";
      const data = {
        status: status,
        id: id,
      };
      try {
        await axios.post(`${process.env.VUE_APP_BASE_URL}api/adminupdateuser`, data, {
          headers: {
            Authorization: "Bearer  " + this.token,
          },
        });
        this.restoreTet = "Restored";
        this.blockText = "Blocked";
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    getEachUserTransaction(id) {
      this.$router.push(`/service/userbyid/${id}`);
    },
  },
  async mounted() {
    // this.m = d.getMonth("MM");
    const d = new Date();
    this.y = d.getFullYear("yyyy");
    this.m = String(parseInt(d.getMonth() + 1)).padStart(2, 0);

    this.mq = d.getMonth();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.nm = monthNames[d.getMonth()];
    window.addEventListener("resize", this.getDimensions);
    if (screen.width <= 600) {
      this.hidemethis = false;
    } else {
      this.hidemethis = true;
    }
    const data = JSON.parse(localStorage.getItem("admin"));

    this.token = data.token;

    //if(data.data.type!=3){
    //this.$router.push('/admin/login')
    //}
    try {
      const getUsers = await axios.get(`${process.env.VUE_APP_BASE_URL}api/getusers`, {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });

      this.allUsers = getUsers.data.data.data;
      this.totalpage = getUsers.data.data.total;

      this.per_page = getUsers.data.data.per_page;
      this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/panel/login");
        localStorage.removeItem("admin");
      }
    }
    try {
      const totalwallet = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettotalwalletbalance`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.totalwallet = totalwallet.data.totalbalance;
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/panel/login");
        localStorage.removeItem("admin");
      }
    }

    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?month=${this.m}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.getTotal = gettransactions.data.data.total;
      this.totalAmount = gettransactions.data.total;
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=1&month=${this.m}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.airtime = parseInt(gettransactions.data.data.total);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=2&month=${this.m}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.data = parseInt(gettransactions.data.data.total);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=3&month=${this.m}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.cable = parseInt(gettransactions.data.data.total);
      console.log(this.cable);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=5&month=${this.m}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.bill = parseInt(gettransactions.data.data.total);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    const datas = JSON.parse(localStorage.getItem("admin"));
    this.token = datas.token;
    this.usertype = datas.data.type;
    this.us = data.data.username;
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Airtime", "Data", "Bill", "Cable"],
        datasets: [
          {
            label: "Scales of transaction",
            data: [this.airtime, this.data, this.bill, this.cable],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: null,
            display: false,
          },
        },
      },
    });

    myChart;
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
  .fa-bars {
    margin-top: -20px;
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
  max-width: 50px !important;
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
.cards-info {
  padding: 10p;
  margin: 10px auto;

  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.cards {
  margin: 10px;
  padding: 10px;
  border: 1px solid #0a1aa8;

  width: 100%;
  height: 70px;
  background: #0a1aa8;
  color: #fff;
  border-radius: 10px;
}
img {
  float: left;
  color: #fff;
  margin-right: 10px;
}
.cards h2 {
  font-size: 1.1rem;
  color: #fff;
}
.cards span {
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  margin-top: -10px;
}
@media screen and (max-width: 800px) {
  .cards h2 {
    font-size: 0.8rem;
  }
  .cards span {
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 568px) {
  .cards-info {
    display: contents;
    width: 100% !important;
    box-sizing: border-box;
    border: 1px solid black;
  }
  .cards {
    width: 100% !important;
    box-sizing: border-box;
    margin: 10px 0px;
  }
  .cards h2 {
    font-size: 0.8rem;
  }
  .cards span {
    font-size: 0.7rem;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
@media screen and (max-width: 420px) {
  .cards-info {
    display: contents;
    width: 100% !important;
    box-sizing: border-box;
    border: 1px solid black;
  }
  .cards {
    box-sizing: border-box;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0px;
  }
  .cards h2 {
    font-size: 0.8rem;
  }
  .cards span {
    font-size: 0.7rem;
  }
  img {
    width: 30px;
    height: 30px;
  }
}

.pg-btn {
  padding: 2px;
  border-radius: 3px;
  font-size: 0.6em;
  margin: 2px;
  cursor: pointer;
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
.modal {
  position: fixed;
  background: #f2f2f2;
  height: 100%;
  width: 100%;
}
.scnd-modal {
  max-width: 500px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
  border-radius: 10px;
  padding: 10px;
  z-index: 100000;
  margin: 100px auto;
  position: relative;
  box-sizing: border-box;
}
.hd-cncel {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.hd-cncel h2 {
  font-size: 1rem;
}
.hd-cncel span {
  margin-top: 4px;
}
.main-content {
  padding: 10px;
  margin-top: 30px;
}
.ech-detail {
  display: flex;
  justify-content: space-between;
  height: 30px;

  align-items: center;
  margin-top: 5px;
}
.ech-detail .user-title {
  font-weight: 500;
  font-size: 1rem;
  font-weight: 600;
}
.delete {
  background: crimson;
  color: #fff;
  max-width: 120px;
  border: 1px solid crimson;
  padding: 10px;
  border-radius: 5px;
}
.block {
  background: yellow;
  color: #fff;
  max-width: 120px;
  border: 1px solid yellow;
  padding: 10px;
  border-radius: 5px;
}
.upgrade {
  background: green;
  color: #fff;
  max-width: 120px;
  border: 1px solid green;
  padding: 10px;
  border-radius: 5px;
}
header {
  width: 100% !important;
  position: fixed;
  background: #fff;
  box-shadow: 0px 2px 30px 2px rgb(0 0 0 / 10%);
  height: 70px;
  z-index: 100000;
}
nav {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left-side-con {
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  padding: 10px;
}
.right-side-con {
  background: #0a1aa8;
  height: 100%;
  width: calc(100% - 260px);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.hidden-icon {
  display: none;
  padding: 10px;
}
.image-home img {
  width: 36px;
  float: left;
}
.image-home {
  width: 100%;
  animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;
  vertical-align: middle;
}
h3 {
  float: left;

  animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;
  vertical-align: middle;
  font-size: 1.51rem;
  margin: 6px;
}
.main-head-nav {
  padding: 10px;

  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left-main-icon {
  place-items: center;
  align-content: center;
  padding: 10px;
}
.right-main-icon {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
i {
  font-size: 1.3rem;
  color: #fff !important;
}
.grtuser {
  color: #fff;
  font-weight: 800;
  margin-right: 20px;
  font-size: 0.8rem;
}
@media screen and (max-width: 490px) {
  .left-side-con {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
  .right-side-con {
    display: none;
  }
  .image-home {
    width: 100%;
    justify-content: center;
    display: flex;
  }
  .hidden-icon {
    display: inline;

    padding: 10px;
  }
}

.hiddenicon {
  font-size: 1.3rem;
  margin: 10px;
}
.fa {
  cursor: pointer;
}
.pic-nl {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  border: 1px solid #ccc;
  margin-top: -10px;
  margin-right: 10px;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
}
.img {
  height: 40px;
  width: 40px;
  border-radius: 100%;
}
@media screen and (max-width: 755px) {
  .pic-nl {
    color: #000 !important;
  }
}
.fa-angle-right {
  display: inline-block;
  text-align: center;
  align-self: center;
}
.menu-item {
  font-size: 0.9rem;
  display: inline-block;
  text-align: center;
  align-content: center;
  align-self: center;
}
.btn-direct {
  background: #0a1aa8;
  color: #fff;
  border: 1px solid #0a1aa8;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
}
.router {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 36px;
  font-size: 20px !important;
}
#download {
  background: #0a1aa8;
  color: #fff;
  padding: 5px;
  border: none;
}
.image-home img {
  width: 36px;
  float: left;
  width: 150px;
}
</style>
