<template>
  <div class="container-xxl">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function () {
    return {
      events: ["click", "mousemove", "mousedown", "scroll", "keypress", "load"],
      logoutTimer: null,
    };
  },
  mounted() {
    this.events.forEach(function (event) {
      window.addEventListener(event, this.resetTimer);
    }, this);
    this.setTimers();
  },
  beforeCreate() {
    const data = JSON.parse(localStorage.getItem("admin"));
    if (data != null && (data.data.type == 3 || data.data.type == 4)) {
      console.log(data.data.type);
    } else {
      alert("You  are not authorized to proceed");
      localStorage.removeItem("admin");
      this.$router.push("/");
    }
  },
  methods: {
    setTimers: function () {
      this.logoutTimer = setTimeout(this.logoutUser, 1200000);
    },
    logoutUser: function () {
      localStorage.removeItem("user");
      localStorage.removeItem("sub");
      localStorage.removeItem("bill");
      this.$router.push("/");
    },
    resetTimer: function () {
      clearTimeout(this.logoutTimer);
      this.setTimers();
    },
  },
};
</script>
<style>
* {
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  color: #464855;
  font-weight: 500;
}
body {
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.45;
}
h3 {
  font: size 1.51rem;
}
body {
  background-color: #f4f5fa;
}
#app {
  max-width: 1519.2px;
  margin: 0px auto;
}
input {
  font-size: 14px;
}
</style>
