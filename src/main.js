import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import naive from "naive-ui";
import { ArrowBack, ArrowForward } from "@vicons/ionicons5";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {faLocationDot,faEnvelope,faPhone,} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faGooglePlus,faSquareInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";



library.add(faLocationDot, faEnvelope, faPhone, faFacebook, faTwitter,faSquareInstagram,faGooglePlus );
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(naive);
app.mount("#app");
