/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

import { v4 } from 'uuid';

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

enum OperationType {
  Cost = 'Cost',
  Profit = 'Profit',
}

interface OperationBase {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
}

interface Cost extends OperationBase {
  type: OperationType.Cost;
}

interface Profit extends OperationBase {
  type: OperationType.Profit;
}

export type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const randomCategoryId = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomCategoryId];

  const randomProductId = Math.floor(Math.random() * randomCategory.products.length);
  const randomProduct = randomCategory.products[randomProductId];

  const randomPhotoId = Math.floor(Math.random() * photos.length);
  const randomPhoto = photos[randomPhotoId];

  const category: Category = {
    id: v4(),
    name: randomCategory.name,
    photo: null,
  };

  return {
    id: v4(),
    name: randomProduct,
    photo: randomPhoto,
    desc: 'Описание для ' + randomProduct,
    createdAt: createdAt,
    oldPrice: getRandomNumber(100, 20000),
    price: getRandomNumber(100, 20000),
    category: category,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const randomCategoryId = Math.floor(Math.random() * categories.length);
  const randomCategory = categories[randomCategoryId];

  const category: Category = {
    id: v4(),
    name: randomCategory.name,
    photo: null,
  };

  return {
    id: v4(),
    name: randomCategory.name,
    desc: 'Описание для ' + randomCategory.name,
    createdAt: createdAt,
    amount: getRandomNumber(1200, 7000),
    category: category,
    type: getRandomNumber(0, 1) === 1 ? OperationType.Cost : OperationType.Profit,
  };
};

const categories: { name: string; products: string[] }[] = [
  {
    name: 'Еда и напитки',
    products: [
      'яблоко',
      'банан',
      'клубника',
      'помидор',
      'картофель',
      'лук',
      'морковь',
      'апельсин',
      'виноград',
      'груша',
    ],
  },
  {
    name: 'Домашний декор',
    products: ['диван', 'кресло', 'кровать', 'стол', 'стул'],
  },
  {
    name: 'Спорт и отдых',
    products: ['велосипед', 'ролики', 'лыжи', 'мяч', 'гантели'],
  },
];

const photos: string[] = [
  'https://img.mvideo.ru/Pdb/30075301b.jpg',
  'https://img.mvideo.ru/Big/30067797bb.jpg',
  'https://img.mvideo.ru/Big/30064758bb.jpg',
];

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
