import React from 'react';
import { User } from '../../types/User';
import '../../styles/UserRow.scss';

interface UserRowProps {
  user: User;
}

const UserRow: React.FC<UserRowProps> = ({ user }) => {
  return (
    <div className="user-row">
      <img src={user.image} alt="avatar" className="user-row-avatar" />
      <div className="user-row-info">
        <p className="user-row-name">{user.firstName}</p>
      </div>
    </div>
  );
};

export default UserRow;
