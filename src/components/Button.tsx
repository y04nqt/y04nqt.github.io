import { Button as MUIButton } from "@mui/material";

import { createIdName } from "../helpers/";

interface IButtonProps {
  text?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => any;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
}

export default function Button({
  text = 'Press Me', className, startIcon, endIcon, variant, color, ...props
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
      variant={variant}
      color={color}
    >
      {text}
    </MUIButton>
  )
}