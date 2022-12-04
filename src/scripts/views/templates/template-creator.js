/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => `
  <article class="restoran">
    <div class="img-wrapper">
      <img
        width="100%" 
        height="260px"
        src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
        class="lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
        alt="${restaurant.name}"
      />
      <p class="city">Kota ${restaurant.city}</p>
    </div>
    <h3><a class="resto-detail" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
    <h4>Rating : ${restaurant.rating}</h4>
    <p class="desc">
    ${restaurant.description.substring(0, 100)}
    </p>
  </article>
`;

const createSkeletonTemplate = (num) => {
  let template = '';

  for (let i = 0; i < num; i++) {
    template += `
    <article class="restoran">
      <div class="img-wrapper">
        <img
          width="100%" 
          height="260px"
          alt="skeleton"
        />
      </div>
      <h3><a class="skeleton">lorem ipsum</a></h3>
      <h4 class="skeleton">Lorem ipsum dolor</h4>
      <p class="skeleton">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta.
      </p>
    </article>
    `;
  }
  return template;
};

const allCategories = (categories) => {
  let list = '';
  categories.forEach((category) => {
    list += `<li>${category.name}</li>`;
  });
  return list;
};

const allMenu = (menus) => {
  let list = '';
  menus.forEach((menu) => {
    list += `<li>${menu.name}</li>`;
  });
  return list;
};

const createRestaurantDetail = (restaurant) => `
    <div class="left-wrapper">
      <div class="img-wrapper">
        <img
        src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"
        alt="${restaurant.name}"
        />
        <div id="favoriteButtonContainer"></div>
      </div>
      <div class="desc-wrapper">
        <h1 class="resto-name">${restaurant.name}</h1>
        <div class="addr-rating__wrapper">
          <p class="resto-address">Kota ${restaurant.city}</p>
          <p class="resto-address">Alamat : ${restaurant.address}</p>
          <p class="resto-rating">Rating : ${restaurant.rating}</p>
        </div>
        <p>
          ${restaurant.description}
        </p>restaurant
      </div>     
    </div>
    <div class="right-wrapper">
      <div class="category">
        <h3>Menu Categories :</h3>
        <ul>${allCategories(restaurant.categories)}</ul>
      </div>
      <div class="menus">
        <div class="food">
          <h3>Foods :</h3>
          <ul>${allMenu(restaurant.menus.foods)}</ul>
        </div>
        <div class="drink">
          <h3>Drinks :</h3>
          <ul>${allMenu(restaurant.menus.drinks)}</ul>
        </div>
      </div>
      <button class="accordion">Reviews <span class="arrow"> &#9660; </span></button>
      <div class="panel hide"></div>
    </div>  
`;

const createCustumerReviews = (reviews, panel) => {
  reviews.forEach((review) => {
    const list = `
      <div class="review-container">
        <p class="review-title">from ${review.name} on ${review.date}</p>
        <q class="review-text">${review.review}</q>
      </div>
    `;
    panel.insertAdjacentHTML('afterbegin', list);
  });
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { };

export {
  createRestaurantItem,
  createRestaurantDetail,
  createCustumerReviews,
  createSkeletonTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
