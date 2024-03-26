export default function DiamondBorder() {
  return (
    <>
      <div
        className="h-24 w-full bg-center bg-repeat-x dark:hidden"
        style={{ backgroundImage: "url('/img/svg/Diamond-light.svg')" }}
      />
      {/* <div
        className="hidden h-24 w-full bg-center bg-repeat-x dark:block"
        style={{ backgroundImage: "url('/img/svg/Diamond-dark.svg')" }}
      /> */}
      <div className="hidden dark:block">
        <div className="h-1 w-full bg-black" />
        <div className="h-1.5 w-full bg-[#c4b166]" />
        <div className="h-1 w-full bg-black" />
        <div className="h-10 w-full bg-[#38363c]">
          <div className="h-10 w-full bg-[url('/img/svg/diamond-dark.svg')]" />
        </div>
        <div className="h-1 w-full bg-black" />
        <div className="h-1.5 w-full bg-[#c09c2f]" />
        <div className="h-1 w-full bg-black" />
      </div>
    </>
  );
}
