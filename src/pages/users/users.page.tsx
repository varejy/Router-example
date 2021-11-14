import { PageLayout } from '@pages/layout/components/page.layout';
import { UserList } from '@services/user/user.service';
import { FC } from 'react';
import { Link } from 'react-router5';
import { Avatar, FlexboxGrid, List } from 'rsuite';
import styled from 'styled-components';

const ListLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

const Users: FC<{ userList: UserList }> = ({ userList }) => {
  return (
    <PageLayout title="Users">
      <List hover bordered>
        {userList.data.map((user, idx) => {
          return (
            <List.Item key={user.id} index={idx + 1}>
              <ListLink routeName="user" routeParams={{ userId: user.id }}>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={6}>
                    <Avatar src={user.avatar} />
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={10}>{`${user.first_name} ${user.last_name}`}</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={6}>{user.email}</FlexboxGrid.Item>
                </FlexboxGrid>
              </ListLink>
            </List.Item>
          );
        })}
      </List>
    </PageLayout>
  );
};

export default Users;
