import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';
import s from '../LoginForm/LoginForm.module.scss';
import * as Yup from 'yup';
import sprite from '../../images/vectors/icons.svg';
import { ReactComponent as Email } from '../../images/login/email.svg';
import { ReactComponent as Password } from '../../images/login/password.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signin } from '../../redux/auth/authThunk';
import { BiHide, BiShow } from 'react-icons/bi';
import { useAuth } from '../../hooks';

export const LoginForm = () => {
  const initialValues = {
    email: 'example@mail.pl',
    password: 'Password1!',
  };

  const dispatch = useDispatch();
  const [email, setEmail] = useState('kevin.sam@mail.com');
  const [password, setPassword] = useState('Password1!');
  const { isLoggedIn } = useAuth();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;
    dispatch(signin({ email: email.value, password: password.value }));
  };

  const [type, setType] = useState('password');

  const showPassword = () => {
    setType('text');
  };

  const hidePassword = () => {
    setType('password');
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
        'Must be a valid email (latin letters). For example: example123@example.com'
      )
      .email('Must be a valid email!')
      .min(10)
      .max(63)
      .required('Required field'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
        'Only numbers and Latin letters are allowed'
      )
      .min(6, 'Minimum 6 characters required')
      .max(12, 'Maximum 12 characters')
      .required('Required field'),
  });

  return (
    <div className={s.formContainer}>
      <div className={s.logo}>
        <svg width="120" height="30" className={s.logoIcon}>
          <use href={`${sprite}#icon-logo2`}></use>
        </svg>
      </div>
      <Formik initialValues={initialValues} validationSchema={SignUpSchema}>
        {({ errors, touched }) => (
          <Form className={s.form} onSubmit={onSubmit}>
            <label className={s.label}>
              <Field
                type="email"
                name="email"
                placeholder="E-mail"
                className={classNames(s.input, {
                  [s.errorInput]: errors.email && touched.email,
                  [s.validInput]: !errors.email && touched.email,
                })}
                value={email}
                onInput={e => setEmail(e.target.value)}
              />
              <Email className={s.inputIcon} />
              {!errors.email && touched.email && (
                <Email className={s.validInputIcon} />
              )}
              {errors.email && touched.email && (
                <Email className={s.errorInputIcon} />
              )}
              {errors.email && touched.email && (
                <div className={s.errorField}>{errors.email}</div>
              )}
            </label>
            <label className={s.label}>
              <Field
                type={type}
                name="password"
                placeholder="Password"
                autoComplete="true"
                className={classNames(s.input, {
                  [s.errorInput]: errors.password && touched.password,
                  [s.validInput]: !errors.password && touched.password,
                })}
                value={password}
                onInput={e => setPassword(e.target.value)}
              />
              <Password className={s.inputIcon} />
              {!errors.password && touched.password && (
                <Password className={s.validInputIcon} />
              )}
              {errors.password && touched.password && (
                <Password className={s.errorInputIcon} />
              )}
              {errors.password && touched.password && (
                <div className={s.errorField}>{errors.password}</div>
              )}
              {type === 'password' ? (
                <span className={s.hideIcon}>
                  <BiHide
                    className={s.icon}
                    onMouseDown={showPassword}
                    onTouchStart={showPassword}
                  />
                </span>
              ) : (
                <span
                  className={s.showIcon}
                  onMouseUp={hidePassword}
                  onTouchEnd={hidePassword}
                >
                  <BiShow className={s.icon} />
                </span>
              )}
            </label>
            {isLoggedIn === false ? (
              <button type="submit" className={s.loginBtn}>
                log in
              </button>
            ) : (
              <button className={s.loginBtnLoading} enabled>
                log In
              </button>
            )}

            <Link to="/registration" className={s.registerBtn}>
              register
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
