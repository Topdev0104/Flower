export default function FlowerSupply({ isConnected, currentSupply }) {
  if (isConnected === false) {
    return (
      <p className="uppercase text-xl text-center">
        Please Change network to the Mainnet
      </p>
    );
  }

  return (
    <p className="text-xl">
      {currentSupply ? parseInt(Number(currentSupply), 10) : 0} / 8888
    </p>
  );
}
