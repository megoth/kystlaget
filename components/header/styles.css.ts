import { style } from "@vanilla-extract/css";
import { vars } from "../styles.css";

export const headerHeight = 130;

export const headerStyle = style({
  // alignItems: "center",
  background: vars.color.base,
  color: vars.color.text,
  display: "block",
  fontSize: vars.fontSize.pageTitle,
  fontFamily: vars.font.title,
  // display: "flex",
  // gap: "1em",
  // height: headerHeight,
  margin: "1rem 0",
  padding: 0,
  // justifyContent: "space-between",
});

export const headerChildStyle = style({
  flexGrow: 0,
  selectors: {
    "&:first-child": {
      flexGrow: 1,
    }
  }
})

