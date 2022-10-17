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
        <h2 class="hc-x">Transaction</h2>
        <TabNav
          :tabs="['Transaction', 'Schedule']"
          :selected="selected"
          @selected="setSelected"
        >
          <Tab :isSelected="selected === 'Transaction'">
            <main>
              <div class="info-ipx-col">
                <div style="width: 100%">
                  <label for="search">
                    From:
                    <select name="" id="" v-model="day" @click="getDaysValue(day)">
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </label>
                  <label for="search">
                    To:
                    <select name="" id="" v-model="day" @click="getDaysValue(day)">
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </label>

                  <label for="search">
                    Month:
                    <select v-model="m" @change="getMonthNumber(m, item)">
                      <option :value="index" v-for="(item, index) in months" :key="index">
                        {{ item }}
                      </option>
                    </select>
                  </label>
                  <label for="search">
                    Years:
                    <select v-model="y" @click="getYearTransact(y)">
                      <option :value="item" v-for="item in ys" :key="item.index">
                        {{ item }}
                      </option>
                    </select>
                  </label>
                </div>
                <div style="width: 100%">
                  <div class="cvlp">
                    <h3>{{ nm }} Total Transaction</h3>
                    <br />
                    <span>{{ totalpage }}</span>
                  </div>
                  <div class="cvlp">
                    <h3>{{ nm }} Total Airtime Income</h3>
                    <br />
                    <span>&#8358;{{ Intl.NumberFormat().format(totalAmount) }}</span>
                  </div>
                </div>
              </div>
              <div style="max-width: 300px; width: 100%; margin: 0px auto">
                <canvas id="myChart" width="50" height="50"></canvas>
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
                  v-if="airtimeTransaction != 0"
                  id="content"
                  ref="exportable_table"
                >
                  <thead>
                    <tr role="row">
                      <th>Transaction ID</th>
                      <th>Time</th>
                      <th>Receiver</th>
                      <th>Network</th>
                      <th>Bal Before</th>
                      <th>Bal After</th>
                      <th>Amount</th>
                      <th>Source</th>
                      <th>Status</th>
                      <!--<th>Action</th>-->
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in airtimeTransaction"
                      :key="item.id"
                      @click="getTransactionDetailUsers(item.user, item.ref)"
                    >
                      <td style="width: 110px">{{ item.ref }}</td>
                      <td>{{ moment(item.updated_at).format("DD-MM-YYYY") }}</td>
                      <td>{{ item.reciever }}</td>

                      <td v-if="item.name == 1 && item.name != 'succesfull'">MTN</td>
                      <td v-else-if="item.name == 2 && item.name != 'succesfull'">
                        Airtel
                      </td>
                      <td v-else-if="item.name == 3 && item.name != 'succesfull'">
                        9mobile
                      </td>
                      <td v-else-if="item.name == 4 && item.name != 'succesfull'">GLO</td>
                      <td
                        v-else-if="
                          item.name != 1 &&
                          item.name != 2 &&
                          item.name != 3 &&
                          item.name != 4 &&
                          item.name != 'succesfull'
                        "
                      >
                        {{ item.name }}
                      </td>

                      <td v-if="item.network == 1 && item.name == 'succesfull'">MTN</td>
                      <td v-else-if="item.network == 2 && item.name == 'succesfull'">
                        Airtel
                      </td>
                      <td v-else-if="item.network == 3 && item.name == 'succesfull'">
                        9mobile
                      </td>
                      <td v-else-if="item.network == 4 && item.name == 'succesfull'">
                        GLO
                      </td>
                      <td>&#8358;{{ Intl.NumberFormat().format(item.bbefore) }}</td>
                      <td>&#8358;{{ Intl.NumberFormat().format(item.bafter) }}</td>
                      <td>&#8358;{{ Intl.NumberFormat().format(item.amount) }}</td>
                      <td>{{ item.m }}</td>
                      <td v-if="item.status == 1">Completed</td>
                      <td v-if="item.status == 0">Failed</td>
                      <!---
                          <td>
                            <button @click="getEachUserDetails" class="btn-details">
                              Details
                            </button>
                          </td>
                          -->
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
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
                    </tr>
                  </tfoot>
                </table>
                <div v-else style="width: 100%; text-align: center; font-weight: bold">
                  No Transaction found
                </div>
              </div>
            </main>
          </Tab>
          <Tab :isSelected="selected === 'Schedule'">
            <main id="content">
              <div class="icl-tbl">
                <table class="table-body" v-if="airtimeSchedule != 0">
                  <thead>
                    <tr role="row">
                      <th>Transaction ID</th>
                      <th>Time</th>
                      <th>User</th>
                      <th>Network</th>

                      <th>Amount</th>
                      <th>Source</th>
                      <th>Status</th>
                      <!-- <th>Action</th>-->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in airtimeSchedule" :key="item.id">
                      <td>{{ item.ref }}</td>
                      <td>{{ moment(item.updated_at).format("d-m-yyyy") }}</td>
                      <td>{{ item.reciever }}</td>
                      <td>{{ item.name }}</td>
                      <td>&#8358;{{ Intl.NumberFormat().format(item.amount) }}</td>
                      <td>{{ item.m }}</td>
                      <td v-if="item.status == 1">Completed</td>
                      <td v-if="item.status == 0">Failed</td>
                      <!--<td>
                            <button @click="getEachUserDetails" class="btn-details">
                              Details
                            </button>
    
                          </td>
                          -->
                    </tr>
                  </tbody>
                  <tfoot style="width: 100% !important; border: 1px solid black">
                    <tr style="display: flex !important; width: 100%">
                      <button @click="prevs" class="pg-btn" :disabled="pageNumber <= 1">
                        prev
                      </button>
                      <span v-for="(item, index) in new Array(page)" :key="index">
                        <button
                          :class="['pg-btn', pageNumber == index + 1 ? 'active' : '']"
                          @click="pageNumbergets(index)"
                        >
                          {{ index + 1 }}
                        </button>
                      </span>
                      <button
                        @click="nexts"
                        class="pg-btn"
                        :disabled="pageNumber >= page"
                      >
                        next
                      </button>
                    </tr>
                  </tfoot>
                </table>
                <div v-else style="width: 100%; text-align: center; font-weight: bold">
                  No Transaction found
                </div>
              </div>
            </main>
          </Tab>
        </TabNav>
      </div>
    </div>
  </div>
</template>
<script>
import Header2 from "../../components/header.vue";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import TabNav from "@/components/tabnav.vue";
import Tab from "@/components/tab.vue";
import moment from "moment";
import jsPDF from "jspdf";
import Chart from "chart.js/auto";

import html2canvas from "html2canvas";
import * as XLSX from "xlsx/xlsx.mjs";

export default {
  name: "Bill -app",
  components: { Header2, Loading, TabNav, Tab },
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
      selected: "Transaction",
      airtimeTransaction: [],
      pageNumber: 1,
      per_page: "",
      total: "",
      page: "",
      totalpage: 0,
      moment: moment,
      airtimeSchedule: [],
      myear: "",
      m: "",
      ys: [],
      am: "",
      y: "",
      nm: "",
      day: "",
      daysInMonth: "",
      index: 0,
      totalAmount: 0,
      months: [
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
      ],
      airtime: "",
      bill: "",
      data: "",
      cable: "",
    };
  },
  methods: {
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
          pdf.save("airtime.pdf");
        },
      });
    },
    async getMonthNumber(m) {
      this.nm = this.months[m];

      if (this.m.toString().length == 2) {
        this.am = m;
      } else {
        this.am = "0" + parseInt(m + 1);
      }
      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/gettransactions?month=${this.am}&year=${this.y}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.airtimeTransaction = getUsers.data.data.data;
        this.totalpage = getUsers.data.data.total;
        this.per_page = getUsers.data.data.per_page;
        this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
        var i;
        this.totalAmount = 0;
        for (i = 0; i < this.totalpage; i++) {
          this.transStatus = this.airtimeTransaction[i].status;

          if (this.transStatus == "0") {
            continue;
          }
          this.totalAmount =
            this.totalAmount + parseInt(this.airtimeTransaction[i].amount);
        }
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async getDaysValue(day) {
      if (this.m.toString().length == 2) {
        this.am = this.m;
      } else {
        this.am = "0" + parseInt(this.m + 1);
      }
      this.day = day;
      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/gettransactions?day=${this.day}&month=${this.am}&year=${this.y}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.airtimeTransaction = getUsers.data.data.data;

        this.totalpage = getUsers.data.data.total;
        this.per_page = getUsers.data.data.per_page;
        this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
        this.totalAmount = getUsers.data.total;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async getYearTransact(year) {
      if (this.m.toString().length == 2) {
        this.am = this.m;
      } else {
        this.am = "0" + parseInt(this.m + 1);
      }
      this.y = year;
      if (this.day) {
        try {
          const getUsers = await axios.get(
            `${process.env.VUE_APP_BASE_URL}api/gettransactions?day=${this.day}&month=${this.am}&year=${this.y}`,
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          );
          this.airtimeTransaction = getUsers.data.data.data;
          this.totalpage = getUsers.data.data.total;
          this.per_page = getUsers.data.data.per_page;
          this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
          this.totalAmount = getUsers.data.total;
        } catch (e) {
          if (e.response.status === 401) {
            this.$router.push("/");
            localStorage.removeItem("admin");
          }
        }
      } else {
        try {
          const getUsers = await axios.get(
            `${process.env.VUE_APP_BASE_URL}api/gettransactions
                &month=${this.m + 1}&year=${this.y}`,
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          );
          this.airtimeTransaction = getUsers.data.data.data;
          this.totalpage = getUsers.data.data.total;
          this.per_page = getUsers.data.data.per_page;
          this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
          this.totalAmount = getUsers.data.total;
        } catch (e) {
          if (e.response.status === 401) {
            this.$router.push("/");
            localStorage.removeItem("admin");
          }
        }
      }
    },
    getHidden() {
      this.wideBody = !this.wideBody;
    },
    showSchedule() {
      this.showsce = !this.showsce;
    },
    setSelected(tab) {
      this.selected = tab;
    },
    async pageNumberget(newPagenumber) {
      if (this.m.toString().length == 2) {
        this.am = this.m;
      } else {
        this.am = "0" + parseInt(this.m + 1);
      }

      if (this.day) {
        this.pageNumber = newPagenumber + 1;
        this.$router.push({
          path: this.$route.path,
          query: {
            pageNumber: newPagenumber + 1,
          },
        });

        try {
          const getUsers = await axios.get(
            `${process.env.VUE_APP_BASE_URL}api/gettransactions?month=${this.am}&year=${this.y}&page=${this.pageNumber}`,
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          );
          this.airtimeTransaction = getUsers.data.data.data;
          console.log(this.airtimeTransaction);
          this.totalpage = getUsers.data.data.total;
          //this.per_page = getUsers.data.data.per_page;
          //this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
          this.totalAmount = getUsers.data.total;
        } catch (e) {
          if (e.response.status === 401) {
            this.$router.push("/");
            localStorage.removeItem("admin");
          }
        }
      } else {
        try {
          const getUsers = await axios.get(
            `${process.env.VUE_APP_BASE_URL}api/gettransactions?month=${this.am}&year=${this.y}page=${this.pageNumber}`,
            {
              headers: {
                Authorization: "Bearer " + this.token,
              },
            }
          );
          this.airtimeTransaction = getUsers.data.data.data;
          this.totalpage = getUsers.data.data.total;
          //this.per_page = getUsers.data.data.per_page;
          //this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
          this.totalAmount = getUsers.data.total;
        } catch (e) {
          if (e.response.status === 401) {
            this.$router.push("/");
            localStorage.removeItem("admin");
          }
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
      if (this.m.toString().length == 2) {
        this.am = this.m;
      } else {
        this.am = "0" + parseInt(this.m + 1);
      }

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/gettransactions?page=${this.pageNumber}&month=${this.am}&year=${this.y}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.airtimeTransaction = getUsers.data.data.data;
        this.totalAmount = getUsers.data.total;
        this.totalAmount = getUsers.data.total;
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
      if (this.m.toString().length == 2) {
        this.am = this.m;
      } else {
        this.am = "0" + parseInt(this.m + 1);
      }

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/gettransactions?page=${this.pageNumber}&month=${this.am}&year=${this.y}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.airtimeTransaction = getUsers.data.data.data;
        this.totalAmount = getUsers.data.total;
        this.totalAmount = getUsers.data.total;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },

    async pageNumbergets(newPagenumber) {
      this.pageNumber = newPagenumber + 1;
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: newPagenumber + 1,
        },
      });

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getallschedule?page=${this.pageNumber}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );

        this.airtimeTransaction = getUsers.data.data.data;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async prevs() {
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: this.pageNumber - 1,
        },
      });
      this.pageNumber = this.pageNumber - 1;

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getallschedule?page=${this.pageNumber}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.airtimeTransaction = getUsers.data.data.data;
        this.totalAmount = getUsers.data.total;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async nexts() {
      this.$router.push({
        path: this.$route.path,
        query: {
          pageNumber: this.pageNumber + 1,
        },
      });
      this.pageNumber = this.pageNumber + 1;

      try {
        const getUsers = await axios.get(
          `${process.env.VUE_APP_BASE_URL}api/getallschedule?page=${this.pageNumber}`,
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        );
        this.airtimeTransaction = getUsers.data.data.data;
        this.totalAmount = getUsers.data.total;
      } catch (e) {
        if (e.response.status === 401) {
          this.$router.push("/");
          localStorage.removeItem("admin");
        }
      }
    },
    async getTransactionDetailUsers(userid, ref) {
      this.$router.push(`/userdetailtransaction/${userid}/${ref}`);
    },
  },
  async mounted() {
    const d = new Date();
    this.m = d.getMonth("MM");
    this.y = d.getFullYear("yyyy");
    this.day = String(d.getDate()).padStart(2, 0);

    this.myear = `${this.m}-${this.y}`;

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

    this.daysInMonth = new Date(this.y, this.m, 0).getDate();

    const currentYear = new Date().getFullYear();
    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
    this.ys = range(currentYear, currentYear - 50, -1);
    const data = JSON.parse(localStorage.getItem("admin"));

    this.token = data.token;
    //if(data.data.type!=3){
    //this.$router.push('/admin/login')
    //}
    if (this.m.toString().length == 2) {
      this.am = this.m;
    } else {
      this.am = "0" + parseInt(this.m + 1);
    }

    try {
      const getUsers = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?month=${this.am}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );
      this.airtimeTransaction = getUsers.data.data.data;
      this.totalpage = getUsers.data.data.total;
      this.per_page = getUsers.data.data.per_page;
      this.page = Math.ceil(parseInt(this.totalpage / this.per_page) + 1);
      this.totalAmount = getUsers.data.total;
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const getUsers = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/getallschedule?`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );
      this.airtimeSchedule = getUsers.data.data.data;
      this.totalpages = getUsers.data.data.total;
      this.per_pages = getUsers.data.data.per_page;
      this.pages = Math.ceil(parseInt(this.totalpages / this.per_pages) + 1);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }

    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=1&month=${this.am}&year=${this.y}`,
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
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=2&month=${this.am}&year=${this.y}`,
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
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=3&month=${this.am}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.cable = parseInt(gettransactions.data.data.total);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
    try {
      const gettransactions = await axios.get(
        `${process.env.VUE_APP_BASE_URL}api/gettransactions?type=5&month=${this.am}&year=${this.y}`,
        {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        }
      );

      this.bill = parseInt(gettransactions.data.data.total);
      console.log(this.bill);
    } catch (e) {
      if (e.response.status === 401) {
        this.$router.push("/");
        localStorage.removeItem("admin");
      }
    }
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
  cursor: pointer;
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
.cvlp {
  border-radius: 10px;
  background: #0a1aa8;
  border: 1px solid #0a1aa8;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}
.cvlp h3 {
  color: #fff;
  font-size: 1rem;
}
.cvlp span {
  color: #fff;
  font-size: 0.9rem;
  margin-left: 15px;
}
@media screen and (max-width: 499px) {
  .cvlp h3 {
    color: #fff;
    font-size: 0.8rem;
  }
  .cvlp span {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 15px;
  }
}
label {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
select {
  float: right;
  width: 100%;
  border: 3px solid #0a1aa8;
  padding: 5px;
}
#download {
  background: #0a1aa8;
  color: #fff;
  padding: 5px;
  border: none;
}
</style>
