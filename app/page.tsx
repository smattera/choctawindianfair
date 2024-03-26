import React, { Suspense } from "react";
import BackgroundVid from "@/components/BackgroundVid";

const Feature = React.lazy(() => import("@/components/Feature"));
const Pricing = React.lazy(() => import("@/components/Pricing"));

export default function Home() {
  return (
    <>
      <BackgroundVid />
      <Feature />
      <Pricing />
    </>
  );
}
