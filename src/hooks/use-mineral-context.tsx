import { useContext } from 'react';
import { MineralsContext } from '@/contexts/minerals';

const useMineralContext = () => {
  return useContext(MineralsContext);
};

export default useMineralContext;
