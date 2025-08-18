import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EditorView from '../views/EditorView.vue';
import HelpView from '../views/HelpView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/editor', name: 'Editor', component: EditorView },
  { path: '/help', name: 'Help', component: HelpView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
