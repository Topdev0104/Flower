import { useEffect, useRef } from "react";
import { BsCloudRainHeavyFill, BsMoonStarsFill } from "react-icons/bs";
import { useAudioPlayer } from "../../../hooks/useAudioPlayer";

function RainToggleButton({ requestIsRaining, isRaining }) {
  const audioPlayer = useRef();
  const audioPath = "/sounds/light-rain-loop.wav";

  const { lowerVolume, onPlaying, togglePlaying } = useAudioPlayer(audioPlayer);

  const handleIsRaining = () => {
    requestIsRaining(!isRaining);
    togglePlaying();
  };

  useEffect(() => {
    if (audioPlayer.current) {
      lowerVolume(0.4);
    }
  }, [audioPlayer, lowerVolume]);

  return (
    <div>
      <audio
        loop={true}
        ref={audioPlayer}
        src={audioPath}
        preload="metadata"
        onPlaying={onPlaying}
      />
      <button
        aria-label="Toggle rain effect"
        className="relative mr-4 p-4 text-white rounded-lg text-2xl"
        onClick={handleIsRaining}
      >
        <div className="absolute inset-0 rounded-lg backdrop-filter backdrop-blur-lg bg-gradient-to-r from-black to-gray-800 opacity-70"></div>
        <div className="relative">
          {isRaining ? <BsMoonStarsFill /> : <BsCloudRainHeavyFill />}
        </div>
      </button>
    </div>
  );
}

export default RainToggleButton;
