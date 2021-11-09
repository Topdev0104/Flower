import { useEffect, useState } from "react";

import Accordion from "../../Common/Accordion";
import AudioPlayer from "../../Common/AudioPlayer";
import Playlist from "../../Common/Playlist";

function Player({
  handlePlaylistModeChange,
  handleQueryChange,
  playerMode,
  playlist,
  playlistLoading,
  playlistMode,
  title,
}) {
  const [isAccordionActive, setIsAccordionActive] = useState(false);

  const [categoryTitle, setCategoryTitle] = useState();
  const [currentTrack, setCurrentTrack] = useState();
  const [nextTrack, setNextTrack] = useState();
  const [prevTrack, setPrevTrack] = useState();

  const toggleActive = () => {
    setIsAccordionActive(!isAccordionActive);
  };

  const handleBackButtonClick = () => {
    handleQueryChange(null);
    handlePlaylistModeChange("category");
  };

  const handlePlaylistItemClick = (id) => {
    if (playlistMode === "track") {
      setCurrentTrack(playlist.find((track) => track.id === id));
      setCategoryTitle(title);
    } else {
      handleQueryChange(playlist.find((track) => track.id === id));
      handlePlaylistModeChange("track");
    }
  };

  const handleNextTrack = () => {
    setCurrentTrack(nextTrack);
  };

  const handlePrevTrack = () => {
    setCurrentTrack(prevTrack);
  };

  useEffect(() => {
    setIsAccordionActive(true);
  }, [playerMode]);

  return (
    <div className="max-w-full md:max-w-lg px-5 md:px-0">
      <Accordion
        headerComponent={
          <AudioPlayer
            artwork={currentTrack?.thumbnail}
            audioPath={currentTrack?.audio}
            authorTitle={currentTrack?.author ?? categoryTitle}
            handleNextTrack={handleNextTrack}
            handlePrevTrack={handlePrevTrack}
            nextTrack={nextTrack}
            trackTitle={currentTrack?.title}
          />
        }
        isActive={isAccordionActive}
        toggleActive={toggleActive}
      >
        <Playlist
          isLoading={playlistLoading}
          title={title}
          tracks={playlist}
          requestBackButtonClick={handleBackButtonClick}
          requestPlaylistItemClick={handlePlaylistItemClick}
          showBackButton={
            playerMode !== "meditation" && playlistMode === "track"
          }
        />
      </Accordion>
    </div>
  );
}

export default Player;
