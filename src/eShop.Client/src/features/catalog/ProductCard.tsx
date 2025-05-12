import { Card, CardContent, CardMedia } from "@mui/material";
import { Product } from "../../app/models/product";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <Card elevation={3}>
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent></CardContent>
    </Card>
  );
}
