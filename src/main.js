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
  faCreditCard,
  faUser,
  faArrowRightFromBracket,
  faUserPen,
  faTag,
  faHeadphones,
  faFileInvoiceDollar,
  faFutbol,
  faFilePen,
  faSave,
  faArrowRight,
  faArrowLeft,
  faTrash,
  faFloppyDisk,
  faEye,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGooglePlus,
  faSquareInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faLocationDot,
  faEnvelope,
  faPhone,
  faFacebook,
  faTwitter,
  faSquareInstagram,
  faGooglePlus,
  faCreditCard,
  faUser,
  faArrowRightFromBracket,
  faUserPen,
  faTag,
  faHeadphones,
  faFileInvoiceDollar,
  faFutbol,
  faFilePen,
  faSave,
  faArrowRight,
  faArrowLeft,
  faTrash,
  faFloppyDisk,
  faEye,
  faCartShopping
);
import { createRouter, createWebHistory } from "vue-router";
import BookingBallLayout from "./components/DatSanBong/BookingBallLayout.vue";
import DetailBall from "./components/ChiTietSan/DetailBall.vue";
import Home from "./views/index.vue";
import AboutUsVue from "./components/AboutUs.vue";
import ThanhToanBall from "./components/ThanhToan/ThanhToanBall.vue";
import Login from "./components/Account/Login.vue";
import Register from "./components/Account/Register.vue";
import UserProfile from "./components/Profile/Users/UserProfile.vue";
import { NPagination } from "naive-ui";
import ManageProfile from "./components/Profile/Managers/ManageProfile.vue";
import BookedBall from "./components/Profile/Users/BookedBall.vue";
import ConTact from "./components/ConTact.vue";
import { create } from "naive-ui";
import CategoryVue from "./components/QuanAo/Category.vue";
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
    { path: "/aboutus", component: AboutUsVue },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/user", component: UserProfile },
    { path: "/manage", component: ManageProfile },
    { path: "/bookedball", component: BookedBall },
    { path: "/contact", component: ConTact },
    { path: "/quanao", component: CategoryVue },
  ],
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(naive);
app.use(create());
app.use(router);
app.mount("#app");
app.component(NPagination.name, NPagination);
