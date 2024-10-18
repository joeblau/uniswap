
// create a function called v2prices that takes in an array of contract addresses and returns an array of prices


export async function v2prices(addresses: string[]):  Promise<Price[]> {
  const prices = await Promise.all(
    addresses.flatMap(async (address) => {
    //   const contract = await getContract(address);
    //   const price = await contract.getPrice();
      const price: Price = {
        address,
        price: 10,
      };
      return price;
    })
  );
  
  return prices;
}