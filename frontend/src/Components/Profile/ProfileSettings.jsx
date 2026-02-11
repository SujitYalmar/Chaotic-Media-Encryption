import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { User, Mail, ShieldCheck, ExternalLink } from 'lucide-react';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return (
    <div className="profile-loading-screen">
        <div className="loading-spinner"></div>
    </div>
  );
  
  if (!isAuthenticated) return (
    <div className="profile-access-denied">
        <ShieldCheck size={48} className="error-icon" />
        <h2>Authentication Required</h2>
        <p>Please sign in to access your secure encryption profile.</p>
    </div>
  );

  return (
    <div className="profile-page-container">
      <div className="profile-glass-card">
        <header className="profile-header">
          <div className="avatar-wrapper">
            <img src={user.picture} alt={user.name} className="profile-avatar" />
            <div className="online-badge"></div>
          </div>
          <h2>Secure Identity</h2>
          <p className="auth-tag">Verified by Auth0</p>
        </header>

        <section className="profile-details">
          <div className="detail-item">
            <div className="detail-label">
              <User size={16} /> <span>Full Name</span>
            </div>
            <div className="detail-content">{user.name}</div>
          </div>

          <div className="detail-item">
            <div className="detail-label">
              <Mail size={16} /> <span>Email Address</span>
            </div>
            <div className="detail-content">{user.email}</div>
          </div>

          <div className="security-status-box">
            <ShieldCheck size={20} className="blue-glow" />
            <p>Your data is protected by Chaotic Media Encryption protocols.</p>
          </div>
          
          <button className="account-action-btn">
             Account Settings <ExternalLink size={14} />
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProfileSettings;