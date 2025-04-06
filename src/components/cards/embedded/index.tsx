import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface ECardProps {
  title: string[];
  content: string;
  src: string;
}

const ECard: React.FC<ECardProps> = ({ title, content, src }) => {
  return (
    <div className="w-[400px] m-4 bg-gradient-to-l from-slate-800 to-slate-600 text-slate-100 border-2 border-black grid grid-cols-2 justify-center p-4  gap-4 rounded-lg shadow-lg shadow-black">
      <div className="col-span-2 text-lg flex justify-center text-center font-bold capitalize rounded-md">
        {title[0]}<br/>{title[1]}
      </div>
      <div className="col-span-2  flex justify-center items-start ">
            <div className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200  h-20 w-20 p-2 ">
            <Image src={src} alt={"project"} width={100} height={100}/>
            </div>
        
      </div>
      <div className="col-span-2 flex justify-center text-center rounded-md text-wrap">
        {content}
      </div>
    </div>
  );
};

export default ECard;
