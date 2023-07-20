'use client'
import Lottie from "lottie-react";
import animationData from './animate.json'


export default function CompleteBooking() {
  return (
    <Lottie
    style={{ height: "500px" }}
    animationData={animationData}
    size={5}
  />
  )
}
