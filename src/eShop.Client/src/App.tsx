import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function App() {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
  ]);

  return (
    <div>
      <h1>Restore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
