import Typography from "typography"
import SternGrove from "typography-theme-stern-grove"

SternGrove.bodyColor = "#dfdad7";
SternGrove.headerColor = "#dfdad7";

const typography = new Typography(SternGrove)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
