import { Helmet } from 'react-helmet';
import Media from 'react-media';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import s from './RegistrationPage.module.scss';
import woman from '../../images/login/woman.svg';
import { SuccessRegistrationModal } from '../../components/Modal/SuccessRegistractionModal/SuccessRagistractionModal';
import { useModal } from '../../hooks';

const RegistrationPage = () => {
  const { showSuccessRegistration } = useModal();

  return (
    <>
      <Helmet>registration</Helmet>
      <div className={s.back}>
        <div className={s.container}>
          {showSuccessRegistration && <SuccessRegistrationModal />}
          <div className={s.registerContainer}>
            <Media
              queries={{
                tab: '(min-width: 768px) and (max-width: 1279px)',
                desk: '(min-width: 1280px)',
              }}
            >
              {matches => (
                <>
                  {matches.tab && (
                    <div className={s.registerImgWrapper}>
                      <img
                        src={woman}
                        alt="The phone with app on the screen"
                        width="250"
                        height="260"
                        className={s.registerImg}
                      />
                      <p className={s.appTitle}>Finance App</p>
                    </div>
                  )}
                  {matches.desk && (
                    <div className={s.registerImgWrapper}>
                      <img
                        src={woman}
                        alt="The phone with app on the screen"
                        width="435"
                        height="420"
                        className={s.registerImg}
                      />
                      <p className={s.appTitle}>Finance App</p>
                    </div>
                  )}
                </>
              )}
            </Media>
            <div className={s.form}>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
