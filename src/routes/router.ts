import * as vR from "vue-router";
import AboutVue from "@pages/About.vue";
import NotFound from "@pages/NotFoundPage.vue";
//Create a router and then export it

const _routes:Array<vR.RouteRecordRaw> = [
//Path & Component are mandatory.
{
    path:"/portfolio/",
    component:AboutVue,
    name:"home"
},
{
    path:"/ui-design",
    component:()=> import("@pages/UIDesign.vue"),//Lazy loading to defer loading when required
    name:"home.ui-design" //Use defined. Keep dot notation to have elegant design
},
{
    path:"/ux-design",
    component:()=> import("@pages/UXDesign.vue"),//Lazy loading to defer loading when required
    name:"home.ux-design" //Use defined. Keep dot notation to have elegant design
},
{
    path:"/notfound", //Need to change with regex to catch all non-defined
    component:NotFound,
    name:"home.missing"
}

];

const router = vR.createRouter({
    history:vR.createWebHistory(),//WebHash history will add hash before every route
    routes: _routes,//Send the routes here.
})

export default router