'use client';

import Banner from '@/components/ui/banner';
import useMineralContext from '@/hooks/use-mineral-context';
import MineralsImage from '../../public/Minerals.jpg';
import { useEffect } from 'react';
import MineralList from '@/components/features/Mineral/MineralList';

const Home = () => {
  const { fetchMinerals } = useMineralContext();

  useEffect(() => {
    fetchMinerals();
  }, []);

  return (
    <div className="grid items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <Banner url={MineralsImage} alt="Banner background" />
      <MineralList />
    </div>
  );
};

export default Home;
