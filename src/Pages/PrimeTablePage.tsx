import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import TableTest from '@/demo/TableTest';

type PrimeTablePageProps = object & ComponentPropsWithoutRef<'div'>;

export default function PrimeTablePage({
  className,
  ...rest
}: PrimeTablePageProps) {
  return (
    <div className={cn(['card', className])} {...rest}>
      <TableTest />
    </div>
  );
}
