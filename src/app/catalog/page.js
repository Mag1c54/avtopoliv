'use client';
import React, { useEffect, useState } from 'react';
import styles from './catalog-style.module.css';
import Image from 'next/image';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const res = await fetch('/api/catalog');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Ошибка загрузки каталога:', error);
      }
    };

    fetchCatalog();
  }, []);

  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.pageTitle}>Каталог товаров</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.imageUrl} alt={product.title} width={250} height={300} />
            <h2 className={styles.productName}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
