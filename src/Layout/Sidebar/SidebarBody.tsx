import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import PanelMenuTest from './PanelMenuComponent';

type SidebarBodyProps = object & ComponentPropsWithoutRef<'div'>;

export default function SidebarBody({ className, ...rest }: SidebarBodyProps) {
  return (
    <div className={cn(['pt-2', className])} {...rest}>
      <PanelMenuTest />
    </div>
  );
}
