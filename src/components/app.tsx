import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen
  from '../pages/login-screen/login-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from './priavate-route/private-route';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

type AppProps = {
  countPlaces: number;
  offers: Offer[];
  reviews: Review[];
}
function App({countPlaces, offers, reviews}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen countPlaces = {countPlaces} offers = {offers}/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferScreen offers={offers} reviews={reviews}/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
