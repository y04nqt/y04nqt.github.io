import { useState } from 'react';
import Button from "../components/Button";
import ButtonHolder from "../components/ButtonHolder";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Popover, Typography } from "@mui/material";
import { openLink, redirect } from '../helpers';

export default function MainPage() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const openPopover = Boolean(anchorEl);

  return (
    <div
      className="
        absolute top-[5%] left-[5%] right-[5%] bottom-[5%]
        flex flex-col justify-center items-center
      "
    >
      <Popover
        className="w-1/2"
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Typography
          variant="h6"
          className="p-8"
        >
          I created this entire project without ever opening a web browser during development (+ it's styled). Impressed? Checkout my about me app.
        </Typography>
      </Popover>

      <Typography
        variant="h1"
        aria-owns={openPopover ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={() => setAnchorEl(null)}
      >
        Aaron Krueger
      </Typography>
      <Typography
        variant="h4"
      >
        Senior Software Engineer
      </Typography>
      <ButtonHolder
        className='flex space-between justify-center mx-auto flex-wrap mt-8'
      >
        <Button
          text="About Me"
          startIcon={<InfoIcon />}
          onClick={() => redirect('/about-me')}
          className="my-4 mx-4"
          variant="outlined"
          color="inherit"
        />
        <Button
          text="LinkedIn"
          startIcon={<LinkedInIcon />}
          onClick={() => openLink("https://www.linkedin.com/in/aaron-krueger-s117")}
          className="my-4 mx-4"
          variant="outlined"
          color="inherit"
        />
        <Button
          text="SoundCloud"
          startIcon={<LibraryMusicIcon />}
          onClick={() => openLink("https://www.soundcloud.com/mag_landrace")}
          className="my-4 mx-4"
          variant="outlined"
          color="inherit"
        />
      </ButtonHolder>
    </div>
  )
}
