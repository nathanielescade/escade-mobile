import { ArrowLeft } from 'lucide-react';

export default function PlaceholderApp({ appName, goBack }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center text-gray-900">
        <button onClick={goBack} className="mr-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold">{appName}</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-xl font-bold">{appName.charAt(0)}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{appName}</h3>
          <p className="text-gray-600">This app is under development</p>
          <p className="text-gray-500 text-sm mt-4">EscadeMobile OS v1.0</p>
        </div>
      </div>
    </div>
  );
}