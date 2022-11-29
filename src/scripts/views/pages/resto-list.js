import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItem, createSkeletonTemplate } from '../templates/template-creator';

const RestoList = {
  async render() {
    return `
    <section class="hero">
      <div class="banner">
        <h1 class="hero-text">Pelipur Lapar</h1>
        <p class="hero-tag">Anda Kenyang, Kami Senang!</p>
      </div>
    </section>
    <section class="list">
      <div class="list-title">
        <h2>restaurant list</h2>
      </div>
      <div class="container">${createSkeletonTemplate(21)}</div>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restoContainer = document.querySelector('.container');
    restoContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default RestoList;
