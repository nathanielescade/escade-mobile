import { ArrowLeft } from 'lucide-react';

function Settings({ goBack }) {
  const settings = [
    { id: 'wifi', name: 'Wi-Fi', value: 'EscadeMobile 5G' },
    { id: 'bluetooth', name: 'Bluetooth', value: 'On' },
    { id: 'display', name: 'Display & Brightness', value: '' },
    { id: 'sound', name: 'Sound & Haptics', value: '' },
    { id: 'battery', name: 'Battery', value: '85%' },
    { id: 'privacy', name: 'Privacy & Security', value: '' },
    { id: 'about', name: 'About', value: 'EscadeMobile OS 1.0' },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center">
        <button onClick={goBack} className="mr-2">
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Settings</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 text-gray-900">General</h3>
          <div className="space-y-2">
            {settings.map((setting) => (
              <div 
                key={setting.id} 
                className="p-3 bg-white rounded-lg flex justify-between items-center"
              >
                <span>{setting.name}</span>
                {setting.value && (
                  <span className="text-gray-500 text-sm">{setting.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;