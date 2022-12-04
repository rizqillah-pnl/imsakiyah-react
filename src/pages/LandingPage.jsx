import React from 'react'
import MainLayout from '../Layout/MainLayout';
// import Step from '../Layout/Step';
import LandingHeader from '../Layout/LandingHeader';

export default function LandingPage() {
  document.title = 'RZQ x YEEDEV STUDIO';

  return (
    <MainLayout active='beranda'>
      <LandingHeader></LandingHeader>
    </MainLayout>
  );
}

