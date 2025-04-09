'use client';

import { useState } from 'react';

export default function CatalogForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/catalog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ title: '', description: '', price: '', imageUrl: '' });
      setSuccess(true);
    } else {
      alert('Ошибка при добавлении!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
      <input name="title" placeholder="Название" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Описание" value={form.description} onChange={handleChange} required />
      <input name="price" placeholder="Цена" value={form.price} onChange={handleChange} required />
      <input  name="imageUrl" placeholder="URL изображения" value={form.imageUrl} onChange={handleChange} required />
      <button type="submit" style={{ marginTop: '1rem' }}>Добавить товар</button>
      {success && <p style={{ color: 'green' }}>Товар успешно добавлен!</p>}
    </form>
  );
}
