import { Button as MUIButton } from "@mui/material";

import { createIdName } from "../helpers/";

interface IButtonProps {
  text?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => any;
}

export default function Button({
  text = 'Press Me', className, startIcon, endIcon, ...props
}: IButtonProps) {
  return (
    <MUIButton
      {...props}
      className={className}
      data-testid={
        `${createIdName(text)}Button`
      }
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </MUIButton>
  )
}