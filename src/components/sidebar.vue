<template>
  <transition name="slide" class="col-tran">
    <aside v-show="hideme">
      <div class="side-main-bar">
        <ul>
          <li
            class="width:100%;border:1px solid black;margin-top:0px"
            style="margin-top: 40px"
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
          <li style="margin-bottom: 50px !important">
            <a
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                height: 100%;
              "
              href="javascript:void(0)"
              @click="logOut"
              active-class="bd-l"
            >
              <span class="menu-item">
                <span class="chl-ck">
                  <span class="fa fa-sign-out icon-menu"></span>
                </span>

                Logout</span
              >
              <span class="fa fa-angle-right icon-menu"></span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
</template>
<script>
import axios from "axios";
export default {
  name: "Side-bar",
  props: ["hideme"],
  data() {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      usertype: "",
    };
  },

  mounted() {
    const data = JSON.parse(localStorage.getItem("admin"));
    this.token = data.token;
    this.usertype = data.data.type;

    window.addEventListener("resize", this.getDimensions);
  },
  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },

  methods: {
    async logOut() {
      try {
        const data = JSON.parse(localStorage.getItem("admin"));

        this.token = data.token;

        await axios.get(`${process.env.VUE_APP_BASE_URL}api/logout`, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        });

        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    },
  },
};
</script>
<style>
aside {
  transition: 300ms ease all;
  backface-visibility: hidden;
  width: 250px;
  background: #fff;
  box-shadow: 1px 0px 30px rgb(0 0 0 / 10%);
  padding: 10px;
  margin: 0px auto;
  float: left;
  height: 100%;
  position: fixed;
  top: 50;
  left: 0;
}

.side-main-bar {
  touch-action: none;
  overflow: hidden !important;
  height: 100%;
  position: relative;
}
ul {
  font-size: 1.1rem;
  letter-spacing: 0.2px;
  font-family: "Quicksand", Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
  overflow-y: hidden;
  margin-top: 40px;
  overflow: hidden;
  height: 100%;
}
ul:hover {
  overflow-y: scroll;
  transition-delay: 0.2s;
}
ul::-webkit-scrollbar {
  width: 3px;
}

/* Track */
ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
ul::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}
ul li {
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 5px;
}

.menu-item {
  font-size: 12px;
}
.icon-menu {
  font-size: 10px !important ;
}
li:hover {
  transition-duration: 0.5s;
  transition-delay: 0.5s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  background: #bec2f3;
  border-radius: 25px;
}
.services {
  font-weight: 700;
  font-size: 1.2rem;
}
@media screen and (max-width: 499px) {
  .services {
    font-weight: 500;
    font-size: 1rem;
  }
}
.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(20px);
}
@media screen and (max-width: 996px) {
  aside {
    position: fixed;
    height: 100%;
  }
}
@media screen and (max-width: 755px) {
  aside {
    position: fixed;
    height: 100%;
  }
}

.chl-ck {
  background: #0a1aa8;
  color: #fff;

  border-radius: 100%;
  padding: 3px;
  height: 13px;
  width: 13px;
  display: inline-block;
  font-size: 10px !important;
  align-content: center;
  margin-right: 10px;
  text-align: center;
}
.chl-ck span {
  color: #fff !important;
}
@media screen and (max-width: 996px) {
  aside {
    position: fixed;
    height: 100%;
  }
}
@media screen and (max-width: 755px) {
  aside {
    position: fixed;
    height: 100%;
  }
}
</style>
