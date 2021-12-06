import React, { FC } from 'react';
import { useRoute } from 'react-router5';
import { Nav } from 'rsuite';

export const NavItem: FC<{ routeName: string; as: React.ElementType; children: any }> = (
  { routeName, as, children },
  ...rest
) => {
  const { route } = useRoute();
  return (
    <Nav.Item routeName={routeName} active={routeName === route?.name} as={as} {...rest}>
      <span>{children}</span>
    </Nav.Item>
  );
};
