import React from 'react';
import Logo from './Logo';
import Title from './Title';
import Description from './Description';
import Tags from './Tags';

const Card = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[266px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px]">
        <div className="flex h-[100%] w-[100%]">
          <Logo />
          <div className="h-[100%] w-[755px] flex flex-col gap-[8px]">
            <Title />
        
            <div className="flex w-[454px] h-[27px] gap-[8px] items-center">
             
              <div className=" font-normal text-[16px] text-[#7C8493]">
                Young Men Christians Association
              </div>
            
            </div>
            <Description />
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
