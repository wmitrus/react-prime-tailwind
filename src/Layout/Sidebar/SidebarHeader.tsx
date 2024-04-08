import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type SidebarHeaderProps = object & ComponentPropsWithoutRef<'div'>;

export default function SidebarHeader({
  className,
  ...rest
}: SidebarHeaderProps) {
  return (
    <div className={cn(['content-center text-center', className])} {...rest}>
      Million $ Tool
    </div>
  );
}
