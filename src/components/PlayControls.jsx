import { Play, Rewind, FastForward, Shuffle, Speed } from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <Speed className="w-6 h-6 text-gray-700" />
      </button>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <Rewind className="w-6 h-6 text-gray-700" />
      </button>
      <button className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
        <Play className="w-6 h-6" />
      </button>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <FastForward className="w-6 h-6 text-gray-700" />
      </button>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <Shuffle className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default PlayControls;
