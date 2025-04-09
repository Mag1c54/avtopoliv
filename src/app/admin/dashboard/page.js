import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/logout-button/logoutButton';
import CatalogForm from '@/components/admin-forms/admin-catalog-form/admin-catalog-form';
import CatalogList from '@/components/admin-buttons/catalog-list';




export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'admin') {
    redirect('/admin');
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Админ панель </h1>
      <CatalogForm />
      <CatalogList />
      <LogoutButton />
    </div>
  );
}
