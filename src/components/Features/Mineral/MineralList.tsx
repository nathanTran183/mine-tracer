import useMineralContext from '@/hooks/use-mineral-context';
import MineralCard from './MineralCard';

const MineralList = () => {
  const { minerals } = useMineralContext();

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {minerals.map((mineral) => {
        return (
          <MineralCard
            key={mineral.id}
            id={mineral.id}
            name={mineral.name}
            total_amount={mineral.total_amount}
            symbol={mineral.symbol}
          />
        );
      })}
    </div>
  );
};

export default MineralList;
