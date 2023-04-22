import HowThisWasMade from "../components/HowThisWasMade";
import LilFooter from "../components/LilFooter";
import MainSection from "../components/MainSection";
import QuotesSection from "../components/QuotesSection";
import WorkSection from "../components/WorkSection";

export default function MainPage() {
  return (
    <>
      <MainSection />
      <div className="w-full h-full bg-blue" />
      <QuotesSection />
      <WorkSection />
      <figure className="w-1/2 px-8 mx-auto mt-10 bg-white bg-opacity-50 rounded-xl">
        <embed src="https://wakatime.com/share/@y04nqt/325a5df3-3e3f-449f-bfd2-8e9a7de920a2.svg"></embed>
      </figure>
      <HowThisWasMade />
      <div className="h-[64px]" />
      <LilFooter />
    </>
  );
}
