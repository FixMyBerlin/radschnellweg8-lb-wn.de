export const LogoBar: React.FC = () => {
  return (
    <div className="z-[1] w-full py-4 px-2 sm:p-8">
      <span className="sr-only">Projektpartner:</span>
      <div className="overflow-scoll flex flex-wrap gap-x-4 sm:gap-x-8">
        <img
          className="h-[15px] w-auto md:h-[25px] lg:h-[40px]"
          src="/src/assets/layout/logo-bar/rems-murr-kreis-logo.jpg"
          alt="Rems-Ruhr-Kreis"
        />
        <img
          className="h-[15px] w-auto md:h-[25px] lg:h-[40px]"
          src="/src/assets/layout/logo-bar/landkreis-ludwigsburg-logo.svg"
          alt="Landkreis Ludwigsburg"
        />
        <img
          className="h-[15px] w-auto md:h-[25px] lg:h-[40px]"
          src="/src/assets/layout/logo-bar/ludwigsburg-logo.svg"
          alt="Ludwigsburg"
        />
        <img
          className="h-[15px] w-auto md:h-[25px] lg:h-[40px]"
          src="/src/assets/layout/logo-bar/stadt-waiblingen-logo.svg"
          alt="Stadt Waiblingen"
        />
        <img
          className="h-[15px] w-auto md:h-[25px] lg:h-[40px]"
          src="/src/assets/layout/logo-bar/remseck-logo.svg"
          alt="Remseck"
        />
      </div>
    </div>
  )
}
