import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/todolist",
        name: "Todolist",
        component: () => import("../views/todoListContainer.vue")
    },
    {
        path: "/chess",
        name: "Chess",
        component: () => import("../views/chessContainer.vue")
    },
    {
        path: "/doublechess",
        name: "Double Chess",
        component: () => import("../views/chess2Container.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    //base: "process.env.BASE_URL",
    base: "/",
    routes
});

export default router;
