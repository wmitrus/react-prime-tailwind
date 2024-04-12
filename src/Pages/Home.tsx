import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type HomeProps = object & ComponentPropsWithoutRef<'div'>;

export default function Home({ className, ...rest }: HomeProps) {
  return (
    <div className={cn(['', className])} {...rest}>
      <h1>HOME</h1>
      <Link to="/demo/table">Table</Link>
    </div>
  );
}
