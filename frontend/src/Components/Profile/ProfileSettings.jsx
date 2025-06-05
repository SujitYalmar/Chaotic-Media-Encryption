import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './ProfileSettings.css';

const ProfileSettings = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please log in to view your profile.</div>;

  return (
    <div className="profile-settings-container">
      <div className="profile-settings-form">
        <h2>User Profile</h2>
        <div className="profile-photo-section">
          <img src={user.picture} alt={user.name} className="profile-settings-pic" />
        </div>
        <div className="profile-info-block">
          <label>Username</label>
          <div className="profile-info-value">{user.name}</div>
        </div>
        <div className="profile-info-block">
          <label>Email</label>
          <div className="profile-info-value">{user.email}</div>
        </div>
        {/* Add more fields if needed */}
      </div>
    </div>
  );
};

export default ProfileSettings;