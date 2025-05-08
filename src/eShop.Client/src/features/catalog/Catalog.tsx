import { Product } from "./app/models/product";

export default function Catalog(props: Product) {
  return (
    <div>
      <ul>
        {props.products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={props.addProduct}>Add Product</button>
    </div>
  );
}
