import Image from "next/image";
import React from "react";
import panaverselogo from "../../../public/vercel.svg";

export default function About() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center flex-col gap-5">
        <h1 className="font-bold text-4xl ">About Page</h1>

        <button className="bg-black text-white grow-0 border-2 border-black order-last rounded-md px-4 py-2 hover:bg-white hover:text-black">
          Learn More
        </button>

        <Image src={panaverselogo} alt="vercel logo" width={100} height={100} />
      </div>
    </>
  );
}
