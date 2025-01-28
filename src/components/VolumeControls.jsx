const VolumeControls = () => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="volume" className="sr-only">
        Volume
      </label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default VolumeControls;
