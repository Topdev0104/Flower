import BaseFlower from '../../../components/GardenPage/BaseFlower'
import { useState, useEffect } from "react";


function GardenFlowerBedSection({tokenID, background}) {
  return (
    <div className="w-full align-bottom text-white text-2xl text-center flex justify-start space-x-3">
      <BaseFlower left={-5} right={1} top={2} imgID={tokenID[0]!= undefined? tokenID[0] : null} background={background}/>
      <BaseFlower left={+2} right={1} top={-0.5} imgID={tokenID[1] != undefined? tokenID[1] : null} background={background}/>
      <BaseFlower left={-5} right={1} top={1} imgID={tokenID[2]!= undefined? tokenID[2] : null} background={background}/>
      {/* <BaseFlower />
      <BaseFlower /> */}
    </div>
  );
}

export default GardenFlowerBedSection;
