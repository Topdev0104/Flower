import { useWeb3React } from "@web3-react/core";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Garden.module.scss";

import Layout from "../components/Common/Layout";
import RainToggleButton from "../components/GardenPage/RainToggleButton";
import ChangeBackground from "../components/GardenPage/ChangeBackground";
import useEagerConnect from "../hooks/web3/useEagerConnect";
import useTokenBalance from "../hooks/web3/useTokenBalance";
import useTokensID from "../hooks/web3/useTokensID";
import GardenFlowerBedSection from "../sections/garden/FlowerBed";
import ContentControls from "../sections/garden/ContentControls";

const GardenAudioSection = dynamic(() => import("../sections/garden/Audio"));
const RainOverlay = dynamic(() =>
  import("../components/GardenPage/RainOverlay")
);

const shuffleFlowers = (flowersArray) => {
  const optionsArray = [...flowersArray];
  let index = optionsArray.length;

  while (index) {
    const i = Math.floor(Math.random() * index--);
    [optionsArray[index], optionsArray[i]] = [
      optionsArray[i],
      optionsArray[index],
    ];
  }

  return optionsArray.slice(0, 3);
};

export default function Garden() {
  const { account, library, chainId } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  const [playerMode, setPlayerMode] = useState("radio");
  const [isRaining, setIsRaining] = useState(false);
  const [flowers, setFlower] = useState([]);
  const [selected, setSelected] = useState([]);
  const [shuffleToggle, setShuffleToggle] = useState(true);
  const [background, setBackground] = useState("garden");
  //***************************************//
  const [cell, setCell] = useState(false);
  const [name, setName] = useState("");
  const [seltree, setSeltree] = useState(0);
  const [selectedData, setSelectedData] = useState([]);
  const dropMenuRef = useRef(null);
  const option_data = [
    {
      src: "https://lh3.googleusercontent.com/ygyethoVHsce5fGppd9vFIXUAwp8AIQMwhPybsMF_c_SbjJZqXiyqru_mH3psyFuCjpwQQqF94isHXf4Oy5U57uDtPjBIRDzU-Z0yw=w528",
      name: "Wade Cooper",
      tokenID: 1,
    },
    {
      src: "https://lh3.googleusercontent.com/ygyethoVHsce5fGppd9vFIXUAwp8AIQMwhPybsMF_c_SbjJZqXiyqru_mH3psyFuCjpwQQqF94isHXf4Oy5U57uDtPjBIRDzU-Z0yw=w528",
      name: "Wade Cooper",
      tokenID: 2,
    },
    {
      src: "https://lh3.googleusercontent.com/ZbpB_4SOhFEZI83vt26oSThStUtMGF6ofro-8Gt3ZFJ4VGdSlBy4tAscLn2kkivskc4cVC8Dozvw-d_ZHvoVVJN1aWP5O-vFtKlYQw=w528",
      name: "Tangled Ragweed",
      tokenID: 3,
    },
    {
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Cooper",
      tokenID: 4,
    },
    {
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Cooper",
      tokenID: 5,
    },
    {
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Cooper",
      tokenID: 6,
    },
    {
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Cooper",
      tokenID: 7,
    },
    {
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Cooper",
      tokenID: 8,
    },
    {
      src: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Cooper",
      tokenID: 9,
    },
  ];
  //***************************************//

  // const { data : NumberOfTOken} = useTokenBalance(account, "0xee126216132B0FF09268657468B89eCCC4f8a6b8", false)
  //useTokenBalance should be able to get the the number of the token to use in the loop on useTokensID but idk how to pass it in a good way
  //so NumberOfTOken should be passed to useTokensID (that should use it in the loop of getTokens)
  const { data } = useTokensID(
    account,
    "0xee126216132B0FF09268657468B89eCCC4f8a6b8",
    false
  );

  const handleModeChange = (mode) => {
    setPlayerMode(mode);
  };

  useEffect(() => {
    data != undefined ? setFlower(data) : console.log(data);
  }, [data]);

  const setBackgroundMode = () => {
    background == 0
      ? setBackground(1)
      : background == 1
      ? setBackground(2)
      : setBackground(0);
  };

  useEffect(() => {
    let interval;

    if (shuffleToggle) {
      if (flowers.length > 0) {
        setSelected(shuffleFlowers(flowers));

        interval = setInterval(
          () => setSelected(shuffleFlowers(flowers)),
          30000
        );
      }
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [flowers, shuffleToggle]);
  //////
  const onClickItem = async (item) => {
    const data = {
      tree_index: seltree,
      src: item.src,
      tokenID: item.tokenID,
    };

    const flag = selectedData.filter(
      (item) => item?.tree_index === data.tree_index
    );
    if (flag.length > 0) {
      const tree_data = await selectedData.map((item) => {
        if (item.tree_index === data.tree_index) {
          return data;
        } else {
          return item;
        }
      });
      setSelectedData(tree_data);
    } else {
      let temp = selectedData;
      temp.push(data);
      setSelectedData(temp);
    }

    setCell(!cell);
  };

  ///
  const onClickPanel = async () => {
    setName("");
    setCell(true);
  };

  // if no data return loader, or error component
  return (
    <Layout
      title="Garden |"
      triedToEagerConnect={triedToEagerConnect}
      transparentNavBar
    >
      <main
        className={
          background == 0
            ? styles.garden
            : background == 1
            ? styles.garden1
            : styles.garden2
        }
      >
        {isRaining && <RainOverlay />}
        <div className="relative h-full max-w-full xl:mx-10 xl:pt-20 xl:pb-5 xl:px-36 flex flex-col justify-between md:justify-end items-center">
          <div className="justify-between w-full relative z-10 md:absolute sm:left-0 lg:left-5 2xl:left-20 top-20 xl:top-34 flex flex-col md:flex-row items-center md:items-start max-w-full">
            <div className="flex flex-row items-start md:flex-row items-start sm:flex-col items-start">
              <div className="flex flex-row items-start sm:flex-row md:flex-col items-center md:items-start max-w-full space-y-1">
                <RainToggleButton
                  isRaining={isRaining}
                  requestIsRaining={setIsRaining}
                  className="p-8"
                />
                <ChangeBackground onClick={setBackgroundMode} />
              </div>
              <GardenAudioSection playerMode={playerMode} />
            </div>

            <div className="mr-16">
              <div>
                <div className="mt-1 relative">
                  <div
                    className="flex flex-row justify-between relative w-full bg-white border border-gray-300 rounded-md shadow-sm text-left cursor-default sm:text-sm cursor-pointer"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    onClick={() => {
                      onClickPanel();
                    }}
                    ref={dropMenuRef}
                  >
                    <button
                      className="px-8 py-5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-indigo-500"
                      onClick={() => {
                        setSeltree(1);
                      }}
                    >
                      1
                    </button>
                    <button
                      className="px-8 py-5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-indigo-500"
                      onClick={() => {
                        setSeltree(2);
                      }}
                    >
                      2
                    </button>
                    <button
                      className="px-8 py-5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-indigo-500"
                      onClick={() => {
                        setSeltree(3);
                      }}
                    >
                      3
                    </button>
                  </div>
                  {cell ? (
                    <ul
                      className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-option-3"
                    >
                      <li
                        className="cursor-pointer text-gray-900 cursor-default select-none relative py-2 pl-3 pr-3"
                        id="listbox-option-0"
                        role="option"
                      >
                        <input
                          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Flower Name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        ></input>
                      </li>
                      {option_data
                        .filter((item) => {
                          return (
                            item.name
                              .toUpperCase()
                              .indexOf(name.toUpperCase()) > -1
                          );
                        })
                        .map((item, key) => {
                          return (
                            <li
                              className="cursor-pointer text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                              id="listbox-option-0"
                              role="option"
                              key={key + 1}
                              onClick={() => {
                                onClickItem(item);
                              }}
                            >
                              <div className="flex items-center">
                                <img
                                  src={item.src}
                                  alt=""
                                  className="flex-shrink-0 h-6 w-6 rounded-full"
                                />
                                <span className="font-normal ml-3 block truncate">
                                  {item.name}
                                </span>
                              </div>
                              {selectedData
                                .filter((item) => {
                                  return item?.tree_index === seltree;
                                })
                                .map((data, key) => {
                                  if (data?.tokenID === item.tokenID) {
                                    return (
                                      <span
                                        className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                        key={key + 1}
                                      >
                                        <svg
                                          className="h-5 w-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    );
                                  }
                                })}
                            </li>
                          );
                        })}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <ContentControls
            className="relative z-10"
            requestButtonClick={handleModeChange}
          />
          <GardenFlowerBedSection tokenID={selected} background={background} />
        </div>
      </main>
    </Layout>
  );
}
