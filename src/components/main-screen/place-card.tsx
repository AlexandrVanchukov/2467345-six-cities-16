import { Link } from 'react-router-dom';
import { persentOneStar } from '../../const';
import { Offer } from '../../types/offer';


type PlaceCardProps = {
  offer: Offer;
  onMouseOver?: ((listItemId: string) => void);
}

function PlaceCard({offer, onMouseOver}: PlaceCardProps): JSX.Element {
  return(
    <article className="cities__card place-card" onMouseOver={ onMouseOver ? () => {
      onMouseOver(offer.id);
    } : undefined}
    >
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to = {`/offer/${offer.id}`} >
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${offer.isFavorite ? '--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width:`${ Math.round(offer.rating) * persentOneStar}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {`/offer/${offer.id}`} >{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
