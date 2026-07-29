import Image from "next/image";

export default function HomePage() {
  return (
    <div className="home-splash-only min-h-screen bg-white">
      <Image
        src="/home-landing.png"
        alt="NBBS coming soon landing page"
        width={1536}
        height={864}
        priority
        className="h-screen w-screen object-contain"
      />
    </div>
  );
}
