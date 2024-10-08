import { useAppSelector } from '../../hooks';

function MainEmpty(){
  const selectedCity = useAppSelector((state) => state.city);
  return(
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {selectedCity.name}</p>
        </div>
      </section>
      <div className="cities__right-section" style={{
        backgroundImage: 'url(../../img/no-places.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundPosition: 'right center'}}
      >
      </div>
    </div>
  );
}
export default MainEmpty;
