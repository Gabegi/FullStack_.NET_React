import { Button } from "@mui/material";
import { Product } from "../../app/models/product";

type Props = { products: Product[]; addProduct: () => void };

export default function Catalog({ products, addProduct }: Props) {
  return (
    <div>
      <Button variant="contained" onClick={addProduct}>
        Add Product by clicking
      </Button>
    </div>
  );
}
