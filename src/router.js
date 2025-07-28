import {createRouter, createWebHistory} from 'vue-router'

//pages
import IndexPage from './pages/IndexPage.vue'
import ProjectPage from './pages/ProjectPage.vue';
import ResumePage from './pages/ResumePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';

const titlePrefix = 'SajadiDev - ';

const routes = [
    {path: "/", component: IndexPage, meta: {title: titlePrefix + "علی سجادی - طراح و توسعه‌دهنده فول استک"}},
    {path: "/project", component: ProjectPage, meta: {title: titlePrefix + "سفارش پروژه"}},
    {path: "/resume", component: ResumePage, meta: {title: titlePrefix + "رزومه علی سجادی"}},
    {path: "/portfolio", component: PortfolioPage, meta: {title: titlePrefix + "نمونه‌کارها"}},
    {path: "/:pathMatch(.*)*", component: NotFoundPage, meta: {title: titlePrefix + "خطای 404"}}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;