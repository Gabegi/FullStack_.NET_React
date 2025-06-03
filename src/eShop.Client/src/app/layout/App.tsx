import Catalog from "../../features/catalog/Catalog";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Navbar from "./Navbar";

function App() {
  const darkMode = true;
  const palleteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: { default: palleteType === "light" ? "#121212" : "#eaeaea" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradent(circle, #1e3aBa, #111B27"
            : "radial-gradent(circle, #baecf9, #f09ff",
        }}
      >
        {" "}
        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Catalog />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
