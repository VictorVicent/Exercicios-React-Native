import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfilePage from './src/pages/Dev';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfilePage />
    </SafeAreaView>
  );
}
