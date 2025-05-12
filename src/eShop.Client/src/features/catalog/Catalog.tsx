import { Button } from "@mui/material";
import { Product } from "../../app/models/product";

type Props = { products: Product[]; addProduct: () => void };

export default function Catalog({ products, addProduct }: Props) {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <Button variant="contained" onClick={addProduct}>
        Add Product by clicking
      </Button>
    </div>
  );
}
