import SendButtonContent from "./SendButtonContent";

function BloomForm({
  bloomValue,
  currentSupply,
  isConnected,
  requestChangeBloomValue,
  totalSupply,
}) {
  return (
    <form className="flex flex-col items-center my-5">
      <div className="flex justify-evenly items-center my-5">
        <p className="font-bold text-3xl uppercase">Bloom</p>
        <input
          className="mx-4 text-3xl w-14 pl-1"
          min="1"
          onChange={requestChangeBloomValue}
          type="number"
          value={bloomValue}
        />
        <p className="text-3xl">🌼 🌸 🌻 🌹</p>
      </div>
      <button
        className="mb-2 py-3 px-4 font-medium capitalize text-center text-white bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-500 rounded hover:bg-green-600 transition duration-300"
        disabled={!isConnected || totalSupply - currentSupply - 30 === 0}
        type="submit"
      >
        <SendButtonContent
          currentSupply={currentSupply}
          isConnected={isConnected}
          totalSupply={totalSupply}
        />
      </button>
      <p>
        You wil receive{" "}
        {`${bloomValue.toString()} NFT${bloomValue > 1 ? "s" : ""}`} in Open Sea
        in high-resolution, and will be linked to yours in the collection to
        see.
      </p>
    </form>
  );
}

export default BloomForm;
