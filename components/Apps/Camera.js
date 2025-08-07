import { useState, useRef } from 'react';
import { ArrowLeft, Camera as CameraIcon, RotateCcw } from 'lucide-react';

export default function CameraApp({ goBack }) {
  const [photos, setPhotos] = useState([]);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const videoRef = useRef(null);

  const takePhoto = () => {
    // In a real app, we'd capture from the camera stream
    const newPhoto = {
      id: photos.length + 1,
      url: `https://picsum.photos/300/400?random=${photos.length + 1}`,
      timestamp: new Date()
    };
    setPhotos([newPhoto, ...photos]);
  };

  const toggleCamera = () => {
    setIsFrontCamera(!isFrontCamera);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <button onClick={goBack}>
          <ArrowLeft className="w-6 h-6 text-gray-900" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Camera</h2>
        <button onClick={toggleCamera}>
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center bg-black">
        {/* Camera View */}
        <div className="relative w-full h-3/5 bg-gray-800 flex items-center justify-center">
          <div className="text-white text-center">
            <CameraIcon className="w-16 h-16 mx-auto mb-2" />
            <p>{isFrontCamera ? 'Front Camera' : 'Back Camera'}</p>
          </div>
        </div>
        
        {/* Camera Controls */}
        <div className="w-full p-6 flex justify-center">
          <button 
            onClick={takePhoto}
            className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white"></div>
          </button>
        </div>
        
        {/* Photo Preview */}
        <div className="w-full p-4 border-t">
          <h3 className="font-bold mb-2">Recent Photos</h3>
          <div className="flex space-x-2 overflow-x-auto">
            {photos.slice(0, 5).map(photo => (
              <img 
                key={photo.id} 
                src={photo.url} 
                alt="Captured" 
                className="w-16 h-16 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}