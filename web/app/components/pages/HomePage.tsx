"use client";

import React from 'react';
import ProfileSection from '../organisms/ProfileSection';
import BackgroundImage from '../atoms/BackgroundImage';
import MainLayout from '../templates/MainLayout';

const HomePage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <ProfileSection />
        <BackgroundImage src="https://picsum.photos/2000" />
      </MainLayout>
    </>
  );
};

export default HomePage;