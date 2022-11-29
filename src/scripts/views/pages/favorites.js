import FavoriteRestoIdb from '../../data/favaorite-restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="list">
      <div class="list-title">
        <h2>favorite restaurant</h2>
      </div>
      <div class="container"></div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restoContainer = document.querySelector('.container');

    if (!restaurants.length) {
      restoContainer.innerHTML = '<p class="empty-db">Not Found. Please add your favorite restaurant!</p>';
    } else {
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantItem(restaurant);
      });
    }
  },
};

export default Favorite;
