import { createRouter, createWebHashHistory } from 'vue-router';

// Importar componentes
import EditarCategory from '../components/Category/EditarCategory.vue';
import NewCategory from '../components/Category/NewCategory.vue';
import Categories from '../views/Categories';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/editar-category/:id',
    name: 'EditarCategory',
    component: EditarCategory,
    props: true,
  },
  {
    path: '/add-category',
    name: 'NewCategory',
    component: NewCategory,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
