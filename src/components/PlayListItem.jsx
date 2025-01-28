const PlayListItem = ({ title, artist, length }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-800">{title}</span>
        <span className="text-xs text-gray-500">{artist}</span>
      </div>
      <span className="text-sm text-gray-600">{length}</span>
    </div>
  );
};

export default PlayListItem;