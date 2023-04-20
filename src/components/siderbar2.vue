<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside
    :class="is_expandable ? 'is-expanded' : ''"
    class="shadow d-lg-flex d-md-flex"
    id="aside"
  >
    <div class="logo d-flex"></div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" style="border: none; background: none">
        <span class="material-icons closebg" @click="ToggleMenu">close</span>
        <span
          class="material-icons d-lg-none d-sm-block"
          id="demo2"
          @click="ToggleMenucancel"
          >close</span
        >
      </button>
    </div>

    <div class="menu mb-4 namebar d-none">
      <h5>Admin</h5>
      <small class="text-danger">Regular Member</small>
      <div class="cardri_tag">
        <div class="text_tag">Cardri Tag:</div>
        <div class="main_tag">
          <span class="text-tag">{{ username }}</span>
          <span class="material-icons" @click="copyText(username)" style="cursor: pointer"
            >content_copy</span
          >
        </div>
      </div>
    </div>
    <div class="menu" style="display: grid">
      <router-link to="/dashboard/home" class="button">
        <span class="material-icons" title="Dashboard">dashboard</span>
        <span class="text">Dashboard</span>
      </router-link>

      <router-link to="/wallet/wallet" class="button">
        <span class="material-icons" title="Transaction">wallet</span>
        <span class="text">Wallet</span>
      </router-link>
      <router-link to="/cardri/pay" class="button">
        <span class="material-icons">error</span>
        <span class="text">Cardri Pay</span>
      </router-link>
      <router-link to="/swap/fund" class="button">
        <span class="material-icons">swap_horiz</span>
        <span class="text">Swap Fund</span>
      </router-link>
      <router-link to="/bill/home" class="button">
        <span class="material-icons">receipt_long</span>
        <span class="text">Bills</span>
      </router-link>
      <router-link to="/card/home" class="button">
        <span class="material-icons">credit_card</span>
        <span class="text">Card</span>
      </router-link>
      <router-link to="/transaction/home" class="button">
        <span class="material-icons">receipt_long</span>
        <span class="text">Transaction</span>
      </router-link>
      <router-link to="/market/home" class="button">
        <span class="material-icons">manage_accounts</span>
        <span class="text">P2P Market</span>
      </router-link>
      <router-link to="/available/soon" class="button">
        <span class="material-icons">link</span>
        <span class="text">Payment Link</span>
      </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu" style="display: grid">
      <router-link to="/available/soon" class="button">
        <span class="material-icons" title="Dashboard">group</span>
        <span class="text">Referral</span>
      </router-link>

      <router-link to="/settings/setting" class="button">
        <span class="material-icons" title="Transaction">settings</span>
        <span class="text">Settings</span>
      </router-link>
      <a to="javascript:void()" class="button" @click="logout">
        <span class="material-icons">logout</span>
        <span class="text">Logout</span>
      </a>
    </div>
  </aside>
</template>
<script setup>
import { ref } from "vue";

const is_expandable = ref(true);
const ToggleMenu = () => {
  is_expandable.value = !is_expandable.value;
  // localStorage.setItem("is-expanded", is_expandable.value);
};
</script>
<script>
export default {
  data() {
    return {
      showme: true,
    };
  },
  props: ["username", "firstname", "lastname"],
  mounted() {
    this.showme = false;
  },
  methods: {
    ToggleMenucancel() {
      this.showme = !this.showme;
    },
    async copyText(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        this.alertstatus = true;
        (this.status = "success"), (this.message = "Copied to clipboard");
        setTimeout(() => {
          this.alertstatus = false;
        }, 3000);
      } catch ($e) {
        this.alertstatus = true;
        (this.status = "failed"), (this.message = "Failed to copy");
        setTimeout(() => {
          this.alertstatus = false;
        }, 3000);
      }
    },
    logout() {
      this.signOut().then(() => {
        this.$router.push("../auth/login");
      });
    },
  },
};
</script>

<style scoped lang="scss">
aside {
  flex-direction: column;
  width: calc(3rem + 32px);
  min-height: 100vh;
  overflow: auto;
  padding: 1.5rem;
  transition: 0.6s ease-out;
  background-color: #fff;
  margin-right: 20px;
  @media (max-width: 750px) {
    z-index: 100;
  }

  .flex {
    flex: 1 1 0;
  }
  @media (max-width: 750px) {
    position: fixed;
    display: flex;
    .flex {
      flex: 1 1 0;
    }
  }
  .closebg {
    @media (max-width: 750px) {
      display: none;
    }
  }
  a {
    line-height: 1rem;
    color: #fff !important;
    text-decoration: none;
  }
  .services {
    line-height: 2rem;
  }
  .flex {
    flex: 1;
  }
  .logo {
    margin-left: -5px;

    img {
      width: 177px;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
    z-index: 10000;
    .menu-toggle {
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 1rem !important;

        color: #4a4e50;
      }
      &:hover {
        .material-icons {
          transform: translateX(0.5rem);
          transition: 0.2s ease-out;
        }
      }
    }
  }
  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .menu {
    margin: 0 -0.5rem;
    background-color: #f5f5ff;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      cursor: pointer;

      .material-icons {
        color: var(--menu-title);
        transition: 0.2s ease-out;
        color: #4a4e50 !important;
        font-size: 14px !important;
      }
      .text {
        color: var(--menu-title);
        transition: 0.2s ease-out;
        color: #4a4e50;
        font-weight: 600;
        font-size: 14px !important;
      }
      &:hover {
        background: #4705af;
        transition: 0.2s ease-out;
        background: #4705af;
        .text {
          color: #fff;
          font-weight: 600;
        }
        .material-icons {
          color: #fff !important;
        }
      }
      &.router-link-exact-active {
        .material-icons,
        .text {
          color: #4a4e50;
          font-weight: 600;
        }
      }
      &.router-link-exact-active {
        background: #4705af;
        .text {
          color: #fff;
          font-weight: 600;
        }
        .material-icons {
          color: #fff !important;
        }
      }
    }
    .dropdown-menu {
      transition: 0.2s ease-in;
    }
    .namebar {
      display: none !important;
    }
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    .namebar {
      display: block !important;
    }
    .button {
      .material-icons {
        font-size: 1.4rem;
      }
    }
    h3,
    .button .text {
      opacity: 1;
      transition: 0.3s ease-out;
    }

    .button {
      .material-icons {
        margin-right: 0.8rem;
      }
    }
    .logo {
      img {
        width: 130px;
      }
    }
    .dropdown-menu {
      transition: 0.2s ease-in-out;
    }
  }
  .namebar {
    padding: 10px;
    border-radius: 8px;
    h5 {
      font-weight: 600;
      font-size: 14px;
      margin-bottom: -5px;
    }
    small {
      font-size: 10px !important;
      font-weight: 600;
      margin-top: -10px;
      display: inline-block;
    }
    .cardri_tag {
      padding: 5px;
      display: flex;
      align-items: center;
      .text_tag {
        font-weight: 600;
        color: #000;
        font-size: 10px;
      }
      .main_tag {
        padding: 2px;
        border-radius: 5px;
        background: #fff;
        font-size: 12px;
        display: flex;
        align-items: center;
        margin-left: 5px;
        .material-icons {
          font-size: 10px;
          color: #12bd89;
        }
        .text-tag {
          color: #12bd89;
          font-size: 10px;
          margin-right: 5px;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
