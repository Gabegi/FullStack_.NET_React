import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog({ products }: Props) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
