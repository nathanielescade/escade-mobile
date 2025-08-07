import { 
  MessageCircle, 
  Camera, 
  Settings, 
  Phone, 
  Mail, 
  Music, 
  Calendar, 
  Calculator,
  MapPin,
  Image,
  Video
} from 'lucide-react';

export default function HomeScreen({ openApp }) {
  const apps = [
    { id: 'messages', name: 'Messages', icon: MessageCircle, color: 'bg-blue-500' },
    { id: 'camera', name: 'Camera', icon: Camera, color: 'bg-purple-500' },
    { id: 'settings', name: 'Settings', icon: Settings, color: 'bg-gray-500' },
    { id: 'phone', name: 'Phone', icon: Phone, color: 'bg-green-500' },
    { id: 'mail', name: 'Mail', icon: Mail, color: 'bg-red-500' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-pink-500' },
    { id: 'calendar', name: 'Calendar', icon: Calendar, color: 'bg-yellow-500' },
    { id: 'calculator', name: 'Calculator', icon: Calculator, color: 'bg-indigo-500' },
    { id: 'maps', name: 'Maps', icon: MapPin, color: 'bg-teal-500' },
    { id: 'photos', name: 'Photos', icon: Image, color: 'bg-orange-500' },
    { id: 'videos', name: 'Videos', icon: Video, color: 'bg-cyan-500' },
  ];

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_5px_#00ffff]">EscadeMobile</h1>
        <p className="text-cyan-200 text-sm">Welcome to your phone!</p>
      </div>
      
      <div className="flex-1 grid grid-cols-3 gap-4 overflow-y-auto">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => openApp(app.id)}
            className="flex flex-col items-center p-2 rounded-xl bg-black/30 backdrop-blur-sm border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_#00ffff]"
          >
            <div className={`${app.color} w-12 h-12 rounded-full flex items-center justify-center mb-1 shadow-[0_0_10px_${app.color.replace('bg-', '#')}]`}>
              <app.icon className="text-white w-6 h-6" />
            </div>
            <span className="text-xs text-cyan-200">{app.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}