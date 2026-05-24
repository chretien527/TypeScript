export class RateLimiter {
  private tokens: number;
  private lastRefill: number;

  constructor(
    private capacity: number,
    private refillRatePerSec: number
  ) {
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  private refill() {
    const now = Date.now();
    const seconds = (now - this.lastRefill) / 1000;

    const refill = seconds * this.refillRatePerSec;

    this.tokens = Math.min(this.capacity, this.tokens + refill);
    this.lastRefill = now;
  }

  tryConsume(): boolean {
    this.refill();

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }

    return false;
  }
}