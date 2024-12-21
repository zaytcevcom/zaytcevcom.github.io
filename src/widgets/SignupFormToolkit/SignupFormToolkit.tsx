import React, { FC, useEffect } from 'react';
import s from './SignupFormToolkit.module.sass';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { login, ProfileState } from 'src/store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'src/store/api/authApi';

type formProps = {
  email: string;
  password: string;
};

type ApiError = {
  data: {
    errors: {
      message: string;
    }[];
  };
};

export const SignupFormToolkit: FC = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signup, { data, error, isLoading, isSuccess }] = useSignupMutation();

  const onSubmit = async (data: formProps) => {
    await signup(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const profile: ProfileState = {
        username: data.profile.email,
        role: 'user',
      };

      dispatch(login({ token: data.token, profile: profile }));

      navigate('/profile');
      return;
    }
  }, [data, dispatch, isSuccess, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={s.root}>
        <h2>Регистрация (Toolkit)</h2>
        <input type="text" placeholder={t`forms.SignupForm.email.placeholder`} {...register('email')} />
        <input type="text" placeholder={t`forms.SignupForm.password.placeholder`} {...register('password')} />
        {error && <div className={s.error}>{(error as ApiError).data.errors[0].message}</div>}
        <button type={'submit'} disabled={isLoading}>{t`forms.SignupForm.submit`}</button>
      </form>
    </>
  );
};
