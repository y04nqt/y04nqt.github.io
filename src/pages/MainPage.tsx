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
        className="w-3/4 pointer-events-none"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
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
          If you mention the word sleuth in the subject line, <br/>I'll do my best to contact you back.
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
        style={{filter: 'invert(1)', mixBlendMode: 'overlay'}}
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
          variant="text"
          color="inherit"
          style={{filter: 'invert(1)', mixBlendMode: 'difference'}}
        />
        <span className='mx-2'></span>
        <Button
          text="LinkedIn"
          startIcon={<LinkedInIcon />}
          onClick={() => openLink("https://www.linkedin.com/in/aaron-krueger-s117")}
          variant="text"
          color="inherit"
        />
        <span className='mx-2'></span>
        <Button
          text="SoundCloud"
          startIcon={<LibraryMusicIcon />}
          onClick={() => openLink("https://www.soundcloud.com/mag_landrace")}
          variant="text"
          color="inherit"
        />
      </ButtonHolder>
    </div>
  )
}
