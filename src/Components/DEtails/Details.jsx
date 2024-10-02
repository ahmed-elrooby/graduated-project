"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
export const metadata = {
  title: "Details Page | Construction",
  description: "Generated by create next app",
};
const Details = () => {
  return <>
  <div>
    <div className='w-[95%] my-[100px] py-[50px] mx-auto'>
    <motion.h1
    initial={{ scale: 0.5 }}
    transition={{
      duration: 1.3,
      type: "tween",
    }}
    whileInView={{
      scale: 1,
    }}
    
    className="mb-[50px] text-start relative after:content-[''] after:absolute after:top-[-5px] after:left-0 after:w-[100px] after:bg-[--main-color] after:h-[4px] after:rounded-lg text-3xl  text-[--main-color] font-bold">Product Details: Price & Quality Information
    </motion.h1>
        <div className='flex flex-col items-center justify-around md:flex-row'>
        <motion.div
        initial={{ scale: 0.5 }}
        transition={{
          duration: 1.3,
          type: "tween",
        }}
        whileInView={{
          scale: 1,
        }}
        className="shadow-lg rounded-xl group bg-[#00838f44] cursor-pointer p-4">
            <form
            
            
            className="flex group-hover:translate-y-[-20px] duration-[0.6s] group-hover:bg-[--main-color] group-hover:text-white transition-all flex-col items-center mx-auto  py-4 px-5 rounded-xl   bg-white ">
            <div className="transition-all shadow-lg duration-[0.6s] hover:bg-[#54585B]  bg-[--main-color] p-4 rounded-xl">
                <Image
                                  className="h-[150px]"

                  src={require("../../Images/OIP (2).jpg")}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-4 ">
                <h1 className="text-[22px] transition-all group-hover:text-white  text-[--main-color] font-bold">
                  House
                </h1>
                <ul>
                <li className="text-[#54585B]  transition-all group-hover:text-white capitalize text-[18px]">
                  costs:120,000${" "}
                </li>
                <li className="text-[#54585B] transition-all group-hover:text-white  capitalize text-[18px]">
                  publish in :yy-mm-hh
                </li>
                </ul>
                
                <input
                  type="submit"
                  className="border shadow-lg border-[--main-color] font-bold text-[22px] capitalize px-5 py-2 text-white bg-[--main-color] cursor-pointer transition-all hover:bg-[#54585B] rounded-full"
                  value="Edit"
                />
              </div>
            </form>
          </motion.div>
        <motion.div
        initial={{ scale: 0.5 }}
        transition={{
          duration: 1.3,
          type: "tween",
        }}
        whileInView={{
          scale: 1,
        }}

        className="flex justify-center">
    <table className='bg-[#fafafa] border-collapse border-spacing-0 rounded-t-[12px] rounded-s-[12px] overflow-hidden shadow-2xl'>
        <tr>
            <th>#</th>
            <th>properites</th>
            <th>value</th>
        </tr>
        <tr>
            <td>1</td>
            <td>good</td>
            <td>22$</td>
        </tr>
          <tr>
            <td>2</td>
            <td>good</td>
            <td>22$</td>
        </tr>
          <tr>
            <td>3</td>
            <td>good</td>
            <td>22$</td>
        </tr>
          <tr>
            <td>4</td>
            <td>good</td>
            <td>22$</td>
        </tr>
          <tr>
            <td>5</td>
            <td>good</td>
            <td>22$</td>
        </tr>
          <tr>
            <td>6</td>
            <td>good</td>
            <td>22$</td>
        </tr>
    </table>
</motion.div>
        </div>
    </div>
  </div>
  </>
}

export default Details