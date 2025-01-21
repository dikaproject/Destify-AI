import ProtectedLayout from "@/components/layout/RoleProtected";
import { UserRole } from "@/types/auth";

const allowedRoles: UserRole[] = ["USER", "ADMIN"];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedLayout allowedRoles={allowedRoles}>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col overflow-auto">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </ProtectedLayout>
  );
}