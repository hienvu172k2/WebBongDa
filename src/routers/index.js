import { createRouter, createWebHistory } from 'vue-router';
// import BookingBallLayout from '../components/DatSanBong/BookingBallLayout.vue'; 
import App from '../App.vue'
const routes = [
  {
    path:"/app",
    component:App,
    children: [
      {
        path: "bookingball",
        component: () =>
          import( "../components/DatSanBong/BookingBallLayout.vue"), 
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
