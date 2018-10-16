import Vue from "vue";
import Resource from "vue-resource";
import Router from "vue-router";

import app from "./app.vue";
import markdown from "./markdown.vue";

Vue.use(Resource);
Vue.use(Router);

Vue.config.productionTip = false;

const router = new Router({
    mode: "history",
    routes: [{
        path: "*",
        component: markdown,
        props: route => ({
            url: route.query.url,
            dark: route.query.theme === "dark",
        }),
    }],
});

(() => new Vue({
    router,
    el: "#app",
    render: h => h(app),
}))();
