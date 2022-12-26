import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from '../styles.css';

export const menuStyle = style({})

globalStyle(`${menuStyle} ul`, {
  display: "flex",
  gap: "1em",
})

globalStyle(`${menuStyle} a`, {
  color: vars.color.text,
  fontFamily: vars.font.title,
})
