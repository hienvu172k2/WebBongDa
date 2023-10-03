import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import naive from "naive-ui";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGooglePlus,
  faSquareInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { createRouter, createWebHistory } from "vue-router";
import BookingBallLayout from "./components/DatSanBong/BookingBallLayout.vue";
import DetailBall from "./components/ChiTietSan/DetailBall.vue";
import Home from "./views/index.vue";
import { NMessageProvider } from "naive-ui";
import ThanhToanBall from './components/ThanhToan/ThanhToanBall.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      alias: "/home",
    },
    { path: "/bookingball", component: BookingBallLayout },
    { path: "/detailball/:id", component: DetailBall },
    { path: "/thanhtoanball", component: ThanhToanBall },
  ],
});

library.add(
  faLocationDot,
  faEnvelope,
  faPhone,
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faGooglePlus
);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(naive);
app.use(router);
app.mount("#app");
app.use(NMessageProvider);
