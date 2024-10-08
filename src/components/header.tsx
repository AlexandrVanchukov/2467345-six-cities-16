import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../const';
import { useAppSelector } from '../hooks';

function Header(){
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.user);
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to = {'/'} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth
                  ? (
                    <>
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">{userData?.email}</span>
                          <span className="header__favorite-count">{0}</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={AppRoute.Login}>
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>
                  )
                  : (
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    </li>
                  )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
