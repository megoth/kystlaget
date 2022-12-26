import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../styles.css";
import { headerHeight } from "../header/styles.css";

export const modalStyle = style({
  backgroundColor: vars.color.base,
  display: "none",
  left: 0,
  position: "fixed",
  height: "calc(100vh - 125px)",
  top: headerHeight,
  width: "100%",
  zIndex: vars.zIndex.modal,

  selectors: {
    "&.open": {
      display: "block",
    },
  },
});

export const modalInnerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 2em",
  "@media": {
    "screen and (min-height: 400px)": {
      padding: "2em",
    },
    "screen and (min-height: 600px)": {
      display: "inherit",
    },
    "screen and (min-width: 640px)": {
      margin: "0 auto",
      padding: "2em 0 0",
      maxWidth: vars.pageWidth.medium,
    },
    "screen and (min-width: 900px)": {
      maxWidth: vars.pageWidth.large,
    },
  },
});

globalStyle(`${modalInnerStyle} ul`, {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  "@media": {
    "screen and (min-height: 400px)": {
      gap: "1.25rem",
    },
  },
});

globalStyle(`${modalInnerStyle} .main-menu`, {
  "@media": {
    "screen and (min-height: 400px)": {
      fontSize: 22,
      marginBottom: "3em",
    },
  },
});

globalStyle(`${modalInnerStyle} .main-menu ul`, {
  "@media": {
    "screen and (min-height: 600px)": {
      textAlign: "right",
    },
  },
});

globalStyle(`${modalInnerStyle} .sub-menu ul`, {
  textAlign: "right",
});
