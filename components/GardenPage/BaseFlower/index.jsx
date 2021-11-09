/* eslint-disable @next/next/no-img-element */

/*
const myLoader = ({ src, width, quality }) => {
  return `https://.com/${src}?w=${width}&q=${quality || 75}`
}
*/
function BaseFlower({ imgID, left, right, top, background }) {
  console.log(imgID);
  return (
    <div
      className="flex flex-col max-h-full "
      style={{
        overflow: "hidden",
        marginTop: `${top}%`,
        marginLeft: `${left}%`,
        marginRight: `${right}%`,
      }}
    >
      {imgID != undefined ? (
        <div style={{ overflow: "hidden", marginBottom: `-10%` }}>
          <img
            alt="Flower "
            src={`/images/flowers/1.png`}
            className="max-h-full"
            width={400}
            height={400}
            // layout="responsive"
            // sizes="50vw"
          />
        </div>
      ) : (
        <div
          style={{
            overflow: "hidden",
            marginBottom: `-10%`,
            width: "400px",
            height: "400px",
          }}
        ></div>
      )}

      <div style={{ overflow: "hidden" }}>
        <img
          alt="Base "
          src={
            background == 0
              ? "/images/flowerBase.png"
              : background == 1
              ? "/images/backgrounds/soilday.png"
              : "/images/backgrounds/soilnight1.png"
          }
          width={116}
          height={42}
          // layout="responsive"
          // sizes="10vw"
        />
      </div>
    </div>
  );
}

export default BaseFlower;
