import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

import logo from "../../public/logo.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 justify-center items-center  sm:grid-col-1">
            <div className="my-4 ">
              <Image src={logo} alt="Logo" height={200} width={300} />
            </div>
            <div>
              <h1 className="text-6xl text-blue-600">Welcome to Panaverse</h1>
              <h2 className="text-3xl font-semibold text-black">
                A COmmunity of Web 3 and Metaverse Developers
              </h2>

              <button className="rounded-full border-2 border-blue bg-blue-900 text-white px-2 py-2 my-4 hover:bg-white hover:text-blue-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
