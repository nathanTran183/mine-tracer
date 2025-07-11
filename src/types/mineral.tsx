export interface Mineral {
  id: number;
  name: string;
  symbol: string;
  total_amount: number;
}

export interface MinedMineral extends Mineral {
  mined: number;
}
