import { createSlice } from "@reduxjs/toolkit";
import * as echarts from "echarts";

const generateSparkline = (trend) => {
  const data = [];
  let value = 1000 + Math.random() * 1000;
  for (let i = 0; i < 30; i++) {
    if (trend === "up") {
      value = value + (Math.random() * 100 - 30);
    } else if (trend === "down") {
      value = value - (Math.random() * 100 - 30);
    } else {
      value = value + (Math.random() * 100 - 50);
    }
    value = Math.max(value, 500);
    data.push(value);
  }
  return data;
};

const initialState = {
  assets: [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      logo: "/assets/crypto-icons/btc.svg",
      price: 93759.48,
      priceChange1h: 0.43,
      priceChange24h: 0.93,
      priceChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      volume24hInCrypto: 467810,
      circulatingSupply: 19.85,
      maxSupply: 21,
      sparkline: generateSparkline("up"),
      isFavorite: false,
      color: "orange",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      logo: "/assets/crypto-icons/eth.svg",
      price: 1802.46,
      priceChange1h: 0.6,
      priceChange24h: 3.21,
      priceChange7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      volume24hInCrypto: 13050000,
      circulatingSupply: 120.71,
      maxSupply: null,
      sparkline: generateSparkline("up"),
      isFavorite: false,
      color: "indigo",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      logo: "/assets/crypto-icons/usdt.svg",
      price: 1.0,
      priceChange1h: -0.0,
      priceChange24h: -0.0,
      priceChange7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92268882007,
      volume24hInCrypto: 92268882007,
      circulatingSupply: 145.27,
      maxSupply: null,
      sparkline: generateSparkline("flat"),
      isFavorite: false,
      color: "green",
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      logo: "/assets/crypto-icons/xrp.svg",
      price: 2.22,
      priceChange1h: 0.46,
      priceChange24h: 0.54,
      priceChange7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      volume24hInCrypto: 2300000000,
      circulatingSupply: 58.39,
      maxSupply: 100,
      sparkline: generateSparkline("up"),
      isFavorite: false,
      color: "blue",
    },
    {
      id: 5,
      name: "BNB",
      symbol: "BNB",
      logo: "/assets/crypto-icons/bnb.svg",
      price: 606.65,
      priceChange1h: 0.09,
      priceChange24h: -1.2,
      priceChange7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      volume24hInCrypto: 3080000,
      circulatingSupply: 140.89,
      maxSupply: 168,
      sparkline: generateSparkline("up"),
      isFavorite: false,
      color: "yellow",
    },
    {
      id: 6,
      name: "Solana",
      symbol: "SOL",
      logo: "/assets/crypto-icons/sol.svg",
      price: 151.51,
      priceChange1h: 0.53,
      priceChange24h: 1.26,
      priceChange7d: 14.74,
      marketCap: 78381958631,
      volume24h: 4881674486,
      volume24hInCrypto: 32250000,
      circulatingSupply: 517.31,
      maxSupply: null,
      sparkline: generateSparkline("up"),
      isFavorite: false,
      color: "purple",
    },
  ],
  lastUpdated: new Date().toISOString(),
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssetPrice: (state, action) => {
      const { id, price } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.price = price;
      }
    },
    updateAssetMetrics: (state, action) => {
      const { id, metrics } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        Object.assign(asset, metrics);
      }
    },
    toggleFavorite: (state, action) => {
      const { id } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.isFavorite = !asset.isFavorite;
      }
    },
    updateLastUpdated: (state) => {
      state.lastUpdated = new Date().toISOString();
    },
  },
});

export const {
  updateAssetPrice,
  updateAssetMetrics,
  toggleFavorite,
  updateLastUpdated,
} = cryptoSlice.actions;

export const selectAllAssets = (state) => state.crypto.assets;
export const selectLastUpdated = (state) => state.crypto.lastUpdated;

export default cryptoSlice.reducer;
