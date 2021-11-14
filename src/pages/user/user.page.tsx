import { PageLayout } from '@pages/layout/components/page.layout';
import { User as UserType } from '@services/user/user.service';
import { FC } from 'react';
import { Panel } from 'rsuite';

const User: FC<{ user: UserType }> = ({ user }) => {
  return (
    <PageLayout title="User">
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
        <img src={user.avatar} height="240" />
        <Panel header={`${user.first_name} ${user.last_name}`}>
          <p>{user.email}</p>
        </Panel>
      </Panel>
    </PageLayout>
  );
};

export default User;
