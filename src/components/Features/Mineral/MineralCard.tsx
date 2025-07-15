import { Mineral } from '@/types/mineral';
import Link from 'next/link';

const MineralCard = (props: Mineral) => {
  return (
    <Link href="/">
      <div className="bg-gray-900 w-48 h-32 p-4 break-all m-2">
        <h1 className="underline capitalize align-text-top">{props.name}</h1>
      </div>
    </Link>
  );
};

export default MineralCard;
