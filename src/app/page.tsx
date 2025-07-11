'use client';

import useMineralContext from '@/hooks/use-mineral-context';
import { useEffect } from 'react';

const Home = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { minerals, fetchMinerals } = useMineralContext();

  useEffect(() => {
    fetchMinerals();
    console.log(minerals);
  }, []);

  return (
    <div className="grid items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <div>{children}</div>
    </div>
  );
};

export default Home;
