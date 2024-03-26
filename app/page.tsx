import React, { Suspense } from "react";
import BackgroundVid from "@/components/BackgroundVid";
import DiamondBorder from "@/components/DiamondBorder";

const Feature = React.lazy(() => import("@/components/Feature"));
const Pricing = React.lazy(() => import("@/components/Pricing"));

export default function Home() {
  return (
    <>
      <BackgroundVid />
      <DiamondBorder />
      <Feature />
      <Pricing />
    </>
  );
}
