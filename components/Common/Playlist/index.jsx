import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import PlaylistItem from "./PlaylistItem";

import styles from "../../../styles/Playlist.module.scss";

function Playlist({
  isLoading,
  title,
  tracks,
  requestBackButtonClick,
  requestPlaylistItemClick,
  showBackButton,
}) {
  if (isLoading) {
    return (
      <div className={styles.playlist}>
        <div className="h-full w-full flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin text-7xl mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.playlist}>
      <div className="flex items-center px-2 mb-2">
        {showBackButton && (
          <button className="mr-2" onClick={requestBackButtonClick}>
            <IoArrowBack />
          </button>
        )}
        <h1 className="text-bold truncate">{title}</h1>
      </div>
      <ul>
        {tracks!=undefined? tracks.map((track) => (
          <li key={track.id}>
            <PlaylistItem
              requestButtonClick={requestPlaylistItemClick}
              track={track}
            />
          </li>
        )) : null}
      </ul>
    </div>
  );
}

export default Playlist;
