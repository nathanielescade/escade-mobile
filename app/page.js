import { useState } from 'react';
import PhoneFrame from '../components/PhoneFrame';
import HomeScreen from '../components/HomeScreen';
import Messages from '../components/Apps/Messages';
import CameraApp from '../components/Apps/Camera';
import Settings from '../components/Apps/Settings';
import PlaceholderApp from '../components/Apps/PlaceholderApp';

export default function Home() {
  const [currentApp, setCurrentApp] = useState('home');

  const openApp = (appId) => {
    setCurrentApp(appId);
  };

  const goBack = () => {
    setCurrentApp('home');
  };

  const renderCurrentApp = () => {
    switch (currentApp) {
      case 'messages':
        return <Messages goBack={goBack} />;
      case 'camera':
        return <CameraApp goBack={goBack} />;
      case 'settings':
        return <Settings goBack={goBack} />;
      case 'phone':
        return <PlaceholderApp appName="Phone" goBack={goBack} />;
      case 'mail':
        return <PlaceholderApp appName="Mail" goBack={goBack} />;
      case 'music':
        return <PlaceholderApp appName="Music" goBack={goBack} />;
      case 'calendar':
        return <PlaceholderApp appName="Calendar" goBack={goBack} />;
      case 'calculator':
        return <PlaceholderApp appName="Calculator" goBack={goBack} />;
      case 'maps':
        return <PlaceholderApp appName="Maps" goBack={goBack} />;
      case 'photos':
        return <PlaceholderApp appName="Photos" goBack={goBack} />;
      case 'videos':
        return <PlaceholderApp appName="Videos" goBack={goBack} />;
      default:
        return <HomeScreen openApp={openApp} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-purple-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <PhoneFrame>
          {renderCurrentApp()}
        </PhoneFrame>
      </div>
    </div>
  );
}