import { useEffect, useState } from "react";
import Button from "../components/Button";
import ButtonHolder from "../components/ButtonHolder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import GitHubIcon from "@mui/icons-material/GitHub";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Typography } from "@mui/material";
import { openLink, redirect } from "../helpers";

const MainSection = () => {
  const [isHidden, setIsHidden] = useState("");

  useEffect(() => {
    const hideScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
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
      <ButtonHolder className="flex flex-wrap justify-center mx-auto mt-8 space-between appear-in-delayed-extended">
        <Button
          text="About Me"
          startIcon={<SentimentVerySatisfiedIcon />}
          onClick={() => redirect("/about-me")}
          variant="text"
          color="inherit"
          className="invertAndDifference"
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
        />
        <span className="mx-2"></span>
        <Button
          text="GitHub"
          startIcon={<GitHubIcon />}
          onClick={() => openLink("https://github.com/y04nqt")}
          variant="text"
          color="inherit"
        />
      </ButtonHolder>
      <div
        className={`${isHidden} tranisition-opacity duration-300 absolute come-up`}
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
          className={`abe-blinkin hover:cursor-pointer`}
        >
          <DoubleArrowIcon
            style={{ transform: "rotate(90deg)" }}
            className="align-sub"
          />
        </Typography>
      </div>
    </div>
  );
};

export default MainSection;
