import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type SidebarFooterProps = object & ComponentPropsWithoutRef<'div'>;

export default function SidebarFooter({
  className,
  ...rest
}: SidebarFooterProps) {
  return <div className={cn(['', className])} {...rest}></div>;
}
