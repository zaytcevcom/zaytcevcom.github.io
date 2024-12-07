import React, { FC } from 'react';
import s from './ProductForm.module.sass';
import { useForm } from 'react-hook-form';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { addProduct } from 'src/store/slices/productsSlice';
import { Product } from 'src/homeworks/ts1/3_write';
import { v4 } from 'uuid';

type formProps = {
  name: string;
  description: string;
  price: string;
  photo?: string;
};

export const ProductForm: FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      price: '',
      photo: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: formProps) => {
    const product: Product = {
      id: v4(),
      name: data.name,
      photo: data.photo,
      desc: data.description,
      createdAt: '2024-12-06',
      oldPrice: null,
      price: parseFloat(data.price),
      category: null,
    };

    dispatch(addProduct(product));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.root}>
      <h2>Продукт</h2>
      <input
        type="text"
        placeholder={t`forms.ProductForm.name.placeholder`}
        {...register('name', {
          required: t`errors.is_required`,
          minLength: {
            value: 4,
            message: t`limits.minLength4`,
          },
          maxLength: {
            value: 32,
            message: t`limits.maxLength32`,
          },
        })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <textarea
        placeholder={t`forms.ProductForm.description.placeholder`}
        {...register('description', {
          required: false,
          maxLength: {
            value: 500,
            message: t`limits.maxLength500`,
          },
        })}
      />
      {errors.description && <p>{errors.description.message}</p>}

      <input
        type="number"
        placeholder={t`forms.ProductForm.price.placeholder`}
        min={0}
        {...register('price', {
          required: t`errors.is_required`,
        })}
      />
      {errors.price && <p>{errors.price.message}</p>}

      <input type="text" placeholder={t`forms.ProductForm.photo.placeholder`} {...register('photo')} />

      <button type={'submit'}>{t`buttons.save`}</button>
    </form>
  );
};
