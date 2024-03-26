export default function DiamondBorder() {
  return (
    <>
      <div className="h-1 w-full bg-background" />
      <div className="h-1.5 w-full bg-[#c4b166]" />
      <div className="h-1 w-full bg-background" />
      <div className="h-10 w-full bg-[#38363c]">
        <div className="h-10 w-full bg-[url('/img/svg/diamond.svg')]" />
      </div>
      <div className="h-1 w-full bg-background" />
      <div className="h-1.5 w-full bg-[#c09c2f]" />
      <div className="h-1 w-full bg-background" />
    </>
  );
}
