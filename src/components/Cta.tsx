import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
   
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium text-white  lg:text-3xl">
            Ready to enter the Alliance?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Make a clean and sustainable code
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdXI4L66HKSQwCwzAwUxK1FlRAeY67jslNbTLfsYjF7fJyzkg/viewform?usp=sharing"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Become a Member
          </a>
        </div>
      </div>
    
  );
};
