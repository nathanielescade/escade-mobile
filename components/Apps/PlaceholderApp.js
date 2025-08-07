import { ArrowLeft } from 'lucide-react';

export default function PlaceholderApp({ appName, goBack }) {
  return (
    <div className="flex flex-col h-full bg-black/50 backdrop-blur-sm">
      <div className="p-4 border-b border-cyan-500/30 flex items-center">
        <button onClick={goBack} className="mr-2 text-cyan-300">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-cyan-300">{appName}</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_#00ffff]">
            <span className="text-white text-xl font-bold">{appName.charAt(0)}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-cyan-300">{appName}</h3>
          <p className="text-cyan-400">This app is under development</p>
          <p className="text-cyan-500 text-sm mt-4">EscadeMobile OS v1.0</p>
        </div>
      </div>
    </div>
  );
}