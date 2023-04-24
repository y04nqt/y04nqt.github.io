import { useEffect, useState } from "react";
import Button from "../components/Button";
import ButtonHolder from "../components/ButtonHolder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import GitHubIcon from "@mui/icons-material/GitHub";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Typography } from "@mui/material";
import { openLink, redirect } from "../helpers";
import DownloadResumeAnchor from "./DownloadResumeAnchor";

const MainSection = () => {
  const [isHidden, setIsHidden] = useState("");

  useEffect(() => {
    const hideScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        if (isHidden === "") {
          setIsHidden("opacity-0");
        }
      } else {
        if (isHidden === "opacity-0") {
          setIsHidden("");
        }
      }
    });
    return window.removeEventListener("scroll", () => hideScroll);
  }, [setIsHidden, isHidden]);

  return (
    <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] flex flex-col justify-center items-center">
      <img
        src={
          "https://github.com/y04nqt/y04nqt.github.io/raw/main/public/dragonjaye.webp"
        }
        className="w-[209px] h-[192.25px] appear-in-delayed-extended invertAndOverlayHoverOnly transition duration-300"
        alt="DragonJaye Logo"
      />
      <Typography variant="h1" className="appear-in">
        Aaron Krueger
      </Typography>
      <Typography
        variant="h2"
        className="invertAndOverlay !text-4xl appear-in-delayed"
      >
        Senior Software Engineer
      </Typography>
      <ButtonHolder className="flex flex-wrap justify-center mx-auto my-4 space-between appear-in-delayed-extended">
        <Button
          text="About Me"
          startIcon={<SentimentVerySatisfiedIcon />}
          onClick={() => redirect("/about-me")}
          variant="text"
          color="inherit"
          className="rounded-xl invertAndDifference"
        />
        <span className="mx-2"></span>
        <Button
          text="LinkedIn"
          startIcon={<LinkedInIcon />}
          onClick={() =>
            openLink("https://www.linkedin.com/in/aaron-krueger-s117")
          }
          variant="text"
          color="inherit"
          className="rounded-xl"
        />
        <span className="mx-2"></span>
        <Button
          text="GitHub"
          startIcon={<GitHubIcon />}
          onClick={() => openLink("https://github.com/y04nqt")}
          variant="text"
          color="inherit"
          className="rounded-xl"
        />
      </ButtonHolder>
      <div className="appear-in-delayed-extended">
        <DownloadResumeAnchor
          className="px-4 py-2 text-xs font-bold text-white no-underline transition duration-300 bg-black border-2 border-solid shadow-xl bg-opacity-70 hover:bg-gray-700 hover:shadow-2xl hover:italic rounded-xl"
          text="Download Résumé"
        />
      </div>
      <div
        className={`${isHidden} tranisition-opacity duration-300 relative min-h-[50px] w-full block`}
      >
        <Typography
          role="button"
          tabIndex={!isHidden ? 0 : -1}
          aria-label="scroll to project section"
          onClick={() =>
            document
              .getElementById("project-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`hover:cursor-pointer absolute come-up left-1/4 right-1/4`}
        >
          <DoubleArrowIcon
            style={{ transform: "rotate(90deg)" }}
            className="align-sub abe-blinkin"
          />
        </Typography>
      </div>
    </div>
  );
};

export default MainSection;
