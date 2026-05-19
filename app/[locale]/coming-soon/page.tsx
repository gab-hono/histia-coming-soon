import { useIntlayer } from "next-intlayer";
import MascotFR from "@/components/MascotFR";
import MascotEN from "@/components/MascotEN";
import type { LocalesValues } from "intlayer";

export default function ComingSoonPage({
  params,
}: {
  params: { locale: LocalesValues };
}) {
  const content = useIntlayer("coming-soon");
  const isFR = params.locale === "fr";

  return (
    <main className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#272149" }}>

      {/* Left content */}
      <div className="flex flex-col gap-6 pl-[281px] max-w-[640px]">

        {/* Badge */}
        <div className="flex items-center px-4 py-2 rounded-full w-fit"
          style={{ backgroundColor: "rgba(191, 185, 223, 0.1)" }}>
          <span className="text-xs font-medium tracking-wide"
            style={{ color: "#BFB9DF" }}>
            {content.badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-semibold leading-tight"
          style={{ color: "#A199D2", fontSize: "48px", lineHeight: "58px" }}>
          {content.title}
        </h1>

        {/* Description */}
        <div style={{ color: "#877EBC", fontSize: "24px", lineHeight: "32px", letterSpacing: "0.02em" }}>
          <p>
            {content.description1}{" "}
            <span className="font-semibold" style={{ color: "#E3E0F6" }}>
              {content.brandName}
            </span>{" "}
            {content.description2}
          </p>
        </div>

        {/* Link */}
        <div className="flex items-center gap-3 cursor-pointer">
          <span className="text-2xl font-semibold" style={{ color: "#E1C3FF" }}>→</span>
          <span className="font-semibold" style={{ color: "#E1C3FF", fontSize: "24px" }}>
            {content.linkText}
          </span>
        </div>
      </div>

      {/* Mascot */}
      <div className="absolute right-0 bottom-0">
        {isFR ? <MascotFR /> : <MascotEN />}
      </div>

    </main>
  );
}