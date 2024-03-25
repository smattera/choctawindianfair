import BackgroundVid from "@/components/BackgroundVid";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <BackgroundVid />
      <div
        className="h-24 w-full bg-center bg-repeat-x dark:hidden"
        style={{ backgroundImage: "url('/img/svg/Diamond-black.svg')" }}
      />
      <div
        className="hidden h-24 w-full bg-center bg-repeat-x dark:block"
        style={{ backgroundImage: "url('/img/svg/Diamond-white.svg')" }}
      />
      <Feature />
      <Pricing />
    </>
  );
}
