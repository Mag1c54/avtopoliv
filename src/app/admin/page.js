'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import styles from './admin-style-login.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('Неверные данные');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>🔒 Вход в админ-панель</h2>
        <input
          name="username"
          placeholder="Логин"
          required
          className={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          required
          className={styles.input}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
}
