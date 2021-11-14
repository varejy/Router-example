import { FC } from 'react';
import { Header } from 'rsuite';
import styled from 'styled-components';
import { Content } from './content.component';
import { PageTitle } from './pageTitle.component';

const StyledPageLayout: FC<Page> = ({ className, title, children }) => {
  return (
    <div className={className}>
      <Header>
        <PageTitle>{title}</PageTitle>
      </Header>
      <Content>{children}</Content>
    </div>
  );
};
export const PageLayout = styled(StyledPageLayout)`
  padding: 0 18px;
`;
interface Page {
  className?: string;
  title: string;
}
