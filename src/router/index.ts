import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EditorView from '../views/EditorView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/editor', name: 'Editor', component: EditorView },
  { path: '/about', name: 'About', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
