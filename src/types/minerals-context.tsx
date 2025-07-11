import { Mineral } from './mineral';

export interface MineralsContext {
  minerals: Mineral[];
  fetchMinerals: () => Promise<void>;
}
