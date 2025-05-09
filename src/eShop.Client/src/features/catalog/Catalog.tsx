import { Product } from "../../app/models/product";

type Props = { products: Product[]; addProduct: () => void };

export default function Catalog(props: Props) {
  return (
    <div>
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={props.addProduct}>Add Product</button>
    </div>
  );
}
