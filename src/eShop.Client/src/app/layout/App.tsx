import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const darkMode = true;
  const palleteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: { default: palleteType === "light" ? "#eaeaea" : "#121212" },
    },
  });

  useEffect(() => {
    fetch("https://localhost:7004/api/Products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        quantityInStock: 100,
        description: "test",
        pictureUrl: "https://picsum.photo/200",
        type: "test",
        brand: "test",
      },
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 14 }}>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
