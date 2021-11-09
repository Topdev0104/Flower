function SendButtonContent({ currentSupply, isConnected, totalSupply }) {
  if (!isConnected) {
    return <>Wallet is not connected</>;
  }

  if (totalSupply - currentSupply - 30 === 0) {
    return <>Sale is not active</>;
  }

  return <>Buy</>;
}

export default SendButtonContent;
