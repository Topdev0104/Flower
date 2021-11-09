import { useState } from "react";
import ChangeContentButton from "../../../components/GardenPage/ChangeContentButton";
import styles from "../../../styles/Garden.module.scss";

function ContentControls({ requestButtonClick }) {
  const [currentlySelected, setCurrentlySelected] = useState("radio");

  const getDirection = (buttonName) =>
    currentlySelected === buttonName ? "left" : "right";

  const handleClick = (buttonName) => () => {
    requestButtonClick(buttonName);
    setCurrentlySelected(buttonName);
  };

  return (
    <div className={styles["content-controls"]}>
      <ChangeContentButton
        direction={getDirection("radio")}
        onClick={handleClick("radio")}
      >
        Radio
      </ChangeContentButton>
      {/* <ChangeContentButton
        direction={getDirection("podcast")}
        onClick={handleClick("podcast")}
      >
        Podcasts
      </ChangeContentButton> */}
      <ChangeContentButton
        direction={getDirection("meditation")}
        onClick={handleClick("meditation")}
      >
        Guided <br /> meditations
      </ChangeContentButton>
    </div>
  );
}

export default ContentControls;
