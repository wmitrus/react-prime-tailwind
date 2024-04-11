import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import { SidebarBody, SidebarHeader } from './Sidebar';
import { MenuBar } from './Navbar';
import { Outlet } from 'react-router-dom';

type PageProps = object & ComponentPropsWithoutRef<'div'>;

export default function Page({ className, ...rest }: PageProps) {
  return (
    <div className={cn(['', className])} {...rest}>
      <div
        className="min-h-screen md:flex-row"
        style={{ backgroundColor: 'var(--surface-ground)' }}
      >
        <div className="flex h-screen">
          <div className="min-w-64 border-r-2 border-slate-600">
            <SidebarHeader
              className="h-18"
              style={{ backgroundColor: 'var(--surface-100)' }}
            />
            <SidebarBody className="px-2" />
          </div>
          <div className="flex-1 overflow-y-auto">
            <header className="z-999 drop-shadow-1 sticky top-0 flex w-full min-h-12">
              <MenuBar />
            </header>
            <main>
              <div className="card h-100vh-h-12 p-2">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
