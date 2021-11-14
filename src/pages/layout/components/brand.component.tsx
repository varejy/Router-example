import { FC } from 'react';
import styled from 'styled-components';
const BrandEl: FC<{ className?: string; name: string }> = ({ className = '', name }) => {
  return (
    <div className={className}>
      <h3>{name}</h3>
    </div>
  );
};
export const Brand = styled(BrandEl)`
  background-color: #34c3ff;
  color: #fff;
  text-align: center;
  padding: 18px 0;
  height: 78px;
`;
