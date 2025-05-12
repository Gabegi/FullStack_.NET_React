import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = { products: Product[]; addProduct: () => void };

export default function Catalog({ products }: Props) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
