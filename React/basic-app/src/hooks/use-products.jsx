import { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => setError("에러가 발생했습니다."))
      .finally(() => setLoading(false));
    return () => {
      console.log("청소");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
