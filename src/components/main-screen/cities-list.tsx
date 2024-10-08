import { Cities } from '../../const';
import { useAppSelector } from '../../hooks';
import { City } from '../../types/city';

type CitiesListProps = {
  onCityClick: (city: City) => void;
};

function CitiesList({onCityClick}: CitiesListProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  return(
    <ul className="locations__list tabs__list">
      {Object.values(Cities)
        .map((city) => (
          <li className="locations__item" key={city.name} onClick={() => onCityClick(city)}>
            <a className={`locations__item-link tabs__item ${ selectedCity.name === city.name ? 'tabs__item--active' : ''}`} href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}

export default CitiesList;
