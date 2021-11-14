import { FC, useEffect } from 'react';
import styled from 'styled-components';

const StyledPageTitle: FC<{ className?: string }> = ({ className, children }) => {
  useEffect(() => {
    document.title = children as string;
  }, [children]);
  return <h2 className={className}>{children}</h2>;
};
export const PageTitle = styled(StyledPageTitle)`
  padding: 14px 0;
  color: #787b82;
`;
