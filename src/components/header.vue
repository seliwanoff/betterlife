<template>
  <div class="container">
    <header>
      <nav>
        <div class="left-side-con">
          <div class="hidden-icon onhover-show">
            <span class="fa fa-bars hiddenicon" @click="closeDrop"></span>
          </div>

          <div class="image-home">
            <router-link to="/" class="router">
              <img src="../assets/image/logo.png" alt="" />
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
    <Sidebar :hideme="showDrop" />
  </div>
</template>
<script>
import Sidebar from "@/components/sidebar.vue";
//import axios from 'axios'
export default {
  name: "Header-App",
  components: {
    Sidebar,
  },
  data() {
    return {
      showDrop: true,
      username: "",
      letdrops: true,
      fn: "",
      image: null,
      url: "https://tap.150psi.com/public/storage/images/",
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      us: "",
    };
  },
  props: {
    getme: Function,
  },

  methods: {
    closeDrop(showDrop) {
      this.showDrop = !this.showDrop;
      this.$emit("setHidden", showDrop);
    },
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    },
  },
  beforeMount() {},
  mounted() {
    const data = JSON.parse(localStorage.getItem("admin"));
    this.token = data.token;
    this.us = data.data.username;
    window.addEventListener("resize", this.getDimensions);
    if (screen.width <= 600) {
      this.showDrop = false;
    } else {
      this.showDrop = true;
    }
  },
  /*unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },*/
};
</script>
<style>
.container {
  max-width: 1519.2px;
  margin: 0px auto;
  position: relative;
}
header {
  width: 100% !important;
  position: fixed;
  background: #fff;
  box-shadow: 0px 2px 30px 2px rgb(0 0 0 / 10%);
  height: 70px;
  z-index: 100000;

  right: 0;
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
  width: 150px;
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
  .fa-bars {
    margin-top: -20px !important;
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
</style>
