import Hero from "@/components/home/Hero";
import Showcase from "@/components/home/Showcase";
import SelectBy from "@/components/home/SelectBy";
import Ruler from "@/components/home/Ruler";
import Collection from "@/components/home/Collection";
import CarBy from "@/components/home/CarBy";
import StayInTouch from "@/components/home/StayInTouch";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <SelectBy />
      <Ruler />
      <Collection />
      <CarBy />
      <StayInTouch />
    </>
  );
}
