import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    fetch("https://localhost:5001/api/products/${id}")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);
  return <div>{product?.name}</div>;
}
