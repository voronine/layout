import React from 'react'; 
import { Table, Row, Col, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { logout } from '../../redux/slices/aythSlice';
import UserDetails from '../UserDetails/UserDetails';
import '../../styles/Dashboard.scss';
import { User } from '../../types/User';
import DashboardMenu from '../Menu/DashboardMenu';
import { userTableColumns } from './userTableColumns';

const { Header, Content } = Layout;

const Dashboard: React.FC = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const { users, loading } = useFetchUsers();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return (
    <Layout>
      <Header className="dashboard-header">
        <DashboardMenu onLogout={handleLogout} />
      </Header>
      <Content className="dashboard-container">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            {authUser && (
              <UserDetails user={authUser} />
            )}
          </Col>
          <Col span={24}>
            <Table<User>
              dataSource={users}
              columns={userTableColumns}
              rowKey="id"
              loading={loading}
              pagination={{ pageSize: 10 }}
              tableLayout="fixed"
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
