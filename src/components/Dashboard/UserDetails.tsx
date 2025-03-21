import React from 'react';
import { Button } from 'antd';
import { User } from '../../types/User';
import '../../styles/UserDetails.scss';

interface UserDetailsProps {
  user: User;
  onLogout: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onLogout }) => {
  return (
    <div className="user-details">
      <div className="user-info-wrapper">
        {user.image && (
          <img 
            src={user.image} 
            alt="Profile" 
            className="user-avatar" 
          />
        )}
        <div className="user-info">
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
      <Button className="logout-btn" type="default" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserDetails;
