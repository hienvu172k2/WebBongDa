import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
const routes = [
  {
    path: "/app",
    component: App,
    children: [
      {
        path: "bookingball",
        component: () =>
          import("../components/DatSanBong/BookingBallLayout.vue"),
      },
      {
        path: "detailball/:id",
        component: () => import("../components/ChiTietSan/DetailBall.vue"),
      },
      {
        path: ":id/thanhtoanball",
        component: () => import("../components/ThanhToan/ThanhToanBall.vue"),
      },
      {
        path: "aboutus",
        component: () => import("../components/AboutUs.vue"),
      },
      {
        path: "login",
        component: () => import("../components/Account/Login.vue"),
      },
      {
        path: "register",
        component: () => import("../components/Account/Register.vue"),
      },
      {
        path: "user",
        component: () => import("../components/Profile/UserProfile.vue"),
        children: [
          {
            path: "bookedball",
            component: () =>
              import("../components/Profile/Users/BookedBall.vue"),
          },
        ],
      },
      {
        path: "manage",
      },
      {
        path: "contact",
        component: () => import("../components/ConTact.vue"),
      },
      {
        path: "quanao",
        component: () => import("../components/QuanAo/Category.vue"),
      },
      {
        path:"tintuc",
        component:() => import("../components/FootBallNews/DetailNew.vue")
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
