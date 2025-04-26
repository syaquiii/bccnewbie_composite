import { MarketDetail, MarketResponse } from "@/type/TAPI";
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

export const getMarketDetail = async (
  id: string
): Promise<MarketDetail | null> => {
  try {
    const response = await core.get(`markets/${id}`);
    return response.data.data;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    throw error;
  }
};
