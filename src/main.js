import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import naive from "naive-ui";
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faLocationDot,faEnvelope,faPhone,} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faGooglePlus,faSquareInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";
import { createRouter, createWebHistory } from 'vue-router'
import BookingBall from './components/DatSanBong/BookingBall.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: App },
      { path: '/bookingball', component: BookingBall }
    ]
  })
library.add(faLocationDot, faEnvelope, faPhone, faFacebook, faTwitter,faSquareInstagram,faGooglePlus );
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(naive);
app.use(router)
app.mount("#app");
