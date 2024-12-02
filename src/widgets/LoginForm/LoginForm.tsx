import React, { FC } from 'react';
import s from './LoginForm.module.sass';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
import validator from 'validator';

type formProps = {
  email: string;
  password: string;
};

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

  const onSubmit = (data: formProps) => {
    console.log(data);
    reset();
  };

  return (
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

      <button type={'submit'}>{t`buttons.save`}</button>
    </form>
  );
};
