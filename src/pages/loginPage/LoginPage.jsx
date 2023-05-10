import { Helmet } from 'react-helmet';
//import { LoginForm } from '../../components/LoginForm/LoginForm';
import ModalAddTransaction from '../../components/Modal/ModalAddTransaction/ModalAddTransaction'
import s from './LoginPage.module.scss';
import man from '../../images/login/man.svg';

import Media from 'react-media';

const LoginPage = () => {
  return (
    <>
      <Helmet>login</Helmet>
      <div className={s.back}>
        <div className={s.container}>
          <div className={s.loginContainer}>
            <Media
              queries={{
                tab: '(min-width: 768px) and (max-width: 1279px)',
                desk: '(min-width: 1280px)',
              }}
            >
              {matches => (
                <>
                  {matches.tab && (
                    <div className={s.loginImgWrapper}>
                      <img
                        src={man}
                        alt="The phone with app on the screen"
                        width="250"
                        height="260"
                        className={s.loginImg}
                      />
                      <p className={s.appTitle}>Finance App</p>
                    </div>
                  )}
                  {matches.desk && (
                    <div className={s.loginImgWrapper}>
                      <img
                        src={man}
                        alt="The phone with app on the screen"
                        width="435"
                        height="420"
                        className={s.loginImg}
                      />
                      <p className={s.appTitle}>Finance App</p>
                    </div>
                  )}
                </>
              )}
            </Media>
            <ModalAddTransaction/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
