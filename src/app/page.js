import Hero from "./components/home/Hero";
import Menu from "./components/home/Menu";
import Testimonials from "./components/home/Testimonials";
import Gallery from "./components/home/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Menu />
      <Testimonials />
      <Gallery />
    </div>
  );
}