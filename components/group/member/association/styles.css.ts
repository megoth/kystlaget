import { style } from "@vanilla-extract/css";
import { vars } from '../../../styles.css';

export const imageStyle = style({
  width: "100%",
});

export const nameStyle = style({
  font: vars.font.body,
  fontWeight: vars.fontWeight.body.bold,
})
