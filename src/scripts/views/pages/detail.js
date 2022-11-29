import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetail } from '../templates/template-creator';
import ReviewButtonInitiator from '../../utils/review-button';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
          <div class="detail-container">
            <div id="loader" class="detail"></div>
          </div>
          <div id="likeButtonContainer"></div>          
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { error, message, restaurant } = await RestaurantDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('.detail-container');

    if (!error) {
      restoContainer.innerHTML = createRestaurantDetail(restaurant);
    } else {
      restoContainer.innerHTML = `<h1 class="error">Error : ${message}</h1>`;
    }

    ReviewButtonInitiator.init({
      button: document.querySelector('.accordion'),
      panel: document.querySelector('.panel'),
      arrow: document.querySelector('.arrow'),
      reviews: restaurant.customerReviews,
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
