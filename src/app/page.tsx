import Image from "next/image";
import HeroPage from "./components/HeroPage";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100">      
      <HeroPage />
    </div>
  );
}
