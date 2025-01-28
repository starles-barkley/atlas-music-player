const CoverArt = () => {
  return (
    <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
      <img
        src="/src/assets/placeholder.png"
        alt="Cover Art"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CoverArt;
