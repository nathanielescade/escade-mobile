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
    <div className="flex flex-col h-full bg-black/50 backdrop-blur-sm">
      <div className="p-4 border-b border-cyan-500/30 flex items-center">
        <button onClick={goBack} className="mr-2 text-cyan-300">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-cyan-300">Settings</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-lg font-bold mb-4 text-cyan-300">General</h3>
          <div className="space-y-2">
            {settings.map((setting) => (
              <div 
                key={setting.id} 
                className="p-3 bg-black/30 rounded-lg flex justify-between items-center border border-cyan-500/30"
              >
                <span className="text-cyan-200">{setting.name}</span>
                {setting.value && (
                  <span className="text-cyan-400 text-sm">{setting.value}</span>
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