
import dbConnect from "@/lib/mongoose";
import Menu from "./components/home/Menu";
import Hero from "./components/home/Hero";
import HeroSlider from "@/models/HeroSlider";


async function getHeroData() {
  try {
    await dbConnect();
    const slides = await HeroSlider.find({}).lean();
    return JSON.parse(JSON.stringify(slides));
  } catch (error) {
    console.error("Error fetching hero slides:", error);
    return [];
  }
}
export default async function Home() {
  const slides = await getHeroData();
  return (
    <>
      <Hero slides={slides} />
      <Menu />
    </>
  );
}