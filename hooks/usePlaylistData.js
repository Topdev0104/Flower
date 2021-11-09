import { useState } from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import radioTagList from "../utils/radioTagList";

function usePlaylistData(playerMode, query) {
  const [podcastTitle, setPodcastTitle] = useState();

  const { data: meditation, error: meditationErr } = useSWR(
    () => (playerMode === "meditation" ? "/api/meditation" : null),
    fetcher,{
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.status === 404) return
    
        // Never retry for a specific key.
        // if (key === '/api/user') return
    
        // Only retry up to 10 times.
        if (retryCount >= 10) return
    
        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000)
      }
    }
  );
  const { data: podcasts, error: podcastsErr } = useSWR(
    () => (playerMode === "podcast" ? "/api/listen-api/currated-list" : null),
    fetcher
  );
  const { data: episodes, error: episodesErr } = useSWR(
    () =>
      playerMode === "podcast" ? `/api/listen-api/podcasts/${query?.id}` : null,
    fetcher
  );
  const { data: stations, error: stationsErr } = useSWR(
    () =>
      playerMode === "radio" ? `/api/radio/stations/tags/${query?.tag}` : null,
    fetcher
  );

  if (query) {
    if (playerMode === "podcast") {
      return {
        playlist: episodes,
        isLoading: !episodesErr && !episodes,
        isError: episodesErr,
        title: query?.title,
        author: query?.author,
      };
    } else if (playerMode === "radio") {
      return {
        playlist: stations,
        isLoading: !stationsErr && !stations,
        isError: stationsErr,
        title: query?.title,
      };
    }
  }
  
  if (playerMode === "meditation") {
    console.log(meditation);
    console.log(meditationErr);
    return {
      playlist: meditation,
      isLoading: !meditationErr && !meditation,
      error: meditationErr,
      title: "Meditation playlist",
    };
  } else if (playerMode === "podcast") {
    return {
      playlist: podcasts?.podcasts,
      isLoading: !podcastsErr && !podcasts,
      isError: podcastsErr,
      title: podcasts?.title,
    };
  }

  return {
    playlist: radioTagList,
    isLoading: !radioTagList,
    title: "Radio stations categories",
  };
}

export default usePlaylistData;
