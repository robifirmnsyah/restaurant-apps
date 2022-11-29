import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';
import RestoList from '../views/pages/resto-list';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
