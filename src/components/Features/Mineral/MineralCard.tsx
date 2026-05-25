import { Mineral } from '@/types/mineral';
import Link from 'next/link';

const MineralCard = (props: Mineral) => {
  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-800 h-32 p-4 break-all m-2">
      <Link className='grow' href={"/"}>
        <h1 className="underline capitalize align-text-top">{props.name}</h1>
      </Link>
      <h3>Total amount: {props.total_amount}</h3>
    </div>
  );
};

export default MineralCard;
