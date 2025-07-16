import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/images/house.png"
import STAR_IMAGE from "@/public/assets/images/star.png"
import React from "react"
import Pill from "./Pill"

interface CardProps {
  title?: string;
  location?: string;
  price?: number;
  rating?: number;
  beds?: number;
  baths?: number;
  guests?: string;
}

const Card: React.FC<CardProps> = ({
  title = "Villa Arrecife Beach House",
  location = "Sideman, Bali, Indonesia",
  price = 2450,
  rating = 4.76,
  beds = 4,
  baths = 2,
  guests = "2-4"
}) => {
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
          <h3 className="font-semibold text-[22px]">{title}</h3>
          <p className="font-medium text-[17px] text-[#929292]">{location}</p>
        </div>
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" width={21} height={21} />
          <p className="font-medium text-[17px] ml-2">{rating}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
              {/* Bed SVG */}
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">{beds}</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {/* Bath SVG */}
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">{baths}</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {/* Guest SVG */}
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">{guests}</p>
          </div>
        </div>
        <p className="text-[22px] font-semibold">${price}<span className="text-[14px] text-[#787878]">/n</span></p>
      </div>
    </div>
  )
}

export default Card
