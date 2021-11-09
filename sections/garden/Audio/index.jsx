import { useEffect, useState } from "react";

import Player from "../../../components/GardenPage/Player";
import usePlaylistData from "../../../hooks/usePlaylistData";

/**
 * @todo: Optimize players and use only one
 */
function GardenAudioSection({ playerMode }) {
  const [playlistMode, setPlaylistMode] = useState("category");
  const [query, setQuery] = useState();

  let { playlist, isLoading, isError, title } = usePlaylistData(
    playerMode,
    query
  );

  useEffect(() => {
    setPlaylistMode(playerMode === "meditation" ? "track" : "category");
    setQuery(null);
  }, [playerMode]);

  if (isError) {
    isLoading = true;
  }
  console.log(isError);

  return (
    <Player
      handlePlaylistModeChange={setPlaylistMode}
      handleQueryChange={setQuery}
      playerMode={playerMode}
      playlist={playlist}
      playlistLoading={isLoading}
      playlistMode={playlistMode}
      title={title}
    />
  );
}

export default GardenAudioSection;
