import { style } from '@vanilla-extract/css';
import { vars } from '../styles.css';

export const triggerStyle = style({
  alignItems: "center",
  background: "transparent",
  border: 0,
  color: vars.color.text,
  cursor: "pointer",
  fontSize: 12,
  outline: 0,
  padding: 0,
  textTransform: "uppercase",
  display: "flex",
  "@media": {
    "screen and (min-width: 640px)": {
      display: "none",
    },
  },
});

export const triggerTextStyle = style({
  marginRight: "0.5rem",
});
