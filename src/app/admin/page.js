'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <h2>Вход в админ-панель</h2>
      <input name="username" placeholder="Логин" required />
      <input name="password" type="password" placeholder="Пароль" required />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Войти</button>
    </form>
  );
}
