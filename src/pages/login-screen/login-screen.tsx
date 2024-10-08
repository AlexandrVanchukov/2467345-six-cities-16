import { useRef, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';

function LoginScreen(): JSX.Element {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const submitFormHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(emailRef.current !== null && passwordRef !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current?.value
      }));
    }
  };

  return(
    <body>
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={'/'} className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={submitFormHandler}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={emailRef}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

export default LoginScreen;
