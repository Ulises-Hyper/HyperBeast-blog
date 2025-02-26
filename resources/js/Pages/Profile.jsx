import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileMain from '../components/profile/ProfileMain';

function Profile() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <ProfileHeader />
            <ProfileMain />
        </div>
    );
}

export default Profile;