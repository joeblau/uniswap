import { v2prices } from "../contracts/v2-uniswap";
import { v3prices } from "../contracts/v3-uniswap";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		
		// get prices from both v2 and v3 using Promise.all
		const [v2Prices, v3Prices] = await Promise.all([v2prices(["1"]), v3prices(["1"])]);

		// combine the prices into one array
		const prices = [...v2Prices, ...v3Prices];
		return Response.json(prices);
	},
} satisfies ExportedHandler<Env>;
