import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/hero-section/highlighted-projects";
import { KnownTechs } from "./components/pages/home/hero-section/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs/>
      <HighlightedProjects/>
    </>
  )
}
