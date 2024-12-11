// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

export const resources = {
  en: {
    translation: {
      errors: {
        is_required: 'Required field',
        invalid_email_address: 'Invalid email address',
        too_short_password: 'The password is too short',
      },
      components: {
        Logo: {
          text: 'Logo',
        },
        Header: {
          products: 'Products',
          profile: 'Profile',
          cart: 'Cart',
          product_new: 'New product',
        },
        AddToCart: {
          text: 'Add to cart',
        },
      },
      forms: {
        ProfileForm: {
          username: {
            placeholder: 'Enter username',
          },
          about: {
            placeholder: 'Enter about',
          },
        },
        ProductForm: {
          name: {
            placeholder: 'Enter name',
          },
          description: {
            placeholder: 'Enter description',
          },
          price: {
            placeholder: 'Enter price',
          },
          photo: {
            placeholder: 'Enter photo URL',
          },
        },
        LoginForm: {
          email: {
            placeholder: 'Enter email',
          },
          password: {
            placeholder: 'Enter password',
          },
        },
      },
      buttons: {
        save: 'Save',
      },
      limits: {
        minLength4: 'At least 4 characters',
        maxLength32: 'Maximum of 32 characters',
        maxLength500: 'Maximum of 50 characters',
      },
    },
  },
  ru: {
    translation: {
      errors: {
        is_required: 'Обязательно для заполнения',
        invalid_email_address: 'Некорректный email адрес',
        too_short_password: 'Слишком короткий пароль',
      },
      components: {
        Logo: {
          text: 'Логотип',
        },
        Header: {
          products: 'Продукты',
          profile: 'Профиль',
          cart: 'Корзина',
          product_new: 'Новый продукт',
        },
        AddToCart: {
          text: 'В корзину',
        },
      },
      forms: {
        ProfileForm: {
          username: {
            placeholder: 'Введите имя пользователя',
          },
          about: {
            placeholder: 'Введите описание',
          },
        },
        ProductForm: {
          name: {
            placeholder: 'Введите наименование',
          },
          description: {
            placeholder: 'Введите описание',
          },
          price: {
            placeholder: 'Введите стоимость',
          },
          photo: {
            placeholder: 'Введите фото URL',
          },
        },
        LoginForm: {
          email: {
            placeholder: 'Введите почту',
          },
          password: {
            placeholder: 'Введите пароль',
          },
        },
      },
      buttons: {
        save: 'Сохранить',
      },
      limits: {
        minLength4: 'Не менее 4-x символов',
        maxLength32: 'Не более 32-x символов',
        maxLength500: 'Не более 500 символов',
      },
    },
  },
};
