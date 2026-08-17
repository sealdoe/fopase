import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutEduka } from "@/components/home/AboutEduka";
import { CountersBar } from "@/components/home/CountersBar";
import { CoursesGrid } from "@/components/home/CoursesGrid";
import { VideoSection } from "@/components/home/VideoSection";
import { TeamSection } from "@/components/home/TeamSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { GalerieSection } from "@/components/home/GalerieSection";
import { OfferBanner } from "@/components/home/OfferBanner";
import { EventsSection } from "@/components/home/EventsSection";
import { EnrollSkills } from "@/components/home/EnrollSkills";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { AlumniSection } from "@/components/home/AlumniSection";
import { PartenairesSection } from "@/components/home/PartenairesSection";
import { CtaBanner } from "@/components/CtaBanner";
import { HomeSidebar } from "@/components/HomeSidebar";
import { RentreeBanner } from "@/components/home/RentreeBanner";

const title = "FOPASE — Institut supérieur de formation professionnelle au Bénin";
const description =
  "FOPASE forme des professionnels prêts pour l'emploi : licences, masters et formations professionnelles en finance, management, commerce, RH, technologies et sciences au Bénin.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollegeOrUniversity",
          name: "FOPASE",
          description,
          address: { "@type": "PostalAddress", addressCountry: "BJ", addressLocality: "Cotonou" },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <h1 className="sr-only">FOPASE — Institut supérieur de formation professionnelle au Bénin</h1>

      {/* Hero pleine largeur */}
      <HeroSection />

      {/* Bandeau rentrée 2026-2027 */}
      <RentreeBanner />

      {/* Layout principal : contenu + sidebar */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex gap-8 py-8 lg:gap-12">

          {/* Colonne principale */}
          <div className="min-w-0 flex-1">
            <AboutEduka />
            <CountersBar />
            <CoursesGrid />
            <VideoSection />
            <TeamSection />
            <WhyChooseSection />
            <GalerieSection />
            <OfferBanner />
            <EventsSection />
            <EnrollSkills />
            <DepartmentsSection />
            <AlumniSection />
            <PartenairesSection />
          </div>

          {/* Sidebar vertical */}
          <div className="hidden w-64 shrink-0 xl:block">
            <div className="sticky top-40">
              <HomeSidebar />
            </div>
          </div>

        </div>
      </div>

      <CtaBanner />
    </>
  );
}
