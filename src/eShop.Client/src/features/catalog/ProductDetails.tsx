import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import {
  Divider,
  Grid2,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    fetch("https://localhost:5001/api/products/${id}")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Grid2 container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid2 size={6}>
        <img
          src={product?.pictureUrl}
          alt={product?.name ?? "product image"}
          style={{ width: "100%" }}
        />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{}}>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Grid2>
    </Grid2>
  );
}
