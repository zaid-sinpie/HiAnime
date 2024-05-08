import React from "react";
import ContentBlock from "./ContentBlock";
import Comments from "./Comments";

const Content = () => {
  return (
    <>
    <article className="w-full flex justify-around items-start mt-[5rem] mb-[10rem] max-sm:flex-col max-sm:mt-4 max-sm:gap-8 max-sm:mb-2 md:justify-around md:mb-4">
      <div className="w-[50%] bg-red h-auto flex flex-col gap-4 max-sm:w-full md:w-full ">
        <h1 className="font-bold text-stone-200 w-full text-3xl">
          The best site to watch anime for free!
        </h1>
        <ContentBlock />
      </div>
      <div className="w-[30%] flex flex-col gap-4 max-sm:w-full max-sm:px-[1rem] md:w-[90%] items-start md:items-center">
        <h1 className="font-bold text-stone-200 w-full text-3xl md:w-auto">
          Trending Posts
        </h1>
        <Comments />
      </div>
    </article>
      <p className="font-semibold text-stone-500 w-[90%] text-justify text-[14px] my-[5rem] ml-10 max-sm:w-[70%] max-sm:mt-8 max-sm:px-[5px] md:my-[2rem]">
        This dummy project is developed by zaid for education purpose only
      </p>
    </>
  );
};

export default Content;
