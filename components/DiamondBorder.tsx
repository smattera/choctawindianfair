export default function DiamondBorder() {
  return (
    <>
      <div
        className="h-24 w-full bg-center bg-repeat-x dark:hidden"
        style={{ backgroundImage: "url('/img/svg/Diamond-light.svg')" }}
      />
      <div
        className="hidden h-24 w-full bg-center bg-repeat-x dark:block"
        style={{ backgroundImage: "url('/img/svg/Diamond-dark.svg')" }}
      />
    </>
  );
}
