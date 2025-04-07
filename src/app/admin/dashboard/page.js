import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // путь зависит от твоей структуры
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/logout-button/logoutButton';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);


if (!session || session.user.role !== 'admin') {
    redirect('/admin'); // если не админ — на страницу входа
  }


  return (
    <div>
      <h1>Добро пожаловать, админ!</h1>
      <p>Здесь будет ваша панель управления.</p>
      <LogoutButton />
    </div>
  );
}


// if (!session || session.user.role !== 'admin') {
//     redirect('/admin'); // если не админ — на страницу входа
//   }
// jwt implementation