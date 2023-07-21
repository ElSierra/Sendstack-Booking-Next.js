'use client'
import Lottie from "lottie-react";
import animationData  from '../assets/animate.json'

export default function Empty() {
  return (
    <Lottie
      style={{ height: "500px" }}
      animationData={animationData}
      size={5}
    />
  );
}
