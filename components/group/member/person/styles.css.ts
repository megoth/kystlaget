import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles.css';

export const personStyle = style({
  display: "flex",
  gap: "0.5em",
  alignItems: "center",
})

export const imageStyle = style({
  borderRadius: "50%",
})

export const nameStyle = style({
  font: vars.font.body,
  fontWeight: vars.fontWeight.body.bold,
})
