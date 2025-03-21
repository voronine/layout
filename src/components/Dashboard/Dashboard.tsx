import React from 'react'; 
import { Table, Row, Col, Layout } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { logout } from '../../redux/slices/aythSlice';
import UserRow from './UserRow';
import UserDetails from './UserDetails';
import '../../styles/Dashboard.scss';
import { User } from '../../types/User';

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const { users, loading } = useFetchUsers();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };

  const columns: ColumnsType<User> = [
    {
      title: 'First Name',
      key: 'firstName',
      sorter: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
      render: (_text: string, record: User) => (
        <UserRow user={record} />
      ),
      width: '40%',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
      width: '40%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a: User, b: User) => a.age - b.age,
      width: '20%',
    },
  ];

  return (
    <Layout>
      <Content className="dashboard-container" style={{ padding: '24px' }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            {authUser && (
              <UserDetails 
                user={authUser} 
                onLogout={handleLogout} 
              />
            )}
          </Col>
          <Col span={24}>
            <Table<User>
              dataSource={users}
              columns={columns}
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
