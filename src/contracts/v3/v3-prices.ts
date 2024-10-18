
export async function v3prices(addresses: string[]): Promise<Price[]> {
    const prices = await Promise.all(
      addresses.map(async (address) => {
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