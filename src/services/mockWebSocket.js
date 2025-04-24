import {
  updateAssetPrice,
  updateAssetMetrics,
} from "../features/crypto/cryptoSlice";

export class MockWebSocket {
  constructor(store) {
    this.store = store;
    this.interval = null;
  }

  connect() {
    this.interval = setInterval(() => {
      this.generateRandomUpdates();
    }, 1500);
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  generateRandomUpdates() {
    const { assets } = this.store.getState().crypto;

    assets.forEach((asset) => {
      // Random price change between -1% and +1%
      const priceChange = (Math.random() * 2 - 1) / 100;
      const newPrice = asset.price * (1 + priceChange);

      // Update price
      this.store.dispatch(
        updateAssetPrice({
          id: asset.id,
          price: parseFloat(newPrice.toFixed(2)),
        })
      );

      // Update other metrics occasionally
      if (Math.random() > 0.7) {
        const metrics = {
          priceChange1h: parseFloat((Math.random() * 2 - 1).toFixed(2)),
          priceChange24h: parseFloat((Math.random() * 4 - 2).toFixed(2)),
          priceChange7d: parseFloat((Math.random() * 10 - 5).toFixed(2)),
          volume24h: asset.volume24h * (1 + (Math.random() * 0.5 - 0.25)),
          volume24hInCrypto:
            asset.volume24hInCrypto * (1 + (Math.random() * 0.5 - 0.25)),
        };

        this.store.dispatch(
          updateAssetMetrics({
            id: asset.id,
            metrics,
          })
        );
      }
    });
  }
}
