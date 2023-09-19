import { createRouter, createWebHistory } from 'vue-router';
import BookingBallLayout from '../components/DatSanBong/BookingBall.vue'; 

const routes = [
  {
    path: "/bookingball",
    component: BookingBallLayout, 
    children: [
      {
        path: "",
        component: () =>
          import( "../components/DatSanBong/BookingBall.vue"), 
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
