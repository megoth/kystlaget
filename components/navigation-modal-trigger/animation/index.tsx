import React from "react";
import cn from "classnames";
import { menuButtonStyle } from "./styles.css";

interface Props {
  open: boolean;
}

export default function NavigationModalTriggerAnimation({ open }: Props) {
  return (
    <div className={cn(menuButtonStyle, { open })}>
      <span />
      <span />
      <span />
    </div>
  );
}
