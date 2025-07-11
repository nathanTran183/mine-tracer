'use client';

import { Mineral } from '@/types/mineral';
import { MineralsContext as MineralContextType } from '@/types/minerals-context';
import { createContext, useState } from 'react';

const MineralsContext = createContext<MineralContextType>({
  minerals: [],
  fetchMinerals: async () => {},
});

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [minerals, setMinerals] = useState<Mineral[]>([]);

  const fetchMinerals = async () => {
    const res = await fetch('http://www.localhost:3001/minerals');
    if (res.ok) {
      const mineral = await res.json();
      setMinerals(mineral);
    }
  };

  const valueShared = {
    minerals,
    fetchMinerals,
  };

  return (
    <MineralsContext.Provider value={valueShared}>
      {children}
    </MineralsContext.Provider>
  );
};

export { MineralsContext };
export default Provider;
