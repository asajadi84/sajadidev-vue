import {createRouter, createWebHashHistory} from 'vue-router'

//pages
import IndexPage from './pages/IndexPage.vue'
import ProjectPage from './pages/ProjectPage.vue';
import ResumePage from './pages/ResumePage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ShowcasePage from './pages/ShowcasePage.vue';

const routes = [
    {path: "/", component: IndexPage},
    {path: "/project", component: ProjectPage},
    {path: "/resume", component: ResumePage},
    {path: "/portfolio", component: PortfolioPage},
    {path: "/portfolio/showcase", component: ShowcasePage},
    {path: "/:pathMatch(.*)*", component: NotFoundPage}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
});

export default router;