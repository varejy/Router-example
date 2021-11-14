import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router5';

export const NavLink: FC<NavLinkProps> = React.forwardRef(({ routeName, children, className }, ref) => {
  return (
    <Link ref={ref} routeName={routeName} className={className}>
      {children}
    </Link>
  );
});

interface NavLinkProps {
  routeName: string;
  children: any;
  className?: string;
}
