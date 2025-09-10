import Image, { StaticImageData } from 'next/image';
import SearchBar from '../features/SearchBar/SearchBar';

const Banner = (props: { url: StaticImageData; alt: string }) => {
  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
      <Image className="object-cover" fill src={props.url} alt={props.alt} />
      <div className="relative w-2/3 items-end justify-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
