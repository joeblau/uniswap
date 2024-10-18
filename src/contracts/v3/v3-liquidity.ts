

export async function v3liquidity(addresses: string[]):  Promise<Liquidity[]> {
    const liquidity = await Promise.all(
      addresses.flatMap(async (address) => {
        const Liquidity: Liquidity = {
          address,
          a0: 10,
          a1: 10,
        };
        return Liquidity;
      })
    );
    
    return liquidity;
  }