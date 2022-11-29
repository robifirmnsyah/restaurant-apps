import { createCustumerReviews } from '../views/templates/template-creator';

const ReviewButtonInitiator = {
  init({
    button, panel, arrow, reviews,
  }) {
    button.addEventListener('click', (event) => {
      this._toggle(event, panel, arrow);
    });

    createCustumerReviews(reviews, panel);
  },

  _toggle(event, panel, arrow) {
    event.stopPropagation();
    panel.classList.toggle('hide');
    arrow.classList.toggle('arrowup');
  },
};

export default ReviewButtonInitiator;
