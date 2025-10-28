import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import Contact from "@/views/Contact.vue";
import JobsDetails from "@/views/Jobs/JobsDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobsdetails",
    component: JobsDetails,
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  //catchall  404
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
