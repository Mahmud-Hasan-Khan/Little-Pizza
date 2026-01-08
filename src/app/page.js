import Hero from "./components/home/Hero";
import Menu from "./components/home/Menu";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Hero />
      <Menu className="pt-[64px]" />
    </div>
  );
}