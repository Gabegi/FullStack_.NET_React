import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = { products: Product[]; addProduct: () => void };

export default function Catalog({ products, addProduct }: Props) {
  return (
    <div>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add Product by clicking
      </Button>
    </div>
  );
}
