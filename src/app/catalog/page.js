import React from 'react';
import styles from './catalog-style.module.css';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Товар 1', description: 'Описание товара 1', price: '1000 руб.', image: '/images/grass.png' },
  { id: 2, name: 'Товар 2', description: 'Описание товара 2', price: '1500 руб.', image: '/images/grass.png' },
  { id: 3, name: 'Товар 3', description: 'Описание товара 3', price: '2000 руб.', image: '/images/grass.png' },
  { id: 4, name: 'Товар 4', description: 'Описание товара 1', price: '1000 руб.', image: '/images/grass.png' },
  { id: 5, name: 'Товар 5', description: 'Описание товара 2', price: '1500 руб.', image: '/images/grass.png' },
  { id: 6, name: 'Товар 6', description: 'Описание товара 3', price: '2000 руб.', image: '/images/grass.png' },
  { id: 7, name: 'Товар 1', description: 'Описание товара 1', price: '1000 руб.', image: '/images/grass.png' },
  { id: 8, name: 'Товар 2', description: 'Описание товара 2', price: '1500 руб.', image: '/images/grass.png' },
  { id: 9, name: 'Товар 3', description: 'Описание товара 3', price: '2000 руб.', image: '/images/grass.png' },
  { id: 10, name: 'Товар 4', description: 'Описание товара 1', price: '1000 руб.', image: '/images/grass.png' },
  { id: 11, name: 'Товар 5', description: 'Описание товара 2', price: '1500 руб.', image: '/images/grass.png' },
  { id: 12, name: 'Товар 6', description: 'Описание товара 3', price: '2000 руб.', image: '/images/grass.png' },
  // Добавьте другие товары по необходимости
  // db
];

const CatalogPage = () => {
  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.pageTitle}>Каталог товаров</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.image} alt={product.name} width={250} height={300} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
