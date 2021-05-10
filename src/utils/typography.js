import Typography from "typography"
import "../styles/global.css"

const typography = new Typography({
    baseFontSize: `18px`,
    baseLineHeight: 1,
    headerFontFamily: [
        "Montserrat"
    ],
    bodyFontFamily: ["Montserrat"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;