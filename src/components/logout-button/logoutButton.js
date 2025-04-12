'use client';
import { signOut } from 'next-auth/react';
import  styles from './btn-styles.module.css'

export default function LogoutButton() {
  return <button onClick={() => signOut({ callbackUrl: '/admin' })} className={styles.logoutButton}>Выйти из панели админа</button>;
}
