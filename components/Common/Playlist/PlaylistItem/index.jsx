const fallback = "/images/thumbnailPlaceholder.webp";

function PlaylistItem({ requestButtonClick, track }) {
  const handleButtonClick = () => {
    requestButtonClick(track.id);
  };

  return (
    <button
      className="flex items-center max-w-full md:max-w-lg overflow-hidden whitespace-nowrap overflow-ellipsis p-2 hover:bg-black hover:bg-opacity-20 rounded-md w-full"
      onClick={handleButtonClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={track.title || track.name}
        height="30"
        src={track.thumbnail || track.favicon || fallback}
        onError={(e) => {
          e.target.src = fallback;
        }}
        width="30"
      />
      <p className="ml-2 text-left flex-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {track.title || track.name}
      </p>
    </button>
  );
}

export default PlaylistItem;
