import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileMain from '@/components/profile/ProfileMain';
import NavbarMenu from '@/Components/common/Navbar';

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <NavbarMenu/>
            <ProfileHeader />
            <ProfileMain />
        </div>
    );
}