import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string[];
  content: string;
  linkUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, linkUrl }) => {
  return (
    <div className="w-60 bg-gradient-to-l from-slate-100 to-slate-400 text-slate-600 border-2 border-black grid grid-cols-2 justify-center p-4 gap-4 rounded-lg shadow-lg shadow-black">
      <div className="col-span-2 text-lg flex justify-center text-center font-bold capitalize rounded-md">
        {title[0]}<br/>{title[1]}
      </div>
      <div className="col-span-2 flex justify-center text-center rounded-md text-wrap">
        {content}
      </div>
      <div className="col-span-2  flex justify-center">
        <Link href={linkUrl}>
          <div className="rounded-md bg-slate-300 hover:bg-slate-600 hover:text-slate-200 flex justify-center duration-300 p-2 block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
