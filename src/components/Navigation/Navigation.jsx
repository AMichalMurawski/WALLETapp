import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import IconSvg from '../utils/IconsSvg/IconSvg';
import scss from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <Media
      queries={{
        mob: '(max-width: 767px)',
        tab: '(min-width: 768px) and (max-width: 1280px)',
        desk: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <>
          {matches.mob && (
            <>
              <div>
                <nav className={scss.homeMob}>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        scale: isActive ? '1.2' : '',

                      };
                    }}
                    to="homeMob"
                  >
                    <div className={scss.homeMobIcon}>
                      <IconSvg icon="home" />
                    </div>
                  </NavLink>
                  <NavLink
                    className={scss.navLink}
                    style={({ isActive }) => {
                      return {
                        scale: isActive ? '1.2' : ''                      };
                    }}
                    to="chartMob"
                  >
                    <div className={scss.homeMobIcon}>
                      <IconSvg icon="stats" />
                    </div>
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        scale: isActive ? '1.2' : '' };
                    }}
                    to="currencyMob"
                  >
                    <div className={scss.homeMobIcon}>
                      <IconSvg icon="dolar" />
                    </div>
                  </NavLink>
                </nav>
              </div>
            </>
          )}
          {matches.tab && (
            <div className={scss.homeNav}>
              <nav>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : '',
                      textDecoration: isActive ? 'underline' : 'none',
                    };
                  }}
                  to="homeTab"
                >
                  <div className={scss.mainHome}>
                    <div className={scss.home}>
                      <IconSvg icon="home" />
                    </div>
                    <h1 className={scss.textPlain}>Home</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : '',
                      textDecoration: isActive ? 'underline' : 'none',
                    };
                  }}
                  to="chartTab "
                >
                  <div className={scss.mainStats}>
                    <div className={scss.stats}>
                      <IconSvg icon="stats" />
                    </div>
                    <h1 className={scss.textPlain}>Statistics</h1>
                  </div>
                </NavLink>
              </nav>
            </div>
          )}
          {matches.desk && (
            <>
              <div className={scss.homeNav}>
                <nav>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? 'bold' : '',
                        textDecoration: isActive ? 'underline' : 'none',
                      };
                    }}
                    to="homeDesk"
                  >
                    <div className={scss.mainHome}>
                      <div className={scss.home}>
                        <IconSvg icon="home" />
                      </div>
                      <p className={scss.textPlain}>Home</p>
                    </div>
                  </NavLink>
                  <NavLink
                    className={scss.navLink}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? 'bold' : '',
                        textDecoration: isActive ? 'underline' : 'none',
                      };
                    }}
                    to="chartDesk"
                  >
                    <div className={scss.mainStats}>
                      <div className={scss.stats}>
                        <IconSvg icon="stats" />
                      </div>
                      <p className={scss.textPlain}>Statistics</p>
                    </div>
                  </NavLink>
                </nav>
              </div>
            </>
          )}
        </>
      )}
    </Media>
  );
};
