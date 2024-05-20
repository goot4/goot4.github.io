import SideNav from '@/app/ui/work/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-16 flex-col bg-blue-300 md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:fixed md:w-48 md:h-full">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 md:pl-64">{children}</div>
    </div>
  );
}