import { Outlet } from "react-router-dom";
import BlogNav from "../components/BlogNav";
import LilFooter from "../components/LilFooter";
import MainSection from "../components/MainSection";

export default function MainPage() {
  return (
    <>
      <MainSection />
      <div className="w-full h-full bg-blue" />
      <BlogNav />
      <Outlet/>
      <div className="h-[64px]" />
      <LilFooter />
    </>
  );
}
