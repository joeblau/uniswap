import { v2liquidity } from "../contracts/v2/v2-liquidity";
import { v2prices } from "../contracts/v2/v2-prices";
import { v3prices } from "../contracts/v3/v3-prices";
import { v3liquidity } from "../contracts/v3/v3-liquidity";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		switch (true) {
			case request.url.includes("prices"):
				const [v2Prices, v3Prices] = await Promise.all([v2prices(["1"]), v3prices(["1"])]);
				const prices = [...v2Prices, ...v3Prices];
				return Response.json(prices);
			case request.url.includes("liquidity"):
				const [v2Liquidity, v3Liquidity] = await Promise.all([v2liquidity(["1"]), v3liquidity(["1"])]);
				const liquidity = [...v2Liquidity, ...v3Liquidity];
				return Response.json(liquidity);
			default:
				return Response.json({ error: "Invalid request" }, { status: 400 });
		}
	},
} satisfies ExportedHandler<Env>;
