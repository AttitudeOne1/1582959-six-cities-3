import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting, cities} from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersCount = {Setting.RentalOffersCount}
      cities={cities}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>
);
