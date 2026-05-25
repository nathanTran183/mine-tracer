import useMineralContext from '@/hooks/use-mineral-context';
import MineralCard from './MineralCard';

const MineralList = () => {
  const { minerals } = useMineralContext();

  return (
    <div className="container mx-auto px-4">
      <h2 className='text-2xl font-bold mb-6'>Explore by Mineral Type</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
      
    </div>
  );
};

export default MineralList;
