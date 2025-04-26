import { MarketResponse } from "@/type/TAPI";
import core from "../core/core";

export const getMarketProducts = async (): Promise<MarketResponse> => {
  try {
    const response = await core.get(`markets/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching market products:", error);
    throw error;
  }
};
