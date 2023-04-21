import { useEffect, useState } from "react";
import Button from "../components/Button";
import ButtonHolder from "../components/ButtonHolder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoIcon from "@mui/icons-material/Info";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import GitHubIcon from "@mui/icons-material/GitHub";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Popover, Typography } from "@mui/material";
import { openLink, redirect } from "../helpers";

const MainSection = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isHidden, setIsHidden] = useState("");
  const openPopover = Boolean(anchorEl);

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
    <div
      className="
        absolute top-[5%] left-[5%] right-[5%] bottom-[5%]
        flex flex-col justify-center items-center
        appear-in
      "
    >
      <Popover
        className="w-3/4 pointer-events-none"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Typography variant="h6" className="p-8">
          Hey! Thanks for visiting my site! I really appreciate you checking this out. If you let me know what you think, that would help me improve or know you like this concept site.
        </Typography>
      </Popover>

      <Typography variant="h1">Aaron Krueger</Typography>
      <Typography variant="h2" className="invertAndOverlay !text-4xl">
        Senior Software Engineer
      </Typography>
      <ButtonHolder className="flex flex-wrap justify-center mx-auto mt-8 space-between">
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
      <Typography
        className="!mt-4"
        aria-owns={openPopover ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      >
        <InfoIcon />
      </Typography>
      <div className={`${isHidden} tranisition-opacity duration-300 absolute bottom-[24px] come-up`}>
        <Typography className={`abe-blinkin`}>
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
