import { createTheme } from "@mui/material/styles";
import { palette } from "./palette"; // Таны өөрийн палитр

export const theme = createTheme({
  spacing: 4,
  palette,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});
