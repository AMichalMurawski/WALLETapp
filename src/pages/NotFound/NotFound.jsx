import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import s from '../NotFound/NotFound.module.scss';

import five from '../../images/login/not_found.png';

const NotFound= ()=> {
  return (
    <>
    <Helmet>notFound</Helmet>
      <div className={s.bg_page}>
        <div className={s.bg_blur}>
          <div className={s.container}>
            <div className={s.wrapper}>
              <img className={s.img} src={five} alt="sad leopard" />
              <h2 className={s.title}>Opps... Page Not Found!</h2>
           <p className={s.desc}>Five fluffy friends are sorry to inform, you are lost :(</p>
                <Link to="/" className={s.link}>
                  here
                </Link>{' '}
                to get back to home page.
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;