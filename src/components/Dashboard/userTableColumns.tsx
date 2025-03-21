import type { ColumnsType } from 'antd/es/table';
import { User } from '../../types/User';
import UserRow from '../UserRow/UserRow';

export const userTableColumns: ColumnsType<User> = [
  {
    title: 'First Name',
    key: 'firstName',
    sorter: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
    render: (_text: string, record: User) => <UserRow user={record} />,
    width: '40%',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    sorter: (a: User, b: User) => a.lastName.localeCompare(b.lastName),
    width: '35%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a: User, b: User) => a.age - b.age,
    width: '25%',
  },
];
