import React, { useRef } from "react";
import { IoPause, IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAudioPlayer } from "../../../hooks/useAudioPlayer";
import { calculateTime } from "../../../utils/calculateTime";

import styles from "../../../styles/AudioPlayer.module.scss";

const fallback = "/images/thumbnailPlaceholder.webp";

function AudioPlayer({
  artwork = "/images/thumbnailPlaceholder.webp",
  audioPath,
  authorTitle = "",
  handleNextTrack,
  handlePrevTrack,
  nextTrack,
  trackTitle = "Select track from the playlist ⇩",
  skipTo,
}) {
  const audioPlayer = useRef(); // set up reference for the audio component
  const progressBar = useRef(); // reference for the progress bar

  const {
    backThirty,
    changeAudioToPlayhead,
    changePlaybackSpeed,
    currentTime,
    duration,
    onEnded,
    forwardThirty,
    isLive,
    isPlaying,
    loading,
    onEmptied,
    onLoadedMetadata,
    onPlaying,
    skipToTime,
    speed,
    tapSpaceBar,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  const handleClickEvents = (event, method) => {
    event.preventDefault();
    event.stopPropagation();
    method();
  };

  const handleEnded = (event) => {
    onEnded(nextTrack, handleNextTrack);
  };

  return (
    <div className={styles.audioPlayer}>
      {/* audio element */}
      <audio
        autoPlay={true}
        ref={audioPlayer}
        src={audioPath}
        preload="metadata"
        onEmptied={onEmptied}
        onEnded={handleEnded}
        onLoadedMetadata={onLoadedMetadata}
        onPlaying={onPlaying}
        onWaiting={onEmptied}
      />

      {/* album cover */}
      {artwork && (
        <div className={styles.albumCover}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Episode Cover"
            height="60"
            onError={(e) => {
              e.target.src = fallback;
            }}
            src={artwork}
            width="60"
          />
        </div>
      )}

      {/* episode meta data */}
      <div className={styles.meta}>
        <div className={styles.metaTitles}>
          <h2>{trackTitle}</h2>
          <h3>{authorTitle}</h3>
        </div>
        {audioPath && loading && (
          <AiOutlineLoading3Quarters className=" absolute animate-spin ml-5 top-0 right-0" />
        )}
      </div>

      {/* play / pause */}
      <div className={styles.controls}>
        {/* back thirty */}
        <button
          aria-label="Back 30s"
          type="button"
          onClick={(event) => handleClickEvents(event, backThirty)}
          className={styles.forwardBackward}
          disabled={loading}
        >
          <IoPlayBack className="text-xl" />
        </button>
        <button
          aria-label="Toggle play/pause"
          type="button"
          className={styles.playPause}
          onClick={(event) => handleClickEvents(event, togglePlaying)}
          onKeyPress={tapSpaceBar}
          disabled={loading}
        >
          {isPlaying ? (
            <IoPause className="text-xl" />
          ) : (
            <IoPlay className="text-xl" />
          )}
        </button>
        {/* forward thirty */}
        <button
          aria-label="Forward 30s"
          type="button"
          onClick={(event) => handleClickEvents(event, forwardThirty)}
          className={styles.forwardBackward}
          disabled={loading}
        >
          <IoPlayForward className="text-xl" />
        </button>

        {isLive && (
          <div className={styles.live}>
            Live
            <span className="flex ml-1 h-3 w-3 relative justify-center items-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </div>
        )}

        <div className={isLive ? "hidden" : "flex items-center w-full"}>
          {/* current time */}
          <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div className={styles.progressBar}>
            <input
              aria-label="Seek current track"
              type="range"
              min="0"
              max="100"
              defaultValue={isLive ? "100" : "0"}
              ref={progressBar}
              onChange={(event) =>
                handleClickEvents(event, changeAudioToPlayhead)
              }
              onClick={(event) => handleClickEvents(event, () => {})}
            />
          </div>

          {/* duration */}
          <div className={styles.duration}>
            {duration ? calculateTime(duration) : "00:00"}
          </div>

          {/* playback speed */}
          <button
            type="button"
            className={styles.playbackSpeed}
            onClick={(event) => handleClickEvents(event, changePlaybackSpeed)}
          >
            {speed}X
          </button>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
