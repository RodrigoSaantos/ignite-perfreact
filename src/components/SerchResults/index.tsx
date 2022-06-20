import { useMemo } from "react";
import { ProductItem } from "../ProductItem";

interface Product {
  id: number;
  price: number;
  title: string;
}

interface SearchResultsProps {
  results: Product[];
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])
  return (
    <div>
      <h2>{totalPrice}</h2>
       {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList}  />
        )
      })}

    </div>
  )
}