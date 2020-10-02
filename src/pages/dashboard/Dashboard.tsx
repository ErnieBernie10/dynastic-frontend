import React from 'react';
import { Layout } from '../../layout/Layout';
import { LoggedUser } from '../../models/api/User';

type Props = {
  loggedUser: LoggedUser;
}

const Dashboard: React.FC<Props> = ({ loggedUser }) => {
  return (
    <Layout>
      <div>
        {loggedUser.user.email}
      </div>
    </Layout>
  );
}

export default Dashboard;