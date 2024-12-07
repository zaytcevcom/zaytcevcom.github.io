import React, { FC } from 'react';
import s from './LoginForm.module.sass';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { login, ProfileState } from 'src/store/slices/authSlice';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

type formProps = {
  email: string;
  password: string;
};

type DemoUser = {
  email: string;
  password: string;
  profile: ProfileState;
};

const demoUsers: DemoUser[] = [
  {
    email: 'user@example.com',
    password: '123456',
    profile: {
      username: 'user',
      role: 'user',
    },
  },
  {
    email: 'admin@example.com',
    password: '1234567890',
    profile: {
      username: 'admin',
      role: 'admin',
    },
  },
];

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: formProps) => {
    const user = demoUsers.find((user) => user.email === data.email && user.password === data.password);

    if (!user) {
      alert('Неверный логин или пароль!');
      reset();

      return;
    }

    dispatch(login({ token: v4(), profile: user.profile }));

    navigate('/profile');
  };

  return (
    <>
      <div style={{ margin: '20px' }}>
        <h3>Демо учетные записи:</h3>
        {demoUsers.map((user) => {
          return (
            <div key={user.email} style={{ marginTop: '10px' }}>
              <p>
                <b>Email</b>: {user.email}
              </p>
              <p>
                <b>Password</b>: {user.password}
              </p>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={s.root}>
        <h2>Вход</h2>
        <input
          type="text"
          placeholder={t`forms.LoginForm.email.placeholder`}
          {...register('email', {
            required: t`errors.is_required`,
            validate: (value) => validator.isEmail(value) || t`errors.invalid_email_address`,
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="text"
          placeholder={t`forms.LoginForm.password.placeholder`}
          {...register('password', {
            required: t`errors.is_required`,
            minLength: {
              value: 6,
              message: t`errors.too_short_password`,
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type={'submit'}>{t`forms.LoginForm.submit`}</button>
      </form>
    </>
  );
};
