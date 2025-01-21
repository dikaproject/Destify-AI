import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/auth';

interface RoleProtectedProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

const RoleProtected = ({ children, allowedRoles }: RoleProtectedProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (user && !allowedRoles.includes(user.role as UserRole)) {
      router.push('/unauthorized');
    }
  }, [user, loading, router, allowedRoles]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user && allowedRoles.includes(user.role as UserRole) ? <>{children}</> : null;
};

export default RoleProtected;