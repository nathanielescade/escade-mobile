export default function PhoneFrame({ children }) {
  return (
    <div className="relative w-80 h-[700px] bg-gray-900 rounded-[40px] p-4 shadow-2xl border-8 border-gray-800">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-[32px] flex items-center justify-between px-6 text-white text-xs">
        <span>9:41</span>
        <div className="flex space-x-1">
          <SignalIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>
      
      {/* Screen Content */}
      <div className="mt-8 h-full bg-gray-100 rounded-[32px] overflow-hidden">
        {children}
      </div>
      
      {/* Home Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-gray-600 rounded-full"></div>
      </div>
    </div>
  );
}

// Icon Components
function SignalIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1v0a1 1 0 110 2v0a1 1 0 01-1-1z" clipRule="evenodd"/>
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
    </svg>
  );
}