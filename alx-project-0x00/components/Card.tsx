import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/images/house.png"
import STAR_IMAGE from "@/public/assets/images/star.png"
import React from "react"
import Pill from "./Pill"

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image className="rounded-lg" src={HOUSE_IMAGE} width={378.56} height={299.37} alt="house image" />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="font-medium text-[17px] text-[#929292]">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" width={21} height={21} />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bed SVG path */}
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bath SVG path */}
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Guest SVG path */}
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">2-4</p>
          </div>
        </div>
        <p className="text-[22px] font-semibold">$2,450<span className="text-[14px] text-[#787878]">/n</span></p>
      </div>
    </div>
  )
}

export default Card
