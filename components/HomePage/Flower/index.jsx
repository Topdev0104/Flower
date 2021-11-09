import styles from "../../../styles/Flower.module.scss";

const generateLeafs = (numOfLeafs) => {
  const leafsArray = [];

  for (let i = 0; i < numOfLeafs; i++) {
    leafsArray.push(i);
  }

  return leafsArray;
};

function Flower() {
  const leafs = generateLeafs(60);

  return (
    <div className={styles.flower}>
      {leafs.map((leaf) => (
        <div className={styles.leaf} key={leaf} />
      ))}
    </div>
  );
}

export default Flower;
